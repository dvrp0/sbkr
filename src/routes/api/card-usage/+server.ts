import { json } from "@sveltejs/kit";
import { leagues } from "$lib/server/article";

const SWR_TTL = 60 * 60 * 1000; //1시간

async function saveUsageData(key: string, platform: Readonly<App.Platform> | undefined)
{
    const usages = await fetch("https://sbkr-1-x0172776.deta.app/usages")
        .then(response => response.json())
        .then(result => result["result"] as JSON);
    const changes = await fetch("https://sbkr-1-x0172776.deta.app/usage-changes")
        .then(response => response.json())
        .then(result => result["result"] as JSON);
    const now = Date.now();

    for (const league of leagues.map(x => x[0]))
    {
        const data = {
            usage: usages[league as keyof JSON],
            change: changes[league as keyof JSON]
        };

        platform!.context.waitUntil(platform!.env.CARD_USAGES.put(league, JSON.stringify(data), {
            metadata: {
                createdAt: now
            }
        }));
    }

    return {
        usage: usages[key as keyof JSON],
        change: changes[key as keyof JSON],
        updatedAt: now
    };
}

export async function POST({ request, platform })
{
    const key = await request.text();
    const result = await platform!.env.CARD_USAGES.getWithMetadata(key);
    const createdAt = (result.metadata as { createdAt: number })?.createdAt ?? undefined;

    if (result && result.value)
    {
        if (!result.metadata || Date.now() - createdAt >= SWR_TTL)
        {
            console.log("Revalidating");
            return json(await saveUsageData(key, platform));
        }

        return json({
            ...JSON.parse(result.value),
            updatedAt: createdAt
        });
    }

    return json(await saveUsageData(key, platform));
}