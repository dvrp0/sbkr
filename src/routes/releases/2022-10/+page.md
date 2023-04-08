---
title: 2022 10월 업데이트
publishedAt: 2022/10
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/8d832232926ea86a6b41a5e6c9134b98fd4605b3-1920x622.png
summary: 10월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 영웅 리그 변경과 함께 일일 달력이 새롭게 변화합니다.
source: https://stormbound-kitty.com/releases/01-2023
---

<script>
    import Old from "$components/Old.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import FlexibleList from "$components/FlexibleList.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
    import CardLink from "$components/CardLink.svelte";
    import Comment from "$components/Comment.svelte";
</script>

## 보상
5주년 이벤트가 예정보다 일찍 끝나는 일이 있었습니다. 9월 25일이 지나기 전까지(한국 기준으로 26일 오후 3시 59분) 진행될 예정이었으나 25일 당일에 종료되었습니다. 해당 오류는 불쾌감을 안겨드렸으며 일어나서는 안 되는 일이었습니다. 영향을 받으신 모든 분들께 사과드리며, 겪으셨을 불편함에 대한 보상을 드리고자 합니다.

25일에 난투를 플레이한 플레이어들에게는 입장료가 할인되지 않아 추가로 소모한 코인을 이미 지급했습니다. 마찬가지로 25일에 책을 구매한 플레이어들에게 지급받지 못한 추가 카드들을 지급했습니다. 뿐만 아니라, 10월 2일 하루 동안 상점에서 구매하는 책에서 추가 카드가 지급되며 획득하는 모든 코인이 두 배로 증가합니다.

다시 한 번 불편을 끼쳐 드려 죄송합니다. 앞으로는 이러한 상황이 반복되지 않도록 만전을 기울이겠습니다.

## 밸런스 변경점
이번 달부터 다시 밸런스가 조정됩니다.

  - <CardLink target="늑대 망토" />: 마나 <Old>6</Old> → 7
  - <CardLink target="용자리 방랑자" />: 소환하는 드래곤 체력 <Old>1/1/2/2/3</Old> → 2/2/3/3/4
  - <CardLink target="황혼을 부르는 노인" />: 체력 부여량 <Old>4/5/6/7/9</Old> → 5/6/7/8/10
  - <CardLink target="사원 수호자" />: <Old>아군 사원이나 기지의 앞이나 양옆에 카드 사용 시</Old> → 아군 사원이나 기지와 인접하여 카드 사용 시

<Comment>

늑대 망토를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)

</Comment>

## 신규 카드
10월에는 새로운 그림자 건물과 철갑 로덴트가 추가됩니다.

<Card type="unit" faction="ironclad" name="치즈 유혹자" unitType="로덴트" cost=3 strengths={[1, 2, 3, 4, 5]} movement=1 rarity="common" cardart="/images/cards/cardart_U318.png" abilities={[
    "카드 사용 시, 전방의 첫 번째 적 유닛을 *끌어오고 2 데미지*를 *입힙니다*",
    "카드 사용 시, 전방의 첫 번째 적 유닛을 *끌어오고 3 데미지*를 *입힙니다*",
    "카드 사용 시, 전방의 첫 번째 적 유닛을 *끌어오고 4 데미지*를 *입힙니다*",
    "카드 사용 시, 전방의 첫 번째 적 유닛을 *끌어오고 5 데미지*를 *입힙니다*",
    "카드 사용 시, 전방의 첫 번째 적 유닛을 *끌어오고 6 데미지*를 *입힙니다*"
]} />

<Card type="building" faction="shadowfen" name="혼령의 방첨탑" cost=3 strengths={[2,3,4,5,6]} rarity="common" cardart="/images/cards/cardart_B403.png" abilities={[
    "내 턴 시작 시, 가장 강력한 적 유닛으로부터 *1 체력*을 *흡수*합니다",
    "내 턴 시작 시, 가장 강력한 적 유닛으로부터 *1 체력*을 *흡수*합니다",
    "내 턴 시작 시, 가장 강력한 적 유닛으로부터 *2 체력*을 *흡수*합니다",
    "내 턴 시작 시, 가장 강력한 적 유닛으로부터 *2 체력*을 *흡수*합니다",
    "내 턴 시작 시, 가장 강력한 적 유닛으로부터 *3 체력*을 *흡수*합니다"
]} />

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 10월 13일에 시작하는 워리어 난투는 <CardLink target="치즈 유혹자" /> 난투입니다.
  - 10월 20일에 시작하는 워리어 난투는 <CardLink target="혼령의 방첨탑" /> 난투입니다.

## 영웅 리그
### 상위 500명
이제 영웅 리그의 인원은 500명으로 제한됩니다. 영웅 리그로 승격하기 위해서는 다른 플레이어들보다 높은 최고 점수를 달성하거나 영웅 리그에 가장 먼저 도달하는 500명 중 한 명이 되어야 합니다.

