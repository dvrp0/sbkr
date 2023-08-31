<script lang="ts">
    import Icon from "$components/Icon.svelte";

    export let kingdom: string | undefined = undefined;
    export let text: string;
    export let rightMargin = false;
</script>

<div class="container" class:rightMargin={rightMargin}
    style="--background: var(--c-background-light{kingdom === "neutral" || kingdom === undefined ? "" : `-${kingdom}`});">
    {#if kingdom !== undefined}
        <div class="kingdom">
            <Icon type={kingdom} />
        </div>
    {/if}
    {text}
</div>

<style>
    .container {
        width: fit-content;
        padding: 0.25rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--c-foreground-dark);
        background-color: var(--background);
        border-radius: 20px;
    }

    .rightMargin {
        margin-right: 0.5rem;
    }

    .kingdom {
        margin-right: 0.25rem;
        filter: brightness(0) invert(1);
        opacity: 0.4;
    }
</style>