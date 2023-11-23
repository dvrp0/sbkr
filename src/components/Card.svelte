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
    export let noMargin: boolean = false;

    let cardImage: string = `/images/card-backgrounds/${faction}-${rarity == "legendary" ? "legendary" : ""}${type}.webp`;
    let levels: number[] = Array(count);

    function unpack(value: any, index: number)
    {
        if (value instanceof Array<typeof value>)
            return (value as Array<typeof value>)[index];
        else
            return value;
    }
</script>

<div class="container" class:no-side-margin={noMargin} style="--container: calc(var(--card) * {count} + var(--padding) * {(count - 1) * 2});">
    <div class="cards" class:multiple={isMultiple}>
    {#each levels as _, i (i)}
        <div class="card" style="background-image: url({cardImage});">
            <div class="card-contents {unpack(type, i)}">
                <p class="stat cost">{unpack(cost, i)}</p>
                <p class="name">{unpack(name, i)}</p>
                <p class="unit-type" class:invisible={unpack(type, i) != "unit"}>{unpack(unitType, i)}</p>
                <div class="fill" />
                <img class="cardart" class:small={abilities[i] === ""} alt="카드아트" src={unpack(cardart, i)} />
                <div class="fill" />
                <div class="ability" class:invisible={abilities[i] === ""}>
                    {@html abilities[i] === "" ? "." :
                        abilities[i].replace(/^\*/g, "<strong>").replace(/\s\*/g, " <strong>").replace(/\*/g, "</strong>")}
                </div>
                <div class="stats">
                    <p class="stat strength" class:invisible={unpack(type, i) == "spell"}>{strengths[i]}</p>
                    <p class="stat" class:invisible={unpack(type, i) != "unit"} class:movement={strengths[i] >= 10}>{unpack(movement, i)}</p>
                </div>
                <div class="levels">
                    <div class="rarity">
                        <img alt="희귀도" src="/images/icons/{unpack(rarity, i)}_{isMultiple ? 1 : i + 1}.webp" />
                    </div>
                    <p class="level {unpack(rarity, i)}">레벨 {isMultiple ? 1 : i + 1}</p>
                </div>
            </div>
        </div>
    {/each}
    </div>
</div>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');

    .container {
        margin: 2rem calc(((var(--container) - 100%) / 2 * -1) - var(--padding));
    }

    .cards {
        width: fit-content;
        margin: 0 auto;
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
        margin: 0 var(--padding);
    }

    .card-contents {
        width: 85%;
        height: calc(100% - 0.85em);
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .name {
        font-size: 0.9em;
        font-variation-settings: "wght" 500;
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

    .fill {
        flex: 1 0 auto;
    }

    .cardart {
        min-width: 0;
        min-height: 0;
        max-width: 90%;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    .ability {
        font-size: 0.7em;
        line-height: 1.5em;
        margin-top: 1em;
        margin-bottom: 1.25em;
    }

    .stats {
        height: fit-content;
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

    .movement {
        margin-left: -0.3em;
        padding-right: 0.3em;
    }

    .levels {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -2.85em;
    }

    .rarity {
        height: 1.5em;
        margin-bottom: -0.1em;
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
        margin: 0;
    }

    .invisible {
        color: transparent;
    }

    .common {
        color: var(--c-rarity-common);
    }

    .rare {
        color: var(--c-rarity-rare);
    }

    .epic {
        color: var(--c-rarity-epic);
    }

    .legendary {
        color: var(--c-rarity-legendary);
    }

    @media (max-width: 74rem) {
        .container {
            font-size: min(0.7rem, 1.3vw);
            margin-left: calc(var(--padding) * -1);
            margin-right: calc(var(--padding) * -1);
        }

        .rarity img {
            width: 20%;
        }
    }

    @media (max-width: 43rem) {
        .container {
            font-size: 6vw;
            margin: 2rem auto;
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
            width: 50%;
        }
    }

    .no-side-margin {
        margin-left: 0;
        margin-right: 0;
    }
</style>