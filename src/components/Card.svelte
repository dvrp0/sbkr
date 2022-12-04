<script lang="ts">
    export let type: string | string[];
    export let faction: string | string[];
    export let name: string | string[];
    export let unitType: string | string[] = ".";
    export let movement: number | number[] = 0;
    export let cost: number | number[];
    export let strengths: number[] = [0];
    export let abilities: string[];
    export let rarity: string | string[];
    export let cardart: string | string[];
    export let isMultiple: boolean = false;
    export let count: number = 5;

    let cardImage: string = "";
    let levels: number[] = Array(count);

    if (rarity == "legendary")
        cardImage = `/src/assets/images/${faction}-legendary${type}.webp`;
    else
        cardImage = `/src/assets/images/${faction}-${type}.webp`;

    function unpack(value: any, index: number)
    {
        if (isMultiple)
            return (value as Array<typeof value>)[index];
        else
            return value;
    }
</script>

<div class="container">
    <div class="cards" class:multiple={isMultiple}>
    {#each levels as _, i}
        <div class="card" style="background-image: url({cardImage});">
            <div class="card-contents">
                <p class="stat cost">{unpack(cost, i)}</p>
                <p class="name">{unpack(name, i)}</p>
                <p class="unit-type" class:invisible={type != "unit"}>{unitType}</p>
                <img class="cardart" alt="카드아트" src={unpack(cardart, i)} />
                <div class="ability">
                    <p>{@html abilities[i]}</p>
                </div>
                <div class="stats">
                    <p class="stat strength" class:invisible={type == "spell"}>{strengths[i]}</p>
                    <p class="stat" class:invisible={type != "unit"}>{movement}</p>
                </div>
                <div class="levels">
                    <div class="rarity">
                        <img alt="희귀도" src="/src/assets/images/{rarity}_{i + 1}.webp" />
                    </div>
                    <p class="level {rarity} {type}">레벨 {i + 1}</p>
                </div>
            </div>
        </div>
    {/each}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');

    .container {
        margin: 0.5rem calc(((70rem - 100%) / 2 * -1) - 1.25rem);
    }

    .cards {
        display: flex;
    }

    .multiple {
        width: fit-content;
        margin: 0 auto;
    }

    .card {
        width: 12em;
        height: 22em;
        background-size: contain;
        background-position: top;
        background-repeat: no-repeat;
        text-align: center;
        margin: 0 1.25em;
    }

    .card-contents {
        max-width: 80%;
        max-height: 100%;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        font-variation-settings: "wght" 500;
        font-size: 0.9em;
        margin-top: 0.4em;
        margin-bottom: -0.25em;
    }

    .unit-type {
        color: rgb(177, 177, 177);
        font-size: 0.75em;
        font-variation-settings: "wght" 500;
        margin-top: 0;
        margin-bottom: 0;
    }

    .cardart {
        min-width: 0;
        min-height: 0;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    .ability {
        font-size: 0.75em;
        line-height: 1.5em;
        margin-bottom: 0.25em;
    }

    .stats {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stat {
        margin-top: 0;
        margin-bottom: 0;
        font-family: "Nunito Sans", sans-serif;
        font-size: 1.25em;
    }

    .cost {
        margin-top: -0.1em;
    }

    .strength {
        margin-right: 5.625em;
    }

    .levels {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -2.85em;
    }

    .rarity {
        height: 1.5em;
        margin-bottom: -0.2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .rarity img {
        width: 30%
    }

    .level {
        font-variation-settings: "wght" 500;
        font-size: 0.75em;
        margin-top: 0;
    }

    .invisible {
        color: transparent;
    }

    .common {
        color: #f5f1e5;
    }

    .rare {
        color: #95d7f9;
    }

    .epic {
        color: #dba8f5;
    }

    .legendary {
        color: #f5c79f;
    }

    .unit {
        margin-bottom: 1.15em;
    }

    .building {
        margin-bottom: 0.925em;
    }

    .spell {
        margin-bottom: 1.325em;
    }

    @media (max-width: 83rem) {
        .container {
            font-size: 0.7rem;
            margin-left: -1.25em;
            margin-right: -1.25em;
        }

        .rarity img {
            width: 20%;
        }
    }

    @media (max-width: 60rem) {
        .container {
            font-size: 6vw;
            margin: 0 auto;
        }

        .cards {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .card {
            margin: 0 auto;
        }

        .rarity img {
            width: 100%;
        }
    }
</style>