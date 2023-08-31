---
layout: false
---

<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";
    import Comment from "$components/Comment.svelte";

    let title: string = "Feedback";
</script>

<MetaTags
    {title}
    titleTemplate="%s - sbkr"
    canonical="https://sbkr.pages.dev/sincere-request-for-sbg"
    openGraph={{
        type: "website",
        site_name: "sbkr",
        url: "https://sbkr.pages.dev/sincere-request-for-sbg",
        title,
        images: [
            {
                url: "/images/thumbnail.png"
            }
        ]
    }}
    additionalMetaTags={[
        {
            property: "author",
            content: "DVRP"
        },
        {
            property: "theme-color",
            content: "#06161E"
        }
    ]}
/>

<article class="post">
    <img class="header" alt="이미지" src="/images/headers/header_cards.png" />
    <h1>Sincere Request For SBG</h1>

Seeing the July update is one of the worst updates, I have to say once more to slow down card release and focus on more necessary improvements for the game.

## New Cards
Why is releasing new cards problematic? The new card itself can provide a fresh and enjoyable experience for players. The issue lies in the way SBG releases these cards.

1. Introducing new cards leads to a larger card pool, making it **more difficult for players to collect specific cards they want to level up**. This directly impacts players' gaming experience and progression. It follows that as the card pool grows, there should be increased opportunities for players to earn resources and cards. However, there hasn't been a single update addressing this issue this year(do not say the draft rework was an economic improvement). What's more frustrating is that SBG claimed this in 2022:
  > [To keep the pace of releasing new cards, we’ll continue adding more ways of getting resources and expanding your collection.](https://discord.com/channels/293674725069029377/615669712239591430/981187383984783410)

  Yet, they haven't made **any significant economic improvements** and **even nerfed** the daily calendar and base demolisher rewards they had previously added. Essentially, SBG is placing the burden on players, churning out cards without making any effort to improve the progression, and neglecting potential issues arising from careless card additions.

2. Many of the new cards being added are **genuinely bad**. The quality of the cards raises serious doubts about SBG's testing process. Take this month's Gathering Troupe as an example. With plenty of solid 4-mana cards already in the game, there's no reason for anyone to use a card with the significant drawback of potentially baselocking themselves. Last month's Bosuns have a similar issue, as the card's ability risks backfiring on the player using it. Adding such questionable cards only worsens the first problem. It would be extremely disappointing if, instead of receiving the card you wanted, you got a new one that you might not use even if it came instantly upgraded to level 5. This is especially troublesome considering how slow and player-unfriendly growth is in the game.

3. As the number of cards grows, **so does the number of cards need to be balanced grows**. However, SBG seems to focus on adjusting only a few cards. More worrisome is the fact that over the past three months, the number of balanced cards has been declining rather than increasing. SBG has mentioned that adjusting too many cards simultaneously can lead to issues, but adjusting too few can be problematic as well. During Paladin's development of the game, there were 64 fewer cards, yet more than ten cards were adjusted each month, and sometimes as many as 30 or 40 cards were adjusted at once. This is in stark contrast to SBG's strategy of buffing 17 vanilla cards over three months. Balancing is crucial in helping players feel that the game is alive. However, despite there was a 135% increase in the number of cards since taking over, SBG has adopted a notably conservative approach to changes. I find this perplexing as Stormbound should not be managed conservatively right now; it requires **significant changes**.

<Comment>

For reference, Paladin Studio's balance changes:

 - 2018 January - 32 changes
 - 2018 April - 28 changes
 - 2018 July - 41 changes
 - 2018 August - 14 changes
 - 2018 September - 19 changes
 - 2018 December - 7 changes
 - 2019 February - 28 changes
 - 2019 May - 14 changes
 - 2019 July - 17 changes
 - 2019 September - 22 changes
 - 2019 December - 21 changes

</Comment>

4. Even considering that SBG is a small team, their development speed is **painfully slow**. It took them 7 months to add the relegation feature after its first mention, and an astonishing **20 months** to release the new login system. With their slow development pace, dedicating part of their efforts to creating new cards further slows things down. This means that the time taken to release major features that all players are eagerly waiting for will be excruciatingly long. The game already feels so stale, and putting resources into card development will only exacerbate the stagnant feeling.

These issues could be addressed by **greatly slowing down the card release cycle**. This would ease the pressure on players, allow SBG to dedicate more time and effort to enhancing the quality of each card, and allocate more time for balancing. In my opinion, adding one card every two months is more than enough under the current state of the game. Although the freshness brought by new cards may lessen, the game right now needs large and major changes rather than minor changes like introducing new cards. Apart from the introduction of draft mode and heroes league, there were no large-scale changes in the past three years. Many players already perceive the game as becoming stagnant.

## Then What
Everyone knows what needs to be done. They should slow the pace of releasing new cards and invest those efforts into **improving the game** instead. There's no need to look far - simply by reviewing what SBG has mentioned in their plans, there's already a large amount to tackle.

  - [**More personalization and cosmetics than avatars**](https://discord.com/channels/293674725069029377/615669712239591430/852186243898671144)
  - [**Extending player profile**](https://discord.com/channels/293674725069029377/615669712239591430/861980020033454100)
  - [**In-game tooltips for keywords**](https://discord.com/channels/293674725069029377/615669712239591430/861979019162550322)
  - [**Balancing inequality of kingdom rarities**](https://discord.com/channels/293674725069029377/615669712239591430/867747548584345630)
  - [**Campaign rework**](https://discord.com/channels/293674725069029377/615669712239591430/867747214259650591)
  - [**Quest rework**](https://discord.com/channels/293674725069029377/447484918801629195/887362146302824518)
  - [**Guilds**](https://discord.com/channels/293674725069029377/447484918801629195/913127713408184341)
  - [**World chat**](https://discord.com/channels/293674725069029377/447484918801629195/913127713408184341)

None of these have been implemented so far - **not a single one**. It strongly seems that SBG is setting misguided priorities. This game is riddled with elements that are extremely unfriendly and illogical for players. Addressing these issues should be the utmost priority, which is precisely what the players had anticipated when SBG announced they would take charge of the game. However, they're not only neglecting these problems but also exacerbating them by releasing cards at an unsustainable pace, while focusing on the least important things and failing to release the features they mentioned they would deliver.

Let's take a look at the 7 patches that were done this year.

  - **January**: 6 balance changes, 2 new cards, new login system, brawl QoL update. base demolisher nerf
  - **February**: 6 balance changes, 2 new cards, Valentine's brawl, nickname change feature
  - **March**: 9 balance changes, 2 new cards, draft rework, skip button, more ads
  - **April**: 5 balance changes, 2 new cards
  - **May**: 5 balance changes, 2 new cards, draft update
  - **June**: 4 balance changes, 2 new cards, newsletter
  - **July**: 3 balance changes, 2 new cards

What meaningful updates were there? **None**. Not even one. Half a year has passed, and SBG has yet to deliver any of the features from the list above to players. What I can list instead is numerous unhealthy things they have done:

  - More and more ads
    - **1 ad** for playing a free draft session
    - **3 ads** for a ticket card
    - **10 ads** for getting 4 humble books
  - [**'create a 0 cost level 1 single-use non-common Temple card'**](https://stormbound-kitty.com/cards/N102), just hilarious
  - Base demolisher nerfed **5 days after its release**
  - **20 rubies** for replacing daily cards
  - Ancients have **zero coherencies** in terms of theme compared to other unit types
  - **Text format** is still a mess even though there's a well-organized [guideline](https://stormbound-kitty.com/releases/04-2022#copy-improvements)
  - Vindictive wretches reached 10-30% usage in Bronze, Silver, Gold, and Heroes **a month** after its release and took 3 months to nerf
  - Draft become **totally unenjoyable** and SBG thinks it became more enjoyable for more players
  - Book of Ancients gives Temple cards even though Book of Temples exists, because of [**the one big narrative from the vision of the lead designer**](https://discord.com/channels/293674725069029377/447484918801629195/1007307044925210715), this one is more than hilarious. It's impossible for me to comprehend how a lead designer can justify a decision that hinders players' experience, using the lore as a reason. Quoting VengenfulRaven's words, which are truly what I want to say:
  > [It's like sacrificing your playerbase and ignoring what your playerbase wants for the sake of lore](https://discord.com/channels/293674725069029377/447676050726453248/1088110777547898920)

It's very obvious that fixing these issues and giving what SBG promised should be their number one priority, not new cards.

## Conclusion
I can assure that how SBG is doing is crushing the motivation of players and diminishing their love for the game, including myself. What's truly disheartening is that I'm not the first nor the only one to raise these issues, but SBG has not improved. Fueled by my love for my favorite game, I've variously contributed to the game like [providing better Korean translations](https://github.com/dvrp0/SBLocPatcher) and [copy improvements](https://www.reddit.com/r/stormbound/comments/s9pbkg/i_made_a_localization_patcher_for_stormbound/), developing this website to deliver translated patch notes, or [making design suggestions](https://media.discordapp.net/attachments/447676050726453248/813487401313239060/unknown.png). [I've shared](https://media.discordapp.net/attachments/447676050726453248/945300821019590676/unknown.png?width=1440&height=564) [various](https://media.discordapp.net/attachments/447676050726453248/982304811112357898/SBCardback2.png?width=748&height=671) [ideas](https://media.discordapp.net/attachments/447676050726453248/982304811452071946/SBCardback1.png?width=714&height=671) [and given](https://media.discordapp.net/attachments/447676050726453248/1061727949344231464/image.png?width=377&height=671) [feedbacks](https://media.discordapp.net/attachments/447676050726453248/1087359981990449182/image.png?width=1218&height=671). But now I'm just so tired and losing motivation seeing how they are doing.

Earnestly, sincerely and from the very bottom of my heart, I implore you - please, please **confront and fix the issues of the game**. That's all I want as a player. That's it.

</article>

<style>
    .header {
        width: var(--large);
        margin-bottom: -4.8rem;
        margin-left: calc((var(--large) - 100%) / 2 * -1);
        margin-right: calc((var(--large) - 100%) / 2 * -1);
    }

    @media (max-width: 74rem) {
        .header {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>