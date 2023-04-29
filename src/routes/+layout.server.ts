import type { CardData } from "$lib/card";

export const prerender = true;

export async function load({ fetch })
{
    const response = await fetch("https://sbkr-1-x0172776.deta.app/cards/");
    const result = (await response.json())["result"] as CardData[];

    return {
        cards: result
    };
}