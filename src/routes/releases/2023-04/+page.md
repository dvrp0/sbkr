---
title: 2023 4월 업데이트
publishedAt: 2023/04
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/9f67b1c463e79201e5d8cb82319713cb9af59637-1920x622.png
summary: 4월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 부활절 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/04-2023
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

  - **<CardLink>서풍의 선원</CardLink>**: 체력 <Old>2/3/4/5/6</Old> → 3/4/5/6/7
  - **<CardLink>의욕 상실의 공격</CardLink>**: 데미지 <Old>2/3/4/5/6</Old> → 3/4/5/6/7
  - **<CardLink>파우누스 동료</CardLink>**: 체력 <Old>1/1/2/2/3</Old> → 2/2/3/3/4
  - **<CardLink>가시 많은 밤나무</CardLink>**: 체력 <Old>5/6/8/10/12</Old> → 6/7/9/11/14
  - **<CardLink>공간의 사원</CardLink>**: 손으로 돌아오는 카드 마나 <Old>0</Old> → 1

<Comment>

공간의 사원을 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>
<Comment>

**역주**: 놈팡이 너프가 예정되어 있었으나 코드에서 버그가 발생해 조금 지연되었다고 합니다. 또한 다음 달에 처형 1 데미지 증가, 시간의 사원 체력 증가 등의 조정이 이뤄질 수 있다고 언급했습니다.

</Comment>

## 신규 카드
4월에는 두 장의 신규 카드가 추가됩니다. 바로 첫 번째 4 이동 카드인 중립 언데드와 중립 프로스틀링입니다.

<Card type="unit" faction="neutral" name="초음속 돌파자" unitType="언데드" cost={5} strengths={[2, 3, 4, 5, 6]} movement={4} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/0fe79ea53702745615390d3798572f10ea0b0667-2186x1477.png" abilities={[
    "",
    "",
    "",
    "",
    ""
]}/>
<Card type="unit" faction="neutral" name="눈더미" unitType="프로스틀링" cost={6} strengths={[6, 7, 9, 11, 13]} movement={1} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/643123423424614079500d55ffc333a59487dc53-1730x2017.png" abilities={[
    "공격 후, *주변의* 적 유닛 또는 건물 *2개*에게 이 유닛의 체력만큼의 *데미지*를 *입힙니다*",
    "공격 후, *주변의* 적 유닛 또는 건물 *2개*에게 이 유닛의 체력만큼의 *데미지*를 *입힙니다*",
    "공격 후, *주변의* 적 유닛 또는 건물 *2개*에게 이 유닛의 체력만큼의 *데미지*를 *입힙니다*",
    "공격 후, *주변의* 적 유닛 또는 건물 *2개*에게 이 유닛의 체력만큼의 *데미지*를 *입힙니다*",
    "공격 후, *주변의* 적 유닛 또는 건물 *2개*에게 이 유닛의 체력만큼의 *데미지*를 *입힙니다*"
]}/>

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 4월 13일에 시작하는 워리어 난투는 **<CardLink>초음속 돌파자</CardLink>** 난투입니다.
  - 4월 27일에 시작하는 워리어 난투는 **<CardLink>눈더미</CardLink>** 난투입니다.

4월 6일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

## 부활절 이벤트
작년과 마찬가지로 부활절 이벤트가 진행됩니다. 이벤트가 진행되는 4월 6일부터 4월 17일까지 코인과 루비를 구매하면 추가로 지급됩니다.

또한 각기 다른 부활절 아바타를 포함하는 부활절 특별 상품 또한 판매될 예정입니다.

<FlexibleList setFontSizeFixed disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/3da87204d3437900cbe9fbf6d44195b00a0c0d4b-1400x500.png#screenshot" />
</FlexibleList>

## 카드 사용량 데이터
놓치신 분들을 위해, 저희가 리그별 티어 목록 형태로 **[카드 사용량 데이터](https://sbkr.pages.dev/card-usages)**를 공개하기 시작했다는 소식을 다시 한번 알려드립니다. 이를 통해 각 리그에서 특정 카드가 얼마나 인기 있는지, 리그별로 가장 많이 사용되는 카드가 무엇인지 파악하실 수 있을 것입니다.

참고로 말씀드리면 저희는 현재 해당 데이터가 나타내는 중립 카드의 영향력을 조정할 방식을 찾고 있습니다. 중립 카드는 모든 파벌의 덱에 포함되기 때문에 불균형적으로 나타나고 있습니다. 가까운 시일 내에 데이터에서 중립 카드가 두드러지는 정도를 완화시킬 예정입니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 4월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 4월 1일 오후 4시
  - **입장료 50% 감소 난투**: 4월 6일 오후 4시 ~ 4월 10일 오후 4시
  - **초음속 돌파자 출시**: 4월 7일 오후 4시
  - **부활절 코인 보너스**: 4월 17일 오후 4시 ~ 4월 27일 오후 4시
  - **부활절 루비 보너스**: 4월 17일 오후 4시 ~ 4월 27일 오후 4시
  - **부활절 특별 상품**: 4월 17일 오후 4시 ~ 4월 27일 오후 4시
  - **눈더미 출시**: 4월 21일 오후 4시
  - **초음속 돌파자 난투 (워리어)**: 4월 13일 오후 4시 ~ 4월 17일 오후 4시
  - **눈더미 난투 (워리어)**: 4월 27일 오후 4시 ~ 5월 5일 오후 4시

모든 시간은 한국 표준시 기준입니다.