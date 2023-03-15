import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    extensions: [".md"],
    smartypants: {
        dashes: "oldschool"
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behaviour: "wrap" }]],
    layout: {
        _: path.join(__dirname, "./src/components/ReleaseLayout.svelte")
    }
};

export default config;