<script>
    import "../app.postcss";
</script>

<nav>
    <div class="nav-container">
        <a href="/"><img alt="홈" src="/favicon.png" /></a>
        <ul>
            <li><a href="/">패치 노트</a></li>
            <li><a href="/card-usages">카드 사용량</a></li>
            <li><a href="/about">소개</a></li>
        </ul>
    </div>
</nav>

<main>
    <div class="main-content">
        <slot />
    </div>
</main>

<style global lang="postcss">
    @import "./root.css";

    nav {
        background-color: var(--c-background-nav);
    }

    nav img {
        width: 2rem;
    }

    nav ul {
        display: flex;
        padding: 0;
        margin: 1rem 0;
        gap: 3rem;
        list-style-type: none;
    }

    .nav-container {
        padding: 0 calc((var(--large) - 100%) / 2 * -1);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main-content {
        margin: 8px;
    }

    @media (max-width: 74rem) {
        .nav-container {
            padding: 0 calc(1rem + 8px);
        }
    }
</style>