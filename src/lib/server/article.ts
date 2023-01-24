import yaml from "js-yaml";

export type ArticleMeta = {
    id: string;
    title: string;
    publishedAt: string;
    headerImage: string;
    summary: string;
    source: string;
    draft: boolean;
};

export function getPatchNotesMetas(): ArticleMeta[]
{
    const globs = import.meta.glob<{ metadata: ArticleMeta }>("../../routes/releases/**/+page.md", { eager: true });
    const posts = Object.entries(globs);
    
    return posts
        .map(x => {
            return {
                ...x[1].metadata,
                id: x[0].split("releases/")[1].substring(0, 7),
                draft: !!x[1].metadata.draft
            } as ArticleMeta;
        })
        .filter(x => !x.draft)
        .sort((x, y) => x.publishedAt < y.publishedAt ? 1 : -1);
}

export function getCardUsagesMetas(): ArticleMeta[]
{
    const leagues = [
        ["heroes", "영웅"],
        ["diamond", "다이아몬드"],
        ["platinum", "플래티넘"],
        ["gold", "골드"],
        ["silver", "실버"],
        ["bronze", "브론즈"],
        ["iron", "아이언"],
        ["starters", "스타터"]
    ];
    let result: ArticleMeta[] = [];

    for (const league of leagues)
    {
        result.push({
            title: `${league[1]} 리그 카드 사용량`,
            headerImage: `/images/headers/header_${league[0]}.png`,
            summary: `최근 30일 동안 ${league[1]} 리그에서 가장 많이 사용된 카드 목록입니다.`,
            source: `https://stormbound-kitty.com/tier-list/${league[0]}`,
            id: league[0]
        } as ArticleMeta);
    }

    return result;
}