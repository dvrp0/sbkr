<script>
    import { page } from "$app/stores";
</script>

<div class="content">
    <img alt="고양이가 세상을 지배한다" src="/images/404.png" />
    <h1>{$page.status}: {$page.error?.message}</h1>
    <a href="/"><img class="home" alt="홈" src="/images/home.webp" /></a>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .home {
        width: 1.75rem;
    }
</style>