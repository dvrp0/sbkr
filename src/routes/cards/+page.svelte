<script lang="ts">
    import { cards } from "../../store";
    import CardEntry from "$components/CardEntry.svelte";
</script>

<div class="entries">
    {#each $cards as card}
    <CardEntry entryId={card.id} />
    {/each}
</div>

<style>
    .entries {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: -0.5em;
    }
</style>