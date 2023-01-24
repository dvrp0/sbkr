import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";
import type { PageServerLoad } from "./$types";

// export const prerender = false;

export const load: PageServerLoad = async ({ fetch, params }) => {
    const meta = getCardUsagesMetas().find(x => x.id == params.league) as ArticleMeta;

    let response = await fetch("https://sbkrserver.deta.dev/usages/");
    const usage = (await response.json())["result"][params.league] as JSON;
    
    response = await fetch("https://sbkrserver.deta.dev/usage-changes/");
    const change = (await response.json())["result"][params.league] as JSON;
    
    response = await fetch("https://sbkrserver.deta.dev/translations")
    const translations = (await response.json())["result"] as JSON;

    return {
        ...meta,
        league: params.league,
        usage,
        change,
        translations
    };
}