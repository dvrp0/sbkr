<script lang="ts">
    export let align: string = "left";
    export let type: string = "horizontal";
</script>

<div class={type}>
{#if align == "left" || align == "top"}
    <slot name="image" />
{/if}
    <div class="text">
        <slot />
    </div>
{#if align == "right" || align == "bottom"}
    <slot name="image" />
{/if}
</div>

<style>
    .horizontal {
        display: flex;
    }

    @media (width <= 600px) {
        .horizontal {
            flex-direction: column;
            align-items: center;
        }
    }

    .vertical {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    @media (width <= 600px) {
        .vertical {
            width: 20em;
        }
    }
</style>