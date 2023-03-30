<script lang="ts">
    import type { PageData } from "./$types";
    import { cards } from "../store";
    import { MetaTags } from "svelte-meta-tags";

    export let data: PageData

    let posts = data.posts;
    cards.update(x => x = data.cards);

    let title: string = "sbkr";
    let description: string = "sbkr은 스톰바운드의 한국어 컨텐츠를 제공하는 웹사이트입니다.";
</script>

<MetaTags
    title={title}
    description={description}
    canonical="https://sbkr.pages.dev/about"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: "https://sbkr.pages.dev/about",
        title: title,
        description: description
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

{#each posts as post}
<article class="entry">
    <img class="image" alt="메인 이미지" src={post.headerImage} />
    <h2 class="title"><a href={`/releases/${post.id}`}>{post.title}</a></h2>
    <p class="published-at">{post.publishedAt}</p>
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