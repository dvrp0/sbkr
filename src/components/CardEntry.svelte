<script lang="ts">
    import { type CardData, convertFaction } from "$lib/card";
    import { getContext } from "svelte";
    import type { Readable } from "svelte/store";
    import Icon from "$components/Icon.svelte";
    import CardLink from "$components/CardLink.svelte";

    export let entryId: string;
    export let change: string = "";

    const cards = getContext<Readable<CardData[]>>("cards");

    let card: CardData = $cards.find(({ id }) => id === entryId) ?? {} as CardData;
</script>

<div class="entry {convertFaction(card.kingdom)}">
    <div class="entry-image">
        <img alt={card.id} src="/images/cards/cardart_{card.id.toUpperCase()}.png" />
    </div>
    <div class="entry-info">
        <CardLink target={card.name} />
        {#if change !== ""}
        <div class="entry-info-change">
            {#if change === "0"}
            <span>-</span>
            {:else if change === "new"}
            <Icon type="new" />
            <span class="margin">신규</span>
            {:else if parseInt(change) > 0}
            <Icon type="up" />
            <span class="margin">{change}</span>
            {:else}
            <Icon type="down" />
            <span class="margin">{Math.abs(parseInt(change))}</span>
            {/if}
        </div>
        {/if}
    </div>
</div>

<style>
    .entry {
        display: flex;
        width: calc(50% - 2.5em);
        padding: 1em;
        margin-right: 0.5em;
        margin-bottom: 0.5em;
    }

    .neutral {
        background-color: var(--c-background-light);
    }

    .swarm {
        background-color: var(--c-background-light-swarm);
    }

    .ironclad {
        background-color: var(--c-background-light-ironclad);
    }

    .shadowfen {
        background-color: var(--c-background-light-shadowfen);
    }

    .winter {
        background-color: var(--c-background-light-winter);
    }

    .entry-image {
        width: 6em;
        height: 6em;
        margin-right: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .entry-image img {
        max-width: 5em;
        max-height: 5em;
    }

    .entry-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .entry-info-change {
        display: flex;
        align-items: center;
    }

    .entry-info-change span {
        color: var(--c-foreground-dark);
    }

    .margin {
        margin-left: 0.25em;
    }

    @media (max-width: 43rem) {
        .entry {
            width: 100%;
        }
    }
</style>