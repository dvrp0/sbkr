<script lang="ts">
    import Icon from "$components/Icon.svelte";

    export let kingdom: string | undefined = undefined;
    export let rightMargin = false;
    export let darkBackground = false;
</script>

<div class="container" class:right-margin={rightMargin} class:dark-background={darkBackground}
    style="--background: var(--c-background-light{kingdom === "neutral" || kingdom === undefined ? "" : `-${kingdom}`});">
    {#if kingdom !== undefined}
        <div class="kingdom">
            <Icon type={kingdom} />
        </div>
    {/if}
    <slot />
</div>

<style>
    .container {
        width: fit-content;
        padding: 0.25rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85rem;
        color: var(--c-foreground-dark);
        background-color: var(--background);
        border-radius: 20px;
    }

    .right-margin {
        margin-right: 0.5rem;
    }

    .dark-background {
        background-color: var(--c-background);
    }

    .kingdom {
        margin-right: 0.25rem;
        opacity: 0.4;
    }
</style>