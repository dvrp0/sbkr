<script lang="ts">
    import { onMount } from "svelte";
    import { cards } from "../store";

    let data: any;
    let id: string;

    onMount(() => {
        id = $cards.find(({ name }) => name === data.innerText)?.id ?? "";
    });
</script>

<span bind:this={data}><a href="/cards/{id}"><slot /></a></span>