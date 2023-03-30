<script lang="ts">
    import { cards } from "../store";

    export let target: string;
</script>

<span><a href="/cards/{$cards.find(({ name }) => name === target)?.id ?? ""}">{target}</a></span>