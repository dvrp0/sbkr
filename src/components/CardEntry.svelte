<script lang="ts">
    import { type CardData, cards, convertKingdom } from "$lib/card";
    import Badge from "$components/Badge.svelte";
    import CardLink from "$components/CardLink.svelte";
    import Icon from "$components/Icon.svelte";

    export let rank: number;
    export let entryId: string;
    export let change: string;

    const card: CardData = cards.find(({ id }) => id === entryId) ?? {} as CardData;
    const kingdom = convertKingdom(card.kingdom);
</script>

<div class="entry"
    style="--background: var(--c-background-light{kingdom === "neutral" ? "" : `-${kingdom}`});">
    <div class="entry-image">
        <img alt={card.id} src="/images/cards/cardart_{card.id.toUpperCase()}.png" />
    </div>
    <div class="entry-info">
        <div class="entry-badge">
            <Badge {kingdom} darkBackground>
                {card.kingdom} #{rank}
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
            </Badge>
        </div>
        <CardLink target={card.name} noKingdomIcon />
    </div>
</div>

<style>
    .entry {
        width: calc(50% - 2.5em);
        margin-right: 0.5em;
        margin-bottom: 0.5em;
        padding: 1em;
        display: flex;
        background-color: var(--background);
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

    .entry-badge {
        margin-bottom: 0.25rem;
    }

    .entry-info-change {
        margin-left: 0.5rem;
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