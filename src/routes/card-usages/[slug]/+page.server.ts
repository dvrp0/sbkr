import { getCardUsagesMetas, type ArticleMeta } from "$lib/server/article";
import type { PageServerLoad } from "./$types";
import { get } from "svelte/store";
import { translations } from "../../../store";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const meta = getCardUsagesMetas().find(x => x.id == params.slug) as ArticleMeta;

    let response = await fetch("https://sbkrserver.deta.dev/usages/");
    const usage = (await response.json())["result"][params.slug] as JSON;

    response = await fetch("https://sbkrserver.deta.dev/usage-changes/");
    const change = (await response.json())["result"][params.slug] as JSON;

    response = await fetch("https://sbkrserver.deta.dev/translations")
    translations.set((await response.json())["result"]);

    return {
        ...meta,
        slug: params.slug,
        usage,
        change,
        translations: get(translations)
    };
}