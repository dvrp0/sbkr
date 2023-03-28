import type { CardData } from "$lib/card";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const card = async () => {
        const response = await fetch(`https://sbkrserver.deta.dev/cards/?id=${[params.id]}&stringify=false`);
        return (await response.json())["result"] as CardData;
    }

    const stringified = async () => {
        const response = await fetch(`https://sbkrserver.deta.dev/cards/?id=${[params.id]}`);
        return (await response.json())["result"] as string;
    }

    return {
        card: card(),
        stringified: stringified()
    };
}