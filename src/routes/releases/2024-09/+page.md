---
title: 2024 9월 업데이트
publishedAt: 2024/9
headerImage: https://i.imgur.com/WKbOqBh.png
isHeaderShadowNeeded: true
summary: 9월에는 일부 밸런스가 조정되고 신규 카드가 출시됩니다!
source: https://stormbound-kitty.com/releases/09-2024
---

<script>
    import BadgedHeader from "$components/BadgedHeader.svelte";
    import Old from "$components/Old.svelte";
    import New from "$components/New.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import FlexibleList from "$components/FlexibleList.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
    import CardLink from "$components/CardLink.svelte";
    import Comment from "$components/Comment.svelte";
    import DiscountedBrawl from "$components/DiscountedBrawl.md";
    import Table from "$components/Table.svelte";
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다.

  - <CardLink target="냉정한 보호자" />: 능력 대상 <Old>적 유닛</Old> → <New type="adjust">유닛</New>
  - <CardLink target="귀중한 우두머리" />: 마나 <Old>4</Old> → <New type="nerf">5</New>, 체력 <Old>4/5/6/7/8</Old> → <New type="buff">5/6/7/8/10</New>
  - <CardLink target="천둥소리" />: 마나 <Old>5</Old> → <New type="buff">4</New>
  - <CardLink target="폭신폭신 배드복서" />: 능력 대상 <Old>이 유닛보다 약한 적 유닛들</Old> → <New type="buff">4/5/6/7/9 체력 이하의 적 유닛들</New>
  - <CardLink target="감미로운 자매" />: 데미지 <Old>그 유닛의 체력 중 최대 5/6/7/8/9 데미지</Old> → <New type="buff">4/5/6/7/8 데미지</New>
  - <CardLink target="믿음직한 양치기" />: 체력 <Old>2/3/4/5/6</Old> → <New type="nerf">1/2/3/4/5</New>
  - <CardLink target="망치 올프" />: 체력 <Old>7/8/9/11/13</Old> → <New type="nerf">6/7/8/10/12</New>, 체력 부여량 <Old>3/3/4/5/6</Old> → 3/3/4/<New type="nerf">4/5</New>

## 신규 카드
기지 레벨링 시스템 및 기타 업데이트가 모두 완료되었으므로, 이제 다시 새로운 카드를 출시할 시간입니다!

신규 에픽 고대인 <CardLink target="천문의 소환사" />를 지금 게임에서 확인해 보세요!

<Card type="unit" faction="neutral" name="천문의 소환사" unitType="고대인" cost={8} strengths={[6, 8, 10, 12, 14]} movement={1} rarity="epic" cardart="/images/cards/cardart_UA22.png" abilities={[
    "이동하기 전, *주변의* 무작위 타일에 *2 체력* 유닛 *3명*을 *소환*합니다",
    "이동하기 전, *주변의* 무작위 타일에 *2 체력* 유닛 *3명*을 *소환*합니다",
    "이동하기 전, *주변의* 무작위 타일에 *3 체력* 유닛 *3명*을 *소환*합니다",
    "이동하기 전, *주변의* 무작위 타일에 *3 체력* 유닛 *4명*을 *소환*합니다",
    "이동하기 전, *주변의* 무작위 타일에 *4 체력* 유닛 *4명*을 *소환*합니다"
]} />

<Comment>

**역주**: 몇 달 안에 새로운 유닛 종족값이 추가될 거라고 합니다. 드래곤이 추가되면서 <CardLink target="복수심에 불타는 테고르" />가 영웅에서 드래곤 영웅이 됐던 것처럼, 이번에는 <CardLink target="사냥꾼 우베스" />가 신규 종족값에 맞추어 바뀔 것이라고 언급했습니다.

<br>

천문의 소환사는 무작위 종족값의 유닛을 소환하는데, 이 때문에 소환사와 모든 신규 종족값 유닛들은 서로 시너지가 있다고 합니다. 우베스와 비슷한 결의 능력을 가지고 있는지 추측해볼 수 있겠습니다.

<br>

아래는 살짝 공개된 카드 일러스트입니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://i.imgur.com/KUxxEbO.png#screenshot" />
</FlexibleList>

</Comment>

## 신규 카드 상품
이번 업데이트에서는 신규 카드 상품이 더욱 매력적인 선택지가 되도록 시각 요소와 방식이 개선됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/b587437fec3b9012230552bddbf7e4352835b9bd-792x1176.png#landscape" />
</FlexibleList>

이제 신규 카드가 출시되면 상품이 세 가지로 나누어져 판매됩니다.
  - 레벨 1 상품: 신규 카드 한 장과 자원이 포함됩니다.
  - 레벨 3 상품: 레벨 3까지 업그레이드하는 데 필요한 만큼의 신규 카드와 자원이 포함됩니다.
  - 레벨 5 상품: 레벨 5까지 업그레이드하는 데 필요한 만큼의 신규 카드와 자원이 포함됩니다.

상품 자체는 변경 이전과 유사하게 구성됩니다. 카드의 희귀도에 비례하여 카드와 자원을 지급합니다.

또한 플레이어는 상품이 제공하는 레벨이 현재 카드 레벨보다 높은 경우에만 상품을 구매할 수 있습니다. 다음은 예시입니다.
  - 만약 카드가 레벨 1이라면, 레벨 1 상품을 구매할 수 없습니다.
  - 만약 카드가 레벨 4라면, 레벨 5 상품만 구매할 수 있습니다.
  - 상품 가격은 현재 카드 레벨과 희귀도에 따라 달라집니다.

## 신규 난투
이전과 같이 신규 카드를 위한 신규 난투가 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 8월 29일에 시작하는 워리어 난투는 <CardLink target="천문의 소환사" /> 난투입니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 9월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **천문의 소환사 출시**: 8월 29일 오후 4시
  - **천문의 소환사 난투 (워리어)**: 8월 29일 오후 4시 ~ 9월 2일 오후 4시
  - **밸런스 변경점**: 9월 1일 오후 4시

모든 시간은 한국 표준시 기준입니다.