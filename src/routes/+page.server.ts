import { getPatchNotesMetas } from "$lib/server/article";

export async function load()
{
    const posts = getPatchNotesMetas();

    return {
        posts
    };
}