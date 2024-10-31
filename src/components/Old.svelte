<script>
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<span>{@render children?.()}</span>

<style>
    span {
        color: var(--c-foreground-dark);
    }
</style>