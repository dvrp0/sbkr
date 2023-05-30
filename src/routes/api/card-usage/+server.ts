import { json } from "@sveltejs/kit";

const SWR_TTL = 60 * 60 * 1000; //1시간

export async function POST({ fetch, request, platform })
{
    const key = await request.text();
    const result = await platform!.env.CARD_USAGES.getWithMetadata(key);
    const createdAt = (result.metadata as { createdAt: number })?.createdAt ?? 0;

    if (result && result.value)
    {
        if (!result.metadata || Date.now() - createdAt >= SWR_TTL)
            platform!.context.waitUntil(fetch("/api/card-usage/revalidate", {
                method: "POST"
            }));

        return json({
            ...JSON.parse(result.value),
            updatedAt: createdAt
        });
    }

    const response = await fetch("/api/card-usage/revalidate", {
        method: "POST"
    }).then(response => response.json());

    return json({
        usage: response["usages"][key] as JSON,
        change: response["changes"][key] as JSON,
        updatedAt: response["updatedAt"] as number
    });
}