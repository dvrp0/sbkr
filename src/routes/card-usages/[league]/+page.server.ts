import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";

export async function load({ fetch, params })
{
    const meta = getCardUsagesMetas().find(x => x.id == params.league) as ArticleMeta;

    const usage = async () => {
        const response = await fetch(`https://sbkr-1-x0172776.deta.app/usages?league=${params.league}`);
        return (await response.json())["result"] as JSON;
    }

    const change = async () => {
        const response = await fetch(`https://sbkr-1-x0172776.deta.app/usage-changes?league=${params.league}`);
        return (await response.json())["result"] as JSON;
    }

    return {
        ...meta,
        league: params.league,
        usage: usage(),
        change: change()
    };
}