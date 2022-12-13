<script>
  import "../app.postcss";
</script>

<main>
    <div class="main-content">
        <slot />
    </div>
</main>

<style global lang="postcss">
    @import "./root.css";

    .main-content {
        margin: 8px;
    }
</style>