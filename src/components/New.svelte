<script lang="ts">
    interface Props {
        type: "buff" | "nerf" | "adjust";
        children?: import('svelte').Snippet;
    }

    let { type, children }: Props = $props();
</script>

<strong class={type}>{@render children?.()}</strong>

<style >
    .buff {
        color: var(--c-foreground-buff);
    }

    .nerf {
        color: var(--c-foreground-nerf);
    }

    .adjust {
        color: var(--c-foreground);
    }
</style>