<script lang="ts">
    import type { PageData } from "./$types";
    import Icon from "$components/Icon.svelte";

    export let data: PageData;

    let title = data.title;
    let headerImage = data.headerImage;
    let summary = data.summary;
    let source = data.source;
    let usage = data.usage;
    let change = data.change;
    let translations = data.translations;

    function convertToJSONKey(value: string): keyof JSON
    {
        return value as keyof JSON;
    }

    function convertToNumber(value: any): number
    {
        return value as unknown as number;
    }

    function isPositive(value: any): boolean
    {
        return value !== "new" && convertToNumber(value) > 0;
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<article class="post">
    <img class="header" alt="이미지" src={headerImage} />
    <h1>{title}</h1>
    <div class="intro">
        <p class="summary">{summary}</p>
        <div class="links">
            <a href="/card-usages"><img alt="뒤로 가기" src="/images/icons/back.webp" /></a>
            <a href={source}><img alt="Kitty" src="/images/icons/kitty.webp" /></a>
        </div>
    </div>
    <ul>
        <li>모든 데이터는 게임에서 바로 추출되었으며 매일 업데이트됩니다.</li>
        <li>각 소제목은 카드가 등장하는 비율을 나타냅니다. 0.5 – 0.6로 분류된 카드들은 지난 30일 동안 이 리그에서 플레이된 모든 덱 중 50~60%에 포함됐다는 의미입니다.</li>
        <li>승패나 한 번이라도 사용됐는지 여부와는 상관없이, 랭크전에서 플레이된 덱에 카드가 포함됐다면 집계됩니다.</li>
        <li>본 데이터는 파벌간 우위를 나타내지 않으며, 항상 겨울-철갑-그림자-동방 순으로 표시합니다. 동일한 파벌 내의 사용량 순위만이 유의미합니다.</li>
        <li>다만 중립 카드가 사용량이 가장 높게 나오는 이유는 모든 파벌의 덱에서 사용되기 때문입니다.</li>
    </ul>
    {#each Object.entries(usage).reverse() as [key, value]}
    <h2>{key}</h2>
        <div class="entries">
            {#each value as entry}
            {@const c = change[convertToJSONKey(entry)]}
            <div class="entry">
                <div class="entry-image">
                    <img alt={entry} src="/images/cards/cardart_{entry.toUpperCase()}.png" />
                </div>
                <div class="entry-info">
                    <span>{translations[convertToJSONKey(entry)]}</span>
                    <div class="entry-info-change">
                        {#if c === "0"}
                        <span>-</span>
                        {:else if c === "new"}
                        <Icon type="new" />
                        <span class="margin">신규</span>
                        {:else if isPositive(c)}
                        <Icon type="up" />
                        <span class="margin">{c}</span>
                        {:else}
                        <Icon type="down" />
                        <span class="margin">{Math.abs(convertToNumber(c))}</span>
                        {/if}
                    </div>
                </div>
            </div>
            {/each}
        </div>
    {/each}
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

    .links {
        display: flex;
        margin-top: -0.4rem;
    }

    .links img {
        width: 1.75rem;
    }

    .entries {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: -0.5em;
    }
    
    .entry {
        background-color: var(--c-background-light);
        display: flex;
        width: calc(50% - 2.5em);
        padding: 1em;
        margin-right: 0.5em;
        margin-bottom: 0.5em;
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

    ul {
        margin-top: 4rem;
    }

    @media (max-width: 74rem) {
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (max-width: 43rem) {
        .entry {
            width: 100%;
        }
    }
</style>