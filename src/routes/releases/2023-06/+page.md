---
title: 2023 6월 업데이트
publishedAt: 2023/06
headerImage: 
isHeaderShadowNeeded: true
summary: 6월에는 신규 카드 2장이 추가되고, 일부 밸런스
source: https://stormbound-kitty.com/releases/06-2023
draft: true
---

<script>
    import Old from "$components/Old.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import FlexibleList from "$components/FlexibleList.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
    import CardLink from "$components/CardLink.svelte";
    import Comment from "$components/Comment.svelte";
    import DiscountedBrawl from "$components/DiscountedBrawl.md";
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다.

  - <CardLink target="골판지 대저택" />: 혼란시키는 적 유닛 수 <Old>1</Old> → 1/1/2/2/2
  - <CardLink target="전우" />: 체력 <Old>3/3/4/4/6</Old> → 3/4/5/6/7
  - <CardLink target="조류 추적자" />: 마나 <Old>6</Old> → 5, 파괴 대상 <Old>유닛들</Old> → 유닛과 건물들
  - <CardLink target="공포의 괴물" />: 체력 <Old>3/4/4/5/6</Old> → 3/4/5/6/7

<Comment>

앙심 품은 놈팡이와 공간의 사원을 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="common" /> 일반 카드: <Icon type="coin" /> 10 코인(레벨 2), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 1 합성석(레벨 3), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 2 합성석(레벨 4), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 5 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>

## 신규 카드
5월에는 두 장의 신규 카드가 추가됩니다. 바로 중립 해적 고대인과 철갑 컨스트럭트 고대인입니다.

<Card type="unit" faction="neutral" name="귀중한 우두머리" unitType="해적 고대인" cost={4} strengths={[4, 5, 6, 7, 8]} movement={1} rarity="epic" cardart="/images/cards/cardart_U072.png" abilities={[
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다"
]} />
<Card type="unit" faction="ironclad" name="근원의 설계도" unitType="컨스트럭트 고대인" cost={4} strengths={[2, 3, 4, 5, 6]} movement={1} rarity="rare" cardart="/images/cards/cardart_U073.png" abilities={[
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *1 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *1 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *2 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *3 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *4 체력*을 *부여*합니다"
]} />

<Comment>

**역주**: 티카는 스톰바운드 게임즈 CEO의 친구분이 키우는 고양이 이름이라고 합니다.

</Comment>

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 5월 18일에 시작하는 워리어 난투는 <CardLink target="천사 같은 티카" /> 난투입니다.
  - 6월 1일에 시작하는 워리어 난투는 <CardLink target="떠도는 새끼 개구리" /> 난투입니다.