플레이어가 다이아몬드 1 5별에 도달하면 다음 두 가지 상황이 발생할 수 있습니다.

  1. 영웅 리그의 인원이 500명 미만이라면, 플레이어는 자동으로 승격합니다.
  2. 영웅 리그의 인원이 500명 이상이라면, 플레이어는 다이아몬드 리그에 남습니다. 이때부터 자신의 현재 및 최고 점수, 영웅 리그로 승격하는 데 필요한 점수를 확인할 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=3ea9df34e8d037b360bb87&no=24b0d769e1d32ca73dea87fa11d02831dd19b8e7fc4eb19683da708446d82daeaea2a3d6b0059d76899727834b0624383e23d1915c59bdef37c6eeca439fa15c18547c38c7cd1c#screenshot"/>
    <img alt="스크린샷" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=3ea9df34e8d037b360bb87&no=24b0d769e1d32ca73dea87fa11d02831dd19b8e7fc4eb19683da708446d82daeaea2a3d6b0059d76899727834b0624383e23d1915c59bdef37c6ee9e4a97a20b07ffbe78bd7215#screenshot"/>
    <img alt="스크린샷" src="https://dcimg4.dcinside.co.kr/viewimage.php?id=3ea9df34e8d037b360bb87&no=24b0d769e1d32ca73dea87fa11d02831dd19b8e7fc4eb19683da708446d82daeaea2a3d6b0059d76899727834b0624383e23d1915c59bdef37c6ee9d43ccf65ebf821eec5bc411#screenshot"/>
</FlexibleList>

### 보상
영웅 리그 보상(시즌 상자와 점수에 따른 특별 보상)은 다른 리그와는 다르게 주어집니다.

  - **아바타**: 이전과 동일하게 1위 플레이어는 특별 아바타를 얻습니다.
  - **영웅 상자**: 영웅 상자는 등수와 상관없이 영웅 리그에서 시즌을 마감한 500명에게 주어집니다. 다이아몬드로 강등되어 시즌을 마감한 플레이어는 다이아몬드 상자를 받게 됩니다.
  - **책과 합성석**: 일정 등수보다 높은 등수로 시즌을 마감한 플레이어들에게는 책과 합성석이 추가로 지급됩니다. 예를 들어, 96위로 시즌을 마감하면 상위 250위 보상과 상위 100위 보상을 받을 수 있습니다.

상위 250명의 플레이어들이 시즌 종료 시 받게 될 합성석은 다음과 같습니다.

  - **상위 250위**: 20 합성석
  - **상위 100위**: 상위 250위 보상 + 30 합성석
  - **상위 10위**: 상위 100위 보상 + 50 합성석
  - **상위 1위**: 상위 10위 보상 + 100 합성석

상위 250명의 플레이어는 또한 시즌 종료 시 지금과 동일하게 책을 지급받지만, 책의 종류가 무작위로 변경됩니다. 예를 들어 1위 플레이어는 신화의 고서, 대드래곤의 책, 전설의 책 중 하나를 지급받게 됩니다. 다음 시즌에는 다른 3개의 책 중 하나를 지급받게 되겠죠. 다른 상위 250명의 플레이어들는 모든 종류의 특별 책을 지급받을 수 있습니다(마찬가지로 무작위며 매 시즌 달라집니다).

## 일일 달력
어느새 추가된 지 1년이 지난 일일 달력이 개편됩니다. 매일마다 보상 하나씩을 획득하는 것 대신, 이제 몇 월인지와 관계없이 총 15개의 보상을 획득할 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/1b600422f993df4ca0e6c605046e381aa82667bd-1536x2048.jpg#screenshot" />
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/762a9800321b6915f685034805d24aac5202bec9-1536x2048.jpg#screenshot" />
</FlexibleList>

보상을 획득하면 24시간 뒤에 다음 보상을 획득할 수 있습니다. 즉 이제 특정한 달에 특정 보상을 획득할 필요가 없어집니다. 이전 보상을 획득한 지 24시간이 지난 뒤라면 언제든지 보상을 획득할 수 있습니다.

프리미엄 패스를 보유하고 있다면 보상을 획득할 때마다 특별 보상을 추가로 얻게 됩니다. 패스를 구매하면 이전에 놓친 모든 추가 보상을 자동으로 획득합니다. 또한 더 중요한 것은 프리미엄 패스가 월 단위가 아닌 30일 단위로 변경된다는 점입니다. 예를 들어 12일 오후 1시에 패스를 구매하면 정확히 30일 뒤 오후 1시에 종료됩니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
밸런스 변경점은 시즌이 초기화되면 적용됩니다. 신규 카드인 치즈 유혹자는 10월 13일, 혼령의 방첨탑은 10월 20일에 출시됩니다. 영웅 리그 변경점은 10월 1일부터 적용됩니다.