<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData

    let posts = data.posts;
</script>

{#each posts as post}
<article class="entry">
    <img class="image" alt="메인 이미지" src="{post.headerImage}" />
    <h2 class="title"><a href={`/card-usages/${post.id}`}>{post.title}</a></h2>
    <p class="summary">{post.summary}</p>
</article>
{/each}

<style>
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