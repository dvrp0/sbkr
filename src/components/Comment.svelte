<script lang="ts">
</script>

<div class="comment">
    <div class="inner">
        <slot />
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