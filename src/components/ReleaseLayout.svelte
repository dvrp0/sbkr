<script>
    import { onMount } from "svelte";
    import { MetaTags } from "svelte-meta-tags";

    /**
     * @typedef {Object} Props
     * @property {string} [title]
     * @property {string} [publishedAt]
     * @property {string} [headerImage]
     * @property {string} [summary]
     * @property {string} [source]
     * @property {boolean} [isHeaderShadowNeeded]
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let {
        title = "",
        publishedAt = "",
        headerImage = "",
        summary = "",
        source = "",
        isHeaderShadowNeeded = false,
        children
    } = $props();

    let innerHeight = $state(0);
    let scrollHeight = $state(0);
    let scrollY = $state(0);

    let splitted = publishedAt.split("/");
    let id = `${splitted[0]}-${splitted[1]}`;

    onMount(() => {
        scrollHeight = document.body.scrollHeight;
    });
</script>

<MetaTags
    {title}
    titleTemplate="%s - sbkr"
    description={summary}
    canonical="https://sbkr.pages.dev/releases/{id}"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: `https://sbkr.pages.dev/releases/${id}`,
        title,
        description: summary,
        images: [
            {
                url: headerImage
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

<svelte:window bind:innerHeight bind:scrollY />

<div class="progress" style="--progress: {scrollY / (scrollHeight - innerHeight) * 100}%;"></div>
<article class="post">
    <div class="headers">
        <img alt="이미지" src={headerImage} />
        {#if isHeaderShadowNeeded}
            <img alt="이미지" src="/images/headers/header_shadow.png" />
        {/if}
    </div>
    <h1>{title}</h1>
    <div class="intro">
        <p class="summary">{summary}</p>
        <div class="links">
            <a href="/"><img alt="뒤로 가기" src="/images/icons/back.webp" /></a>
            {#if source != ""}
                <a href={source}><img alt="Kitty" src="/images/icons/kitty.webp" /></a>
            {/if}
        </div>
    </div>
    {@render children?.()}
</article>

<style>
    .progress {
        width: var(--progress);
        height: 0.1rem;
        margin-top: 4rem;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--c-foreground);
    }

    .headers {
        display: grid;
    }

    .headers img {
        width: var(--large);
        margin-bottom: -4.8rem;
        margin-left: calc((var(--large) - 100%) / 2 * -1);
        margin-right: calc((var(--large) - 100%) / 2 * -1);
        grid-column-start: 1;
        grid-row-start: 1;
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    @media (max-width: 74rem) {
        .headers img {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>