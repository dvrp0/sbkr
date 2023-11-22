<script lang="ts">
    import Badge from "$components/Badge.svelte";

    export let heading: string;
    export let badge: string;
</script>

<div class="container">
    <h2>{heading}</h2>
    <div class="badge-wrapper">
        <Badge>{badge}</Badge>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: flex-start;
    }

    .badge-wrapper {
        margin-top: 4.25em;
        margin-left: 1em;
    }
</style>