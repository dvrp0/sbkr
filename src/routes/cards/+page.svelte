<script lang="ts">
    import { cards } from "../../store";
    import { convertFaction } from "$lib/card";
</script>

<div class="entries">
    {#each $cards as card}
    <div class="entry {convertFaction(card.kingdom)}">
        <div class="entry-image">
            <img alt={card.id} src="/images/cards/cardart_{card.id.toUpperCase()}.png" />
        </div>
        <div class="entry-info">
            <a href="/cards/{card.id}">{card.name}</a>
        </div>
    </div>
    {/each}
</div>

<style>
    .entries {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: -0.5em;
    }
    
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
</style>