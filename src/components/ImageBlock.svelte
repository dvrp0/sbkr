<script lang="ts">
    export let position: string = "left";
    export let type: string = "horizontal";
    export let src: string;
</script>

<div class={type}>
    {#if position == "left" || position == "top"}
    <div class="image" class:left={position == "left"}>
        <img alt="이미지" {src} />
    </div>
    {/if}
    <div>
        <slot />
    </div>
    {#if position == "right" || position == "bottom"}
    <div class="image" class:right={position == "right"}>
        <img alt="이미지" {src} />
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

    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .left {
        margin-top: 1rem;
        margin-left: calc(var(--padding) * -1)
    }

    .right {
        margin-top: 1rem;
        margin-right: calc(var(--padding) * -1)
    }

    @media (max-width: 53rem) {
        .horizontal {
            flex-direction: column;
            align-items: center;
        }

        .vertical {
            width: 20em;
        }

        .left {
            font-size: 3.318vw;
            margin-left: 0;
        }

        .right {
            font-size: 3.318vw;
            margin-right: 0;
        }
    }
</style>