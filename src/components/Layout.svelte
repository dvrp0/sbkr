<script>
    export let title = "";
    export let headerImage = "";
    export let publishedAt = "";
    export let summary = "";

    let dates = publishedAt.split("/");
    let origin = `https://stormbound-kitty.com/releases/${dates[1]}-${dates[0]}`
</script>

<svelte:head >
    <title>{title}</title>
</svelte:head>

<article class="post">
    <img class="header" alt="패치노트 이미지" src={headerImage} />
    <h1>{title}</h1>
    <div class="intro">
        <p class="summary">{summary}</p>
        <div class="links">
            <a href="/"><img alt="홈" src="/images/home.webp" /></a>
            <a href={origin}><img alt="Kitty" src="/images/kitty.webp" /></a>
        </div>
    </div>
    <slot />
</article>

<style>
    .header {
        width: var(--large);
        margin-bottom: -4.8rem;
        margin-left: calc(((var(--large) - 100%) / 2 * -1));
        margin-right: calc(((var(--large) - 100%) / 2 * -1));
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
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>