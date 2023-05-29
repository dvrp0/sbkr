// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
    interface Platform {
        env: {
            CARD_USAGES: import("@cloudflare/workers-types").KVNamespace;
        };
        context: {
            waitUntil(promise: Promise<any>): void;
        };
    }
}