import { getCardUsagesMetas } from "$lib/server/article";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    const posts = getCardUsagesMetas();

    return { posts };
}