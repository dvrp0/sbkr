<script lang="ts">
    interface Props {
        allowOverflow?: boolean;
        setFontSizeFixed?: boolean;
        disableVertical?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        allowOverflow = false,
        setFontSizeFixed = false,
        disableVertical = false,
        children
    }: Props = $props();
</script>

<div class="list" class:overflow={allowOverflow} class:variable-font={!setFontSizeFixed} class:vertical={!disableVertical}>
    {@render children?.()}
</div>

<style>
    .list {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .overflow {
        margin: 2rem calc((var(--large) - 100%) / 2 * -1);
    }

    @media (max-width: 74rem) {
        .list {
            margin-left: calc(var(--padding) * -1);
            margin-right: calc(var(--padding) * -1);
        }

        .variable-font {
            font-size: min(0.7rem, 1.3vw);
        }
    }

    @media (max-width: 43rem) {
        .vertical {
            flex-direction: column;
            align-items: center;
            margin: 2rem auto;
        }

        .variable-font {
            font-size: 3.318vw;
        }
    }
</style>