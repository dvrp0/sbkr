<script lang="ts">
    export let isScreenshots: boolean = false;
    export let srcs: string[];
</script>

<div class="images" class:screenshots={isScreenshots}>
    {#each srcs as src}
    <img alt="이미지" {src} />
    {/each}
</div>

<style>
    .images {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .screenshots {
        margin: 2rem calc(((70rem - 100%) / 2 * -1) - 1.25rem);
    }

    @media (max-width: 83rem) {
        .images {
            font-size: 0.7rem;
            margin-left: -1.25em;
            margin-right: -1.25em;
        }
    }

    @media (max-width: 60rem) {
        .screenshots {
            font-size: 3.318vw;
            flex-direction: column;
            margin: 2rem auto;
        }
    }
</style>