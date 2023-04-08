<script lang="ts">
    import { cards } from "../store";
    import { type CardData, convertFaction, convertRarity, convertType } from "$lib/card";
    import Card from "$components//Card.svelte";
    import Icon from "$components/Icon.svelte";

    export let target: string;

    const margin = { x: 3, y: 3};

    let isHovered: boolean = false;
    let position = { x: 0, y: 0 };
    let card: CardData = $cards.find(({ name }) => name === target) ?? {} as CardData;

    function handleMouseOver(event: any)
    {
        isHovered = true;
        position = { x: event.pageX + margin.x, y: event.pageY + margin.y };
    }

    function handleMouseMove(event: any)
    {
        position = { x: event.pageX + margin.x, y: event.pageY + margin.y };
    }

    function handleMouseLeave()
    {
        isHovered = false;
    }
</script>

<strong>
    <span
        on:focus={() => isHovered = true}
        on:mouseover={handleMouseOver}
        on:mousemove={handleMouseMove}
        on:mouseleave={handleMouseLeave}>
        <a href="/cards/{card.id}">{target}</a>
    </span>
</strong>

{#if isHovered}
<div class="tooltip" style="top: {position.y}px; left: {position.x}px;">
    <Card type={convertType(card.type)} faction={convertFaction(card.kingdom)} name={card.name} unitType={card.unitTypes}
          cost={card.cost} strengths={card.strengths} movement={card.movement} rarity={convertRarity(card.rarity)}
          cardart={`/images/cards/cardart_${card.id.toUpperCase()}.png`} abilities={card.descriptions} count={1} />
</div>
{/if}

<style>
    .tooltip {
        position: absolute;
    }
</style>