import { getPatchNotesMetas } from "$lib/server/article";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    const posts = getPatchNotesMetas();

    return { posts };
}