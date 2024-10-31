<script lang="ts">
    interface Props {
        type: string;
    }

    let { type }: Props = $props();

    let target: string = $state("");

    switch (type)
    {
        case "coin":
        case "ruby":
        case "stone":
        case "crown":
        case "up":
        case "down":
        case "new":
        case "neutral":
        case "swarm":
        case "winter":
        case "shadowfen":
        case "ironclad":
        case "refer":
        case "refer-comment":
            target = type;
            break;

        case "common":
        case "rare":
        case "epic":
        case "legendary":
            target = `${type}_4`;
            break;
    }
</script>

<img alt="아이콘" src="/images/icons/{target}.webp" />

<style lang="postcss">
    img {
        display: inline-block;
        width: 1em;
        vertical-align: middle;
        padding-bottom: 0.15em;
    }
</style>