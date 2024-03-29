---
title: 2023 6월 업데이트
publishedAt: 2023/06
headerImage: https://clan.akamai.steamstatic.com/images/32724087/0de56b71a8cd5141d564a94872aefa7c9e0d8d6a.png
isHeaderShadowNeeded: true
summary: 6월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 스톰바운드 뉴스레터가 추가됩니다!
source: https://stormbound-kitty.com/releases/06-2023
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

  - <CardLink target="공포의 괴물" />: 체력 <Old>3/4/4/5/6</Old> → 3/4/5/6/7
  - <CardLink target="골판지 대저택" />: 혼란시키는 적 유닛 수 <Old>1</Old> → 1/1/2/2/2
  - <CardLink target="전우" />: 체력 <Old>3/3/4/4/6</Old> → 3/4/5/6/7
  - <CardLink target="조류 추적자" />: 마나 <Old>6</Old> → 5, 파괴 대상 <Old>유닛들</Old> → 유닛과 건물들

## 신규 카드
6월에는 두 장의 신규 카드가 추가됩니다. 바로 중립 해적 고대인과 철갑 컨스트럭트 고대인입니다. 이 컨스트럭트는 무엇에 대한 설계도일까요?

<Card type="unit" faction="neutral" name="귀중한 우두머리" unitType="해적 고대인" cost={4} strengths={[4, 5, 6, 7, 8]} movement={1} rarity="epic" cardart="/images/cards/cardart_U072.png" abilities={[
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다",
    "이동하기 전, 내 손에서 가장 비싼 카드를 덱에 있는 더 저렴한 카드로 *교체*합니다"
]} />
<Card type="unit" faction="ironclad" name="근원의 설계도" unitType="컨스트럭트 고대인" cost={4} strengths={[2, 3, 4, 5, 6]} movement={1} rarity="rare" cardart="/images/cards/cardart_U320.png" abilities={[
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *1 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *1 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *2 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *3 체력*을 *부여*합니다",
    "이동하기 전, *주변의* 무작위 아군 유닛에게 *4 체력*을 *부여*합니다"
]} />

<Comment>

**역주**: 친환경 프로토타입은 고대의 설계도를 따라 컨스트럭트를 만들고자 시도한 결과물입니다. 근원의 설계도는 고대인들이 해당 설계도대로 만든 컨스트럭트로, 친환경 프로토타입이 올바르게 만들어졌을 때의 모습이라고 볼 수 있습니다.

</Comment>

각 신규 카드마다 $9.99로 구매할 수 있는 특별 상품이 판매될 예정입니다. 이 상품들은 여러 번 구매할 수 있습니다.

  - <CardLink target="귀중한 우두머리" /> 팩: 카드 3장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석
  - <CardLink target="근원의 설계도" /> 팩: 카드 5장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석

## 스톰바운드 뉴스레터
<ImageBlock position="right" src="https://cdn.sanity.io/images/5hlpazgd/production/8158743100e424e96dcad33c1f1faae4f1a103e2-1055x1876.png#screenshot">

이번 달 말부터 스톰바운드 뉴스레터가 운영됩니다. 플레이어 여러분들께 최신 업데이트에 관해 알려 드리기 위함으로, 이메일을 통해 패치 노트 정보를 제공해 드릴 예정입니다. 물론 스팸 메일은 보내지 않을 겁니다!

뉴스레터를 구독하시면 소정의 루비를 획득하실 수 있습니다. 또한 추후에 뉴스 메일을 통해서 보상을 획득할 수 있는 코드를 보내 드릴 수도 있습니다!

</ImageBlock>

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

**귀중한 우두머리 난투**에서 0 마나 버전의 <CardLink target="귀중한 우두머리" />는 다른 <CardLink target="귀중한 우두머리" />를 뽑을 수 없습니다. 0 마나가 아닌 <CardLink target="귀중한 우두머리" />에는 이 제약이 적용되지 않습니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
밸런스 변경점은 6월 1일에 시즌이 초기화되면 적용됩니다. 신규 카드 2장과 스톰바운드 뉴스레터는 이달 말에 추가될 예정입니다. 기대해 주세요!