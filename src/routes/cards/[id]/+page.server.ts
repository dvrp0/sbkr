import type { CardData } from "$lib/card";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const stringified = async () => {
        const response = await fetch(`https://sbkr-1-x0172776.deta.app/cards/?id=${[params.id]}&stringify=true`);
        return (await response.json())["result"] as string;
    }

    return {
        id: params.id,
        stringified: stringified()
    };
}