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
                        <Icon type="new" givesMargin />
                        {:else if isPositive(c)}
                        <Icon type="up" givesMargin />
                        <span>{c}</span>
                        {:else}
                        <Icon type="down" givesMargin />
                        <span>{Math.abs(convertToNumber(c))}</span>
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
        justify-content: space-between;
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