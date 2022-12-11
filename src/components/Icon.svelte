<script lang="ts">
    export let type: string;

    let src: string = "";

    switch (type)
    {
        case "coin":
        case "ruby":
        case "stone":
        case "crown":
            src = `/images/${type}.webp`;
            break;

        case "common":
        case "rare":
        case "epic":
        case "legendary":
            src = `/images/${type}_4.webp`
            break;
    }
</script>

<img alt="아이콘" {src} />

<style>
    img {
        display: inline-block;
        width: 1em;
        vertical-align: middle;
        padding-bottom: 0.15em;
    }
</style>