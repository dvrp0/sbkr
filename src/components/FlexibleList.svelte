<script lang="ts">
    export let allowOverflow: boolean = false;
    export let setFontSizeFixed: boolean = false;
    export let disableVertical: boolean = false;
</script>

<div class="list" class:overflow={allowOverflow} class:variable-font={!setFontSizeFixed} class:vertical={!disableVertical}>
    <slot />
</div>

<style>
    .list {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .overflow {
        margin: 2rem calc(((var(--large) - 100%) / 2 * -1) - var(--padding));
    }

    @media (max-width: 74rem) {
        .list {
            margin-left: calc(var(--padding) * -1);
            margin-right: calc(var(--padding) * -1);
        }

        .variable-font {
            font-size: 0.7rem;
        }
    }

    @media (max-width: 53rem) {
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