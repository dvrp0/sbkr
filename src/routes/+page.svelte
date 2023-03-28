<script lang="ts">
    import type { PageData } from "./$types";
    import { cards } from "../store";

    export let data: PageData

    let posts = data.posts;
    cards.update(x => x = data.cards);
</script>

<svelte:head>
    <title>sbkr</title>
</svelte:head>

<!-- <div class="header">
    <img class="logo" alt="로고" src="/favicon.png" />
</div> -->

{#each posts as post}
<article class="entry">
    <img class="image" alt="메인 이미지" src={post.headerImage} />
    <h2 class="title"><a href={`/releases/${post.id}`}>{post.title}</a></h2>
    <p class="published-at">{post.publishedAt}</p>
    <p class="summary">{post.summary}</p>
</article>
{/each}

<style>
    /* .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 1rem;
    }

    .logo {
        width: 15%;
    } */

    .entry {
        margin: 4rem 0;
    }

    .title {
        font-size: 1.8rem;
    }

    .image {
        width: 100%;
        margin-bottom: -1.5rem;
    }

    .title {
        margin-bottom: -1.5rem;
    }
</style>