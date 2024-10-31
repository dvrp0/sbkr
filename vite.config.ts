import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, loadEnv } from "vite";
import type { CardData } from "$lib/card";

export default defineConfig(async ({ mode }) => {
    return {
        define: {
            CARDS: await fetch(`${loadEnv(mode, process.cwd(), "").PUBLIC_API_ENDPOINT}/cards/`)
                .then(response => response.json())
                .then(result => result["result"] as CardData[])
                .then(data => data.sort((a, b) => {
                    if (a.cost === b.cost)
                        return a.name.localeCompare(b.name);
    
                    return a.cost - b.cost;
                }))
        },
        plugins: [sveltekit()]
    }
})