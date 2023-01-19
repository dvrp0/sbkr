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
    const promises = (await fs.readdir(dir)).filter(x => fss.existsSync(`${dir}/${x}/+page.md`))
                                            .map(x => getArticleMeta(dir, x));

    return (await Promise.all(promises)).filter(x => !x.draft)
                                        .sort((x, y) => x.publishedAt < y.publishedAt ? 1 : -1);
}