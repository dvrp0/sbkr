<script lang="ts">
    export let type: string;

    let src: string = "";

    switch (type)
    {
        case "coin":
            src = "https://stormbound-kitty.com/assets/images/iconography/coin.webp";
            break;

        case "ruby":
            src = "https://stormbound-kitty.com/assets/images/iconography/ruby.webp";
            break;

        case "stone":
            src = "https://stormbound-kitty.com/assets/images/iconography/stones.webp";
            break;

        case "crown":
            src = "https://stormbound-kitty.com/assets/images/iconography/crown_icon.webp";
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