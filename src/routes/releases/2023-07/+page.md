---
title: 2023 7월 업데이트
publishedAt: 2023/07
headerImage: https://clan.cloudflare.steamstatic.com/images/32724087/b13272ad6729e7fb7ca7be349978ee53a181413c_960x311.png
isHeaderShadowNeeded: true
summary: 7월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정됩니다!
source: https://stormbound-kitty.com/releases/07-2023
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

  - <CardLink target="성장의 물약" />: 체력 부여량 <Old>2/3/4/5/6</Old> → 3/4/5/6/7
  - <CardLink target="고드름 파열" />: 데미지 <Old>8/10/12/15/18</Old> → 6/7/8/10/12
  - <CardLink target="블레이드 스톰" />: 데미지 <Old>1/2/2~3/3/4</Old> → 1/2/3/4/5

<Comment>

고드름 파열을 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="common" /> 일반 카드: <Icon type="coin" /> 10 코인(레벨 2), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 1 합성석(레벨 3), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 2 합성석(레벨 4), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 5 합성석(레벨 5)

</Comment>

## 신규 카드
7월에는 두 장의 신규 카드가 추가됩니다. 바로 겨울 드워프 고대인과 무리 사티로스 고대인입니다. 사티로스의 진짜 모습은 출시가 다가오면 공개됩니다!

<Card type="unit" faction="winter" name="수정방호자" unitType="드워프 고대인" cost={6} strengths={[6, 7, 8, 9, 11]} movement={1} rarity="epic" cardart="/images/cards/cardart_U119.png" abilities={[
    "이동하기 전, 내 기지와 *인접한* 무작위 타일로 *순간이동*합니다. 성공 시, 기지에 *1 체력*을 *부여*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일로 *순간이동*합니다. 성공 시, 기지에 *2 체력*을 *부여*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일로 *순간이동*합니다. 성공 시, 기지에 *2 체력*을 *부여*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일로 *순간이동*합니다. 성공 시, 기지에 *3 체력*을 *부여*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일로 *순간이동*합니다. 성공 시, 기지에 *3 체력*을 *부여*합니다"
]} />
<Card type="unit" faction="swarm" name="집결하는 극단원" unitType="사티로스 고대인" cost={4} strengths={[1, 2, 3, 4, 5]} movement={1} rarity="rare" cardart="/images/cards/cardart_U217.png" abilities={[
    "이동하기 전, 내 기지와 *인접한* 무작위 타일에 *1 체력* 사티로스를 *소환*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일에 *2 체력* 사티로스를 *소환*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일에 *3 체력* 사티로스를 *소환*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일에 *4 체력* 사티로스를 *소환*합니다",
    "이동하기 전, 내 기지와 *인접한* 무작위 타일에 *5 체력* 사티로스를 *소환*합니다"
]} />

각 신규 카드마다 $9.99로 구매할 수 있는 특별 상품이 판매될 예정입니다. 이 상품들은 여러 번 구매할 수 있으며, 플랫폼에 따라 가격이 상이할 수 있습니다.

  - <CardLink target="수정방호자" /> 팩: 카드 3장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석
  - <CardLink target="집결하는 극단원" /> 팩: 카드 5장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
밸런스 변경점은 7월 1일에 시즌이 초기화되면 적용됩니다. 신규 카드 2장은 이달 말에 추가될 예정입니다. 기대해 주세요!