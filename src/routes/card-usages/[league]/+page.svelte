<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import CardEntry from "$components/CardEntry.svelte";

    export let data;

    let title = data.title;
    let headerImage = data.headerImage;
    let summary = data.summary;
    let source = data.source;
    let league = data.league;
    let usage = data.usage;
    let change = data.change;
    let updatedAt = data.updatedAt;

    const entries = Object.entries(usage).reverse();

    function convertToJSONKey(value: string): keyof JSON
    {
        return value as keyof JSON;
    }

    function convertToString(value: any): string
    {
        return value as string;
    }

    function formatToKST(milliseconds: number): string
    {
        const date = new Date(milliseconds);
        const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
        const kst = new Date(utc + 9 * 60 * 60 * 1000).toLocaleString("af-ZA"); //yyyy-MM-dd HH:mm:ss 형식을 위한 toLocaleString()

        return kst.replaceAll("-", "/");
    }

    function getRankOffset(index: number, kingdom: string): number
    {
        if (index === 0)
            return 0;

        // let offset = 0;

        // for (let i = index - 1; i >= 0; i--)
        // {
        //     const previous = entries[i][1];

        //     offset += previous[kingdom].length;
        // }

        return entries
            .slice(0, index)
            .map(x => x[1][kingdom].length)
            .reduce((acc, cur) => acc + cur, 0);

        // return offset;
    }
</script>

<MetaTags
    {title}
    titleTemplate="%s - sbkr"
    description={summary}
    canonical="https://sbkr.pages.dev/card-usages/{league}"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: `https://sbkr.pages.dev/card-usages/${league}`,
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

<article class="post">
    <img class="header" alt="이미지" src={headerImage} />
    <h1>{title}</h1>
    <div class="intro">
        <p class="summary">{summary}</p>
        <div class="links">
            <a href="/card-usages"><img alt="뒤로 가기" src="/images/icons/back.webp" /></a>
            <a href={source}><img alt="Kitty" src="/images/icons/kitty.webp" /></a>
        </div>
    </div>
    <ul>
        <li>모든 데이터는 게임에서 바로 추출되었으며 한 시간마다 업데이트됩니다. (최근 업데이트: {formatToKST(updatedAt)})</li>
        <li>각 소제목은 카드가 등장하는 비율을 나타냅니다. 0.5 – 0.6로 분류된 카드들은 지난 30일 동안 이 리그에서 플레이된 모든 덱 중 50~60%에 포함됐다는 의미입니다.</li>
        <li>승패나 한 번이라도 사용됐는지 여부와는 상관없이, 랭크전에서 플레이된 덱에 카드가 포함됐다면 집계됩니다.</li>
        <li>본 데이터는 파벌간 우위를 나타내지 않으며, 항상 겨울-철갑-그림자-동방 순으로 표시합니다. 동일한 파벌 내의 사용량 순위만이 유의미합니다.</li>
        <li>다만 중립 카드가 사용량이 가장 높게 나오는 이유는 모든 파벌의 덱에서 사용되기 때문입니다.</li>
    </ul>
    {#each entries as [tier, value], tierIndex (tier)}
        <h2>{tier}</h2>
        <div class="entries">
            {#each value["neutral"] as entry, i (entry)}
                {@const rankOffset = getRankOffset(tierIndex, "neutral")}
                <CardEntry rank={rankOffset + i + 1} entryId={entry} change={convertToString(change[convertToJSONKey(entry)])} />
            {/each}
            {#each value["winter"] as entry, i (entry)}
                {@const rankOffset = getRankOffset(tierIndex, "winter")}
                <CardEntry rank={rankOffset + i + 1} entryId={entry} change={convertToString(change[convertToJSONKey(entry)])} />
            {/each}
            {#each value["ironclad"] as entry, i (entry)}
                {@const rankOffset = getRankOffset(tierIndex, "ironclad")}
                <CardEntry rank={rankOffset + i + 1} entryId={entry} change={convertToString(change[convertToJSONKey(entry)])} />
            {/each}
            {#each value["shadowfen"] as entry, i (entry)}
                {@const rankOffset = getRankOffset(tierIndex, "shadowfen")}
                <CardEntry rank={rankOffset + i + 1} entryId={entry} change={convertToString(change[convertToJSONKey(entry)])} />
            {/each}
            {#each value["swarm"] as entry, i (entry)}
                {@const rankOffset = getRankOffset(tierIndex, "swarm")}
                <CardEntry rank={rankOffset + i + 1} entryId={entry} change={convertToString(change[convertToJSONKey(entry)])} />
            {/each}
        </div>
    {/each}
</article>

<style>
    .header {
        width: var(--large);
        margin-bottom: -4.8rem;
        margin-left: calc((var(--large) - 100%) / 2 * -1);
        margin-right: calc((var(--large) - 100%) / 2 * -1);
    }

    .intro {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .entries {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: -0.5em;
    }

    ul {
        margin-top: 4rem;
    }

    @media (max-width: 74rem) {
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>