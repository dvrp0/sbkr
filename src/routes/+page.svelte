<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData

    let posts = data.posts;
</script>

<svelte:head>
    <title>스톰바운드 한국어 패치 노트</title>
</svelte:head>

<h1>스톰바운드 한국어 패치 노트</h1>

<ul class="posts">
    {#each posts as post}
    <article>
        <img class="header-image" alt="메인 이미지" src={post.headerImage} />
        <h2 class="title"><a href={`/releases/${post.id}`}>{post.title}</a></h2>
        <p class="published-at">{post.publishedAt}</p>
        <p class="summary">{post.summary}</p>
    </article>
    {/each}
</ul>