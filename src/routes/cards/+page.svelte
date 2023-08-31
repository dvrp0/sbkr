<script lang="ts">
    import { cards, convertType, convertRarity, convertKingdom } from "$lib/card";
    import Card from "$components/Card.svelte";

    let shownCards = cards;
</script>

<div class="entries">
    {#each shownCards as card (card.id)}
        <a href="/cards/{card.id}">
            <Card type={convertType(card.type)} faction={convertKingdom(card.kingdom)} name={card.name} unitType={card.unitTypes}
                cost={card.cost} strengths={card.strengths} movement={card.movement} rarity={convertRarity(card.rarity)}
                cardart={`/images/cards/cardart_${card.id.toUpperCase()}.png`} abilities={card.descriptions} count={1} noMargin />
        </a>
    {/each}
</div>

<style>
    .entries {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    a {
        all: unset;
        cursor: pointer;
    }
</style>