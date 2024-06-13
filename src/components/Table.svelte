<div class="container">
    <slot />
</div>

<style>
    .container {
        margin-bottom: 2rem;
    }

    :global(table) {
        width: 100%;
        text-align: center;
        table-layout: fixed;
        border-collapse: collapse;
    }

    :global(table th),
    :global(table td) {
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 8px;
    }
</style>