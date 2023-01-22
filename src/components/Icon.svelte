<script lang="ts">
    export let type: string;
    export let givesMargin: boolean = false;

    let src: string = "";

    switch (type)
    {
        case "coin":
        case "ruby":
        case "stone":
        case "crown":
            src = `/images/icons/${type}.webp`;
            break;

        case "common":
        case "rare":
        case "epic":
        case "legendary":
            src = `/images/icons/${type}_4.webp`
            break;

        case "up":
            src = "/images/icons/up.webp"
            break;

        case "down":
            src = "/images/icons/down.webp"
            break;

        case "new":
            src = "/images/icons/new.webp"
            break;
    }
</script>

<img class:margin={givesMargin} alt="아이콘" {src} />

<style>
    img {
        display: inline-block;
        width: 1em;
        vertical-align: middle;
        padding-bottom: 0.15em;
    }

    .margin {
        margin-right: 0.25em;
    }
</style>