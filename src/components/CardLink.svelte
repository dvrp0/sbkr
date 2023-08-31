<script lang="ts">
    import { type CardData, cards, convertKingdom, convertRarity, convertType } from "$lib/card";
    import { fade } from "svelte/transition";
    import Card from "$components/Card.svelte";
    import Icon from "$components/Icon.svelte";

    export let target: string;

    const margin = { x: 3, y: 3};
    const duration = 150;
    const card: CardData = cards.find(({ name }) => name === target) ?? {} as CardData;
    
    let isHovered: boolean = false;
    let position = { x: 0, y: 0 };

    function handleFocus()
    {
        isHovered = true;
    }

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

{#if isHovered}
    <div class="tooltip" style="top: {position.y}px; left: {position.x}px;" in:fade={{duration}} out:fade={{duration}}>
        <Card type={convertType(card.type)} faction={convertKingdom(card.kingdom)} name={card.name} unitType={card.unitTypes}
            cost={card.cost} strengths={card.strengths} movement={card.movement} rarity={convertRarity(card.rarity)}
            cardart={`/images/cards/cardart_${card.id.toUpperCase()}.png`} abilities={card.descriptions} count={1} />
    </div>
{/if}

<Icon type={convertKingdom(card.kingdom)} />
<a href="/cards/{card.id}" on:focus={handleFocus} on:mouseover={handleMouseOver} on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}>
    {target}
</a>

<style>
    .tooltip {
        position: absolute;
    }
</style>