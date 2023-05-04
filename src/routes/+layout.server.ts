import { getPatchNotesMetas } from "$lib/server/article";

export const prerender = true;

export async function load()
{
    const posts = getPatchNotesMetas();

    return {
        posts
    };
}