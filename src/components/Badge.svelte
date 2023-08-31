<script lang="ts">
    export let kingdom: string = "neutral";
    export let text: string;
    export let rightMargin = false;
</script>

<div class:rightMargin={rightMargin}
    style="--background: var(--c-background-light{kingdom === "neutral" ? "" : `-${kingdom}`});">
    {text}
</div>

<style>
    div {
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
</style>