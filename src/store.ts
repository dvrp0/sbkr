import type { CardData } from "$lib/card";
import { writable } from "svelte/store";

export const cards = writable({} as CardData[]);