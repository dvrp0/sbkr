import { writable } from "svelte/store";

export let usages = writable({} as JSON);
export let changes = writable({} as JSON);
export let translations = writable({} as JSON);