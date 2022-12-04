<script lang="ts">
    export let align: string = "left";
    export let type: string = "horizontal";
    export let allowImagesOverflow: boolean = false;
</script>

<div class={type} class:big-images-container={allowImagesOverflow}>
    {#if align == "left" || align == "top"}
    <div class="images" class:big-images={allowImagesOverflow}>
        <slot name="image" />
    </div>
    {/if}
    <div class="text">
        <slot />
    </div>
    {#if align == "right" || align == "bottom"}
    <div class="images" class:big-images={allowImagesOverflow}>
        <slot name="image" />
    </div>
    {/if}
</div>

<style>
    .horizontal {
        display: flex;
    }

    .vertical {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    .big-images-container {
        margin: 0 calc(((70rem - 100%) / 2 * -1) - 1.25rem);
    }

    .big-images {
        width: fit-content;
        margin: 0 auto;
    }

    @media (max-width: 60rem) {
        .horizontal {
            flex-direction: column;
            align-items: center;
        }

        .vertical {
            width: 20em;
        }
    }
</style>