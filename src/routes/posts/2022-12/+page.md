---
title: 2022 12월 업데이트
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/5da4aa3aadb504731d8ec0fc976eaee37c3e2a65-1920x622.png
---

<script>
    import Old from "$components/Old.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다. 저희는 모든 바닐라 카드를 버프하기로 결정했습니다. 다만 안정성을 해치지 않도록 여러 단계에 걸쳐 진행하고자 합니다. 12월에는 첫 번째 대상들이 버프되며 추후 업데이트를 통해 나머지 카드들에 대한 버프가 진행됩니다.

  - **혼령의 방첨탑**: 흡수하는 체력량 <Old>1/1/2/2/3</Old> → 1/1/1-2/2/2
  - **영원한 천상**: 체력 <Old>5/6/7/9/11</Old> → 6/7/8/10/12
  - **말살자**: 체력 <Old>4/5/6/7/8</Old> → 5/6/7/8/9
  - **화난 외톨이**: 체력 <Old>5/6/7/8/10</Old> → 6/7/8/9/11
  - **슬릿스톰퍼**: 체력 <Old>6/7/8/10/12</Old> → 8/9/10/12/14
  - **파란 돛의 침입자**: 체력 <Old>3/4/5/6/7</Old> → 4/5/6/7/8
  - **전장의 질주자**: 체력 <Old>2/3/4/5/6</Old> → 3/4/5/6/7

## 신규 카드
11월에는 신규 동방 건물과 철갑 컨스트럭트가 추가됩니다.

<Card type="unit" faction="shadowfen" name="산성 풋내기" unitType="토드" cost={3} strengths={[1, 2, 3, 4, 5]} movement={0} rarity="rare" cardart="https://cdn.sanity.io/images/5hlpazgd/production/b63ffb8ca42139fb215814f94ccca958e154292a-512x512.png" abilities={[
    "카드 사용 시, 자신과 <strong>주변의</strong> 유닛 <strong>1명</strong>을 <strong>중독</strong>시킵니다",
    "카드 사용 시, 자신과 <strong>주변의</strong> 유닛 <strong>2명</strong>을 <strong>중독</strong>시킵니다",
    "카드 사용 시, 자신과 <strong>주변의</strong> 유닛 <strong>3명</strong>을 <strong>중독</strong>시킵니다",
    "카드 사용 시, 자신과 <strong>주변의</strong> 유닛 <strong>4명</strong>을 <strong>중독</strong>시킵니다",
    "카드 사용 시, 자신과 <strong>주변의</strong> 유닛들을 <strong>중독</strong>시킵니다"
]}/>
<Card type="unit" faction="neutral" name="사악한 핀치" unitType="해적 영웅" cost={4} strengths={[4, 5, 6, 7, 8]} movement={1} rarity="legendary" cardart="https://cdn.sanity.io/images/5hlpazgd/production/123343778e4576137c234d8843f2bdcafdce0d08-2427x2953.png" abilities={[
    "카드 사용 시, 무작위 일회성 <strong>사악한 카드</strong>를 <strong>생성</strong>해 적 덱에 추가합니다",
    "카드 사용 시, 무작위 일회성 <strong>사악한 카드</strong>를 <strong>생성</strong>해 적 덱에 추가합니다",
    "카드 사용 시, 무작위 일회성 <strong>사악한 카드</strong>를 <strong>생성</strong>해 적 덱에 추가합니다",
    "카드 사용 시, 무작위 일회성 <strong>사악한 카드</strong>를 <strong>생성</strong>해 적 덱에 추가합니다",
    "카드 사용 시, 무작위 일회성 <strong>사악한 카드</strong>를 <strong>생성</strong>해 적 덱에 추가합니다"
]}/>

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, 750 코인, 5 합성석을 획득할 수 있습니다.

### 사악한 핀치에 대해
카드를 사용하면, 다음의 사악한 카드 3장 중에서 한 장이 선택되어 적 덱으로 들어갑니다. 사악한 카드는 일회성이므로 사용된 뒤에는 사라지며 일반 카드처럼 사이클될 수 있습니다.

사악한 카드는 다음과 같습니다.

  - (0 마나) 내 기지에 **1/2/2/3/3 데미지**를 **입힙니다**
  - (0 마나) 내 손에서 무작위 카드를 **버립니다**
  - (1 마나) **아무 효과가 없습니다**

<Card count={3} isMultiple type="spell" faction="neutral" name={["사악한 데미지", "사악한 버리기", "사악한 고길"]} cost={[0, 0, 1]} rarity="common" cardart={[
    "https://cdn.sanity.io/images/5hlpazgd/production/14ef07055f5b7d031abe6128bc2013d513f0e463-512x512.png",
    "https://cdn.sanity.io/images/5hlpazgd/production/615accb205161dbc4800f117185331c391dd0297-1887x2410.png",
    "https://cdn.sanity.io/images/5hlpazgd/production/039aae0824b377d80c09a09e23b80ea3a0410030-1885x2410.png"]} abilities={[
    "내 기지에 <strong>1 데미지</strong>를 <strong>입힙니다</strong>",
    "내 손에서 무작위 카드를 <strong>버립니다</strong>",
    "<strong>아무 효과가 없습니다</strong>"
]}/>

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 12월 15일에 시작하는 워리어 난투는 **산성 풋내기** 난투입니다.
  - 12월 22일에 시작하는 워리어 난투는 **사악한 핀치** 난투입니다.

또한 크리스마스 이벤트의 일환으로 특별한 눈싸움 난투가 진행됩니다.

