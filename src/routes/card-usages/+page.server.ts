import { getCardUsagesMetas } from "$lib/server/article";

export async function load()
{
    const posts = getCardUsagesMetas();

    return { posts };
}