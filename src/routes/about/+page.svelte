<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";

    let title: string = "소개";
    let description: string = "sbkr은 스톰바운드의 한국어 컨텐츠를 제공하는 웹사이트입니다.";
</script>

<MetaTags
    {title}
    titleTemplate="%s - sbkr"
    {description}
    canonical="https://sbkr.pages.dev/about"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: "https://sbkr.pages.dev/about",
        title,
        description,
        images: [
            {
                url: "/images/thumbnail.png"
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

<div class="info">
    <img class="logo" alt="DVRP" src="/images/DVRP.png" />
    <div class="links">
        <a href="https://velog.io/@dvrp"><img alt="velog" src="/images/icons/velog.webp" /></a>
        <a href="https://github.com/dvrp0/sbkr"><img alt="Github" src="/images/icons/github.webp" /></a>
    </div>
</div>
<p>안녕하세요, DVRP입니다. 저는 2018년부터 지금까지 다양한 스톰바운드 소식을 번역해 유저분들께 전달해 드리고 있습니다. 단순 소식 전달 외에 열악한 한국어 번역 개선에도 큰 관심이 있어 2022년 6월부터 개발사와 협력해 번역 수정 작업을 진행했고, 2022년 12월부터 공식 한국어 번역을 맡고 있습니다.</p>
<p>2022년 11월부터 개발하기 시작한 sbkr은 번역한 소식을 더욱 용이하고 보기 좋게 전달할 수 있으면 좋겠다라는 생각에서 출발했습니다. 현재는 패치 노트 외에도 여러 스톰바운드 관련 한국어 컨텐츠를 제공하는 것을 목표로 삼고 있습니다.</p>

<style>
    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        width: 20rem;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        margin-left: 0.75rem;
    }

    .links img {
        width: 1.25rem;
        margin-right: 0.75rem;
    }
</style>