전투가 시작되면 각 플레이어의 두 번째 줄의 무작위 타일에 눈사람이 소환됩니다. 내 눈사람과 적 눈사람은 각 플레이어의 시점에서 같은 타일에 위치하므로 서로 마주보지 않게 됩니다. 예시를 들자면 각 플레이어의 왼쪽에서 3번째 타일에 소환될 수 있겠죠. 눈사람은 난투 난이도에 따라 10/15/20 체력을 가집니다. 파괴되면 재생성되지 않고 전선에 영향을 미치지 않습니다.

다음 난투들은 눈싸움 난투입니다.

  - 12월 22일 캐주얼 난투
  - 12월 29일 워리어 난투
  - 1월 5일 얼티메이트 난투

<Card type="building" faction="neutral" name="눈사람" cost={0} strengths={[10, 10, 10, 10, 10]} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/25e61cae9b7762b1c92511d395bbe66d0b1d03b8-512x512.png" abilities={[
    "내 턴 시작 시, <strong>주변의</strong> 아군 유닛들이 전방의 첫 번째 적에게 <strong>1 데미지</strong>를 <strong>입히게</strong> 만듭니다",
    "내 턴 시작 시, <strong>주변의</strong> 아군 유닛들이 전방의 첫 번째 적에게 <strong>1 데미지</strong>를 <strong>입히게</strong> 만듭니다",
    "내 턴 시작 시, <strong>주변의</strong> 아군 유닛들이 전방의 첫 번째 적에게 <strong>1 데미지</strong>를 <strong>입히게</strong> 만듭니다",
    "내 턴 시작 시, <strong>주변의</strong> 아군 유닛들이 전방의 첫 번째 적에게 <strong>1 데미지</strong>를 <strong>입히게</strong> 만듭니다",
    "내 턴 시작 시, <strong>주변의</strong> 아군 유닛들이 전방의 첫 번째 적에게 <strong>1 데미지</strong>를 <strong>입히게</strong> 만듭니다"
]} />

각각의 눈싸움 난투에서 6번째 업적을 달성하면 특별 할로윈 아바타를 획득하실 수 있습니다.

마지막으로 12월 22일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

<ImageBlock>
    <div slot="image">
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/3d45211e6f5c605f950db04b6309e9614a0266d2-512x512.png#avatar" />
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/95184beb6caa4613b4562f15b9b1365d3a35d2cc-512x512.png#avatar" />
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/c361460507e970d5dc0fafbf83799da25d8cb73f-512x512.png#avatar" />
    </div>
</ImageBlock>

## 크리스마스 이벤트
작년처럼 크리스마스 이벤트가 12월 22일부터 1월 1일까지 진행됩니다.

다른 연휴 이벤트와 마찬가지로 한 번만 구매할 수 있는 특별 상품이 판매될 예정입니다. 크리스마스 특별 상품은 12월 22일부터 구매 가능하며, 각 상품에는 크리스마스 아바타 하나씩이 포함됩니다.

<ImageBlock>
    <div slot="image">
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/25f924ea54d9990337397dc386cf2edac58bc19c-512x512.png#avatar" />
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/77826899fb3090b6a7a87ba73f2941eedc55fade-512x512.png#avatar" />
        <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/bae2fabdb2b66a08740955a68070f298adf17df0-512x512.png#avatar" />
    </div>
</ImageBlock>

무엇보다 이벤트 기간 동안 모든 책(고결 포함, 겸손 제외)에서 카드 1장이 추가로 지급되며, 코인과 루비 구매 시 30%를 추가로 획득하실 수 있습니다. 크리스마스 이벤트 기간 중에 로그인하시면 40 루비와 400 코인을 드립니다.

마지막으로 이벤트 기간 동안 획득하는 승리 시 코인이 2배로 증가하며 일일 코인 획득 제한량이 800 코인으로 증가합니다(패스 보유 시 1400 코인).

## 기지 함락자
새로운 기능인 **기지 함락자**가 추가됩니다.

이제 플레이어가 경쟁 모드(랭크, 드래프트, 난투)에서 적 기지에 데미지를 입힐 때마다 포인트를 획득합니다. 1 데미지는 1 포인트와 같습니다. 획득하는 포인트의 양은 게임이 시작할 때의 적 기지 체력에서 게임이 끝날 때의 적 기지 체력을 뺀 것과 동일합니다. 기권은 기지에 모든 데미지를 입힌 것으로 간주합니다.

포인트를 모음으로써 업적 단계에 도달해 재화를 획득할 수 있습니다. 업적 단계가 높을수록 포인트 요구치가 높아지지만 보상 또한 증가합니다. 업적 단계에 도달하면 보상을 획득할 수 있고 다음 업적 단계에 대한 포인트가 0으로 초기화됩니다.

<ImageBlock allowImagesOverflow>
    <div slot="image">
        <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/b539a810fdfed2715bda56cb47055b9cbcc3f12c-1080x1920.png#screenshot" />
        <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/94a9cfabae6516d22df0ad508a65e00513592c93-1080x1920.png#screenshot" />
        <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/851978ec197a15c24335e4b0d71c93ec944a28b7-1080x1920.png#screenshot" />
    </div>
</ImageBlock>

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
밸런스 변경점은 시즌이 초기화되면 적용됩니다. 모든 특별 상품과 각종 보너스를 포함한 크리스마스 이벤트는 12월 22일부터 시작합니다.

신규 카드인 산성 풋내기는 12월 9일, 사악한 핀치는 12월 16일에 출시됩니다. 기지 함락자는 12월 8일부터 활성화됩니다.

또한 이번 업데이트가 진행되면 이제 신규 카드 특별 상품을 여러 번 구매할 수 있게 됩니다.