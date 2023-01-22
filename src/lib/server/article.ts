import fss from "fs";
import fs from "fs/promises";
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

export function extractMeta(id: string, markdown: string): ArticleMeta
{
    const seperator = '---\n';
    const raw = markdown.substring(seperator.length, markdown.indexOf(seperator, seperator.length)).trim();
    const frontmatter = yaml.load(raw) as Record<string, any>;

    return {
        ...frontmatter,
        id,
        draft: !!frontmatter.draft
    } as ArticleMeta;
}

export async function getArticleMeta(dir: string, id: string): Promise<ArticleMeta>
{
    const f = await fs.readFile(`${dir}/${id}/+page.md`);

    return extractMeta(id, f.toString());
}

export async function getArticleMetas(dir: string): Promise<ArticleMeta[]>
{
    const promises = (await fs.readdir(dir))
        .filter(x => fss.existsSync(`${dir}/${x}/+page.md`))
        .map(x => getArticleMeta(dir, x));

    return (await Promise.all(promises))
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