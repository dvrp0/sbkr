<script>
    export let title = "";
    export let headerImage = "";
</script>

<svelte:head >
    <title>{title}</title>
</svelte:head>

<article class="post">
    <img alt="패치노트 이미지" src={headerImage} />
    <h1>{title}</h1>
    <slot />
</article>

<style>
    img {
        margin-bottom: -10%;
    }
</style>