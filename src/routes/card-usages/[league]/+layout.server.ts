import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";

export const prerender = false;

export async function load({ params })
{
    const meta = getCardUsagesMetas().find(x => x.id == params.league) as ArticleMeta;

    return {
        ...meta,
        league: params.league
    };
}