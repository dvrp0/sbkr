import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";
import type { PageServerLoad } from "./$types";

// export const prerender = false;

export const load: PageServerLoad = async ({ fetch, params }) => {
    const meta = getCardUsagesMetas().find(x => x.id == params.league) as ArticleMeta;

    const usage = async () => {
        const response = await fetch(`https://sbkrserver.deta.dev/usages?league=${params.league}`);
        return (await response.json())["result"] as JSON;
    }

    const change = async () => {
        const response = await fetch(`https://sbkrserver.deta.dev/usage-changes?league=${params.league}`);
        return (await response.json())["result"] as JSON;
    }

    const translations = async () => {
        const response = await fetch("https://sbkrserver.deta.dev/translations");
        return (await response.json())["result"] as JSON;
    }

    return {
        ...meta,
        league: params.league,
        usage: usage(),
        change: change(),
        translations: translations()
    };
}