import { json } from "@sveltejs/kit";
import { leagues } from "$lib/server/article";

export async function POST({ fetch, platform })
{
    console.log("Revalidating");
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

    return json({
        usages,
        changes,
        updatedAt: now
    });
}