import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";
import type { PageServerLoad } from "./$types";
import { get } from "svelte/store";
import { usages, changes, translations } from "../../../store";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const meta = getCardUsagesMetas().find(x => x.id == params.slug) as ArticleMeta;

    if (Object.getOwnPropertyNames(get(usages)).length === 0)
    {
        const response = await fetch("https://sbkrserver.deta.dev/usages/");
        usages.set((await response.json())["result"]);
    }

    if (Object.getOwnPropertyNames(get(changes)).length === 0)
    {
        const response = await fetch("https://sbkrserver.deta.dev/usage-changes/");
        changes.set((await response.json())["result"]);
    }

    if (Object.getOwnPropertyNames(get(translations)).length === 0)
    {
        const response = await fetch("https://sbkrserver.deta.dev/translations")
        translations.set((await response.json())["result"]);
    }

    return {
        ...meta,
        slug: params.slug,
        usage: get(usages)[params.slug as keyof JSON] as unknown as JSON,
        change: get(changes)[params.slug as keyof JSON] as unknown as JSON,
        translations: get(translations)
    };
}