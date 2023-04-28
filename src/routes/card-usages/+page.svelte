<script lang="ts">
    import type { PageData } from "./$types"
    import { MetaTags } from "svelte-meta-tags";

    export let data: PageData;

    let posts = data.posts;
    let title: string = "카드 사용량";
    let description: string = "매일 업데이트되는 리그별 카드 사용량입니다.";
</script>

<MetaTags
    title={title}
    titleTemplate="%s - sbkr"
    description={description}
    canonical="https://sbkr.pages.dev/card-usages"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: "https://sbkr.pages.dev/releases/card-usages",
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

{#each posts as post (post.id)}
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