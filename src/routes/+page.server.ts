import { getPatchNotesMetas } from "$lib/server/article";
import type { CardData } from "$lib/card";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    const posts = getPatchNotesMetas();

    const cards = async () => {
        const response = await fetch("https://sbkrserver.deta.dev/cards/");
        return (await response.json())["result"] as CardData[];
    };

    return {
        posts,
        cards: cards()
    };
}