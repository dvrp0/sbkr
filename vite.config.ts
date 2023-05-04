import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import type { CardData } from "$lib/card";

const config: UserConfig = {
    define: {
        CARDS: await fetch("https://sbkr-1-x0172776.deta.app/cards/")
            .then(response => response.json())
            .then(result => result["result"] as CardData[])
    },
    plugins: [sveltekit()]
};

export default config;