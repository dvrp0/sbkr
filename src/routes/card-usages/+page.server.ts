import { getCardUsagesMetas } from "$lib/server/article";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const posts = getCardUsagesMetas();

    return { posts };
}