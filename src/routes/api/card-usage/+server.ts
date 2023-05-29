import { json } from "@sveltejs/kit";

const SWR_TTL = 60 * 60 * 1000; //1시간

async function saveUsageData(key: string, platform: Readonly<App.Platform> | undefined)
{
    const usage = await fetch(`https://sbkr-1-x0172776.deta.app/usages?league=${key}`)
        .then(response => response.json())
        .then(result => result["result"] as JSON);
    const change = await fetch(`https://sbkr-1-x0172776.deta.app/usage-changes?league=${key}`)
        .then(response => response.json())
        .then(result => result["result"] as JSON);
    const now = Date.now();
    const data = {
        usage,
        change
    };

    platform!.context.waitUntil(platform!.env.CARD_USAGES.put(key, JSON.stringify(data), {
        metadata: {
            createdAt: now
        }
    }));

    return {
        ...data,
        updatedAt: now
    };
}

export async function POST({ request, platform })
{
    const key = await request.text();
    let result = await platform!.env.CARD_USAGES.getWithMetadata(key);

    if (result && result.value)
    {
        if (!result.metadata || Date.now() - result.metadata.createdAt >= SWR_TTL)
        {
            console.log("Revalidating");
            platform!.context.waitUntil(saveUsageData(key, platform));
        }

        return json({
            ...JSON.parse(result.value),
            updatedAt: result.metadata.createdAt
        });
    }

    return json(await saveUsageData(key, platform));
}