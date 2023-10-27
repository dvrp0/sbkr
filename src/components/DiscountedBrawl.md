---
layout: false
---

<script lang="ts">
    import Icon from "./Icon.svelte";

    export let percentage: number = 50;
    let type: string = "casual";

    function assign_type(target: string)
    {
        type = target;
    }
</script>

<div class="container">
    <div class="buttons">
        <button class:selected={type == "casual"} on:click={() => assign_type("casual")}>캐주얼</button>
        <button class:selected={type == "warrior"} on:click={() => assign_type("warrior")}>워리어</button>
        <button class:selected={type == "ultimate"} on:click={() => assign_type("ultimate")}>얼티메이트</button>
    </div>

    {#if type == "casual" && percentage == 30}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|<Icon type="coin" /> 10 코인|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 5 코인 (0)|겸손의 책 1개|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 5 코인 (-5)|<Icon type="ruby" /> 5 루비|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 15 코인 (-5)|<Icon type="stone" /> 1 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 25 코인 (-5)|<Icon type="ruby" /> 15 루비|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 30 코인 (-10)|<Icon type="rare" /> 레어 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 35 코인 (-15)|<Icon type="stone" /> 7 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 50 코인 (-15)|<Icon type="ruby" /> 60 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 60 코인 (-20)|<Icon type="rare" /> 레어 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 70 코인 (-30)|<Icon type="ruby" /> 200 루비|
    {:else if type == "casual" && percentage == 50}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|<Icon type="coin" /> 10 코인|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 5 코인 (0)|겸손의 책 1개|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 5 코인 (-5)|<Icon type="ruby" /> 5 루비|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 10 코인 (-10)|<Icon type="stone" /> 1 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 15 코인 (-15)|<Icon type="ruby" /> 15 루비|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 20 코인 (-20)|<Icon type="rare" /> 레어 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 25 코인 (-25)|<Icon type="stone" /> 7 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 35 코인 (-30)|<Icon type="ruby" /> 60 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 40 코인 (-40)|<Icon type="rare" /> 레어 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 50 코인 (-50)|<Icon type="ruby" /> 200 루비|
    {:else if type == "warrior" && percentage == 30}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|<Icon type="coin" /> 20 코인|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 5 코인 (-5)|겸손의 책 1개|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 20 코인 (-5)|고결의 책 1개|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 35 코인 (-15)|<Icon type="stone" /> 4 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 55 코인 (-20)|영웅의 고서 1개|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 70 코인 (-30)|<Icon type="epic" /> 에픽 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 90 코인 (-35)|<Icon type="stone" /> 20 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 105 코인 (-45)|<Icon type="ruby" /> 125 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 140 코인 (-60)|<Icon type="epic" /> 에픽 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 175 코인 (-75)|<Icon type="ruby" /> 500 루비|
    {:else if type == "warrior" && percentage == 50}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|<Icon type="coin" /> 20 코인|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 5 코인 (-5)|겸손의 책 1개|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 15 코인 (-10)|고결의 책 1개|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 25 코인 (-25)|<Icon type="stone" /> 4 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 40 코인 (-35)|영웅의 고서 1개|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 50 코인 (-50)|<Icon type="epic" /> 에픽 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 65 코인 (-60)|<Icon type="stone" /> 20 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 75 코인 (-75)|<Icon type="ruby" /> 125 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 100 코인 (-100)|<Icon type="epic" /> 에픽 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 125 코인 (-125)|<Icon type="ruby" /> 500 루비|
    {:else if type == "ultimate" && percentage == 30}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|겸손의 책 1개|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 15 코인 (-5)|<Icon type="ruby" /> 5 루비|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 35 코인 (-15)|클래식 고서 1개|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 70 코인 (-30)|<Icon type="stone" /> 10 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 105 코인 (-45)|신화의 고서 1개|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 140 코인 (-60)|<Icon type="legendary" /> 레전더리 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 175 코인 (-75)|<Icon type="stone" /> 50 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 210 코인 (-90)|<Icon type="ruby" /> 250 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 280 코인 (-120)|<Icon type="legendary" /> 레전더리 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 350 코인 (-150)|<Icon type="stone" /> 200 합성석|
    {:else if type == "ultimate" && percentage == 50}
|필요 왕관 수|게임당 입장료|업적 달성 보상|
|---|---|---|
|<Icon type="crown" /> 7 왕관|<Icon type="coin" /> 0 코인 (0)|겸손의 책 1개|
|<Icon type="crown" /> 20 왕관|<Icon type="coin" /> 10 코인 (-10)|<Icon type="ruby" /> 5 루비|
|<Icon type="crown" /> 35 왕관|<Icon type="coin" /> 25 코인 (-25)|클래식 고서 1개|
|<Icon type="crown" /> 50 왕관|<Icon type="coin" /> 50 코인 (-50)|<Icon type="stone" /> 10 합성석|
|<Icon type="crown" /> 70 왕관|<Icon type="coin" /> 75 코인 (-75)|신화의 고서 1개|
|<Icon type="crown" /> 95 왕관|<Icon type="coin" /> 100 코인 (-100)|<Icon type="legendary" /> 레전더리 카드 1장|
|<Icon type="crown" /> 125 왕관|<Icon type="coin" /> 125 코인 (-125)|<Icon type="stone" /> 50 합성석|
|<Icon type="crown" /> 160 왕관|<Icon type="coin" /> 150 코인 (-150)|<Icon type="ruby" /> 250 루비|
|<Icon type="crown" /> 200 왕관|<Icon type="coin" /> 200 코인 (-200)|<Icon type="legendary" /> 레전더리 카드 7장|
|<Icon type="crown" /> 250 왕관|<Icon type="coin" /> 250 코인 (-250)|<Icon type="stone" /> 200 합성석|
    {/if}
</div>

<style>
    .container {
        margin-bottom: 2rem;
    }

    table {
        width: 100%;
        text-align: center;
        table-layout: fixed;
        border-collapse: collapse;
        /* border-style: hidden; */
    }

    table th,
    table td {
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 8px;
    }

    button {
        width: 100%;
        background-color: var(--c-background-light);
        color: #688692;
        border: 0;
        font-family: inherit;
        font-size: 1rem;
        font-variation-settings: "wght" 700;
        padding: 20px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover {
        color: var(--c-foreground);
    }

    .selected {
        background-color: #1c2f38;
        color: var(--c-foreground);
    }

    .buttons {
        display: flex;
        width: 100%;
    }
</style>