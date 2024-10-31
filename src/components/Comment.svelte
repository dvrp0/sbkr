<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="comment">
    <div class="inner">
        {@render children?.()}
    </div>
</div>

<style>
    .comment {
        background-color: var(--c-background-light);
        color: var(--c-foreground-comment);
        margin-bottom: 1.5rem;
    }

    .inner {
        padding: var(--padding);
    }
</style>