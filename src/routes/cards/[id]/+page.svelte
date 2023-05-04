<script lang="ts">
    import type { PageData } from "./$types"
    import { type CardData, cards, convertType, convertRarity, convertFaction } from "$lib/card";
    import { MetaTags } from "svelte-meta-tags";
    import Card from "$components/Card.svelte";

    export let data: PageData;

    let card = cards.find(({ id }) => id === data.id) ?? {} as CardData;
</script>

<MetaTags
    title={card.name}
    titleTemplate="%s - sbkr"
    description={card.stringified}
    canonical="https://sbkr.pages.dev/cards/{card.id}"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: `https://sbkr.pages.dev/cards/${card.id}`,
        title: card.name,
        description: card.stringified,
        images: [
            {
                url: `/images/cards/cardart_${card.id.toUpperCase()}.png`
            }
        ]
    }}
    additionalMetaTags={[
        {
            property: "author",
            content: "DVRP"
        },
        {
            property: "theme-color",
            content: "#06161E"
        }
    ]}
/>

<article class="post">
    <img class="header" alt="이미지" src="/images/headers/header_cards.png" />
    <h1>{card.name}</h1>
    <div class="intro">
        <p class="summary">{card.kingdom} {card.rarity} {card.type}</p>
    </div>
    <Card type={convertType(card.type)} faction={convertFaction(card.kingdom)} name={card.name} unitType={card.unitTypes}
          cost={card.cost} strengths={card.strengths} movement={card.movement} rarity={convertRarity(card.rarity)}
          cardart={`/images/cards/cardart_${card.id.toUpperCase()}.png`} abilities={card.descriptions}/>
</article>

<style>
    .header {
        width: var(--large);
        margin-bottom: -4.8rem;
        margin-left: calc((var(--large) - 100%) / 2 * -1);
        margin-right: calc((var(--large) - 100%) / 2 * -1);
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -3rem;
    }

    .summary {
        text-align: center;
        padding: 0 20%;
    }

    @media (max-width: 74rem) {
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>