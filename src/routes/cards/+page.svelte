<script lang="ts">
    import type { CardData } from "$lib/card";
    import { getContext } from "svelte";
    import CardEntry from "$components/CardEntry.svelte";

    const cards = getContext<CardData[]>("cards");
</script>

<div class="entries">
    {#each cards as card (card.id)}
    <CardEntry entryId={card.id} />
    {/each}
</div>

<style>
    .entries {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: -0.5em;
    }
</style>