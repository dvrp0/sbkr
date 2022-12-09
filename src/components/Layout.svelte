<script>
    export let title = "";
    export let headerImage = "";
</script>

<svelte:head >
    <title>{title}</title>
</svelte:head>

<article class="post">
    <img class="header" alt="패치노트 이미지" src={headerImage} />
    <h1>{title}</h1>
    <slot />
</article>

<style>
    .header {
        width: var(--large);
        margin-bottom: -10%;
        margin-left: calc(((var(--large) - 100%) / 2 * -1));
        margin-right: calc(((var(--large) - 100%) / 2 * -1));
    }

    @media (max-width: 74rem) {
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>