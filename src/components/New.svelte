<script lang="ts">
    export let type: "buff" | "nerf" | "adjust";
</script>

<strong class={type}><slot /></strong>

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