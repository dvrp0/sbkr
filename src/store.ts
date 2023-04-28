import type { CardData } from "$lib/card";
import { type Writable, writable } from "svelte/store";

export const cards: Writable<CardData[]> = writable([]);