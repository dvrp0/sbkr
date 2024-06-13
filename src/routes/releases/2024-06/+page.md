---
title: 2024 6월 업데이트
publishedAt: 2024/6
headerImage: https://i.imgur.com/c5Kf5fo.png
isHeaderShadowNeeded: true
summary: 6월에는 일부 밸런스가 조정되고, 기지 레벨링 체계가 재설계되며, 여름 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/06-2024
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

  - <CardLink target="전설의 불꽃" />: 데미지 <Old>3/4/5/6/7</Old> → <New type="buff">4/5/6/7/8</New>
  - <CardLink target="사냥꾼 우베스" />: 체력 <Old>5/6/6/8/10</Old> → <New type="buff">7/8/8/10/12</New>, 데미지 <Old>1/1/2/2/3</Old> → 1/1/2/2/<New type="nerf">2</New>
  - <CardLink target="현자의 선물" />: <Old>11/12/13/14/15 마나를 획득합니다</Old> → <New type="nerf">13</New> 마나를 획득하고 가장 약한 아군 유닛에게 <New type="buff">2/3/4/5/6</New> 체력을 부여합니다
  - <CardLink target="대지의 신" />: 체력 획득량 <Old>4/4/4/5/5</Old> → <New type="nerf">3</New>/4/4/5/<New type="buff">6</New>
  - <CardLink target="비누 세척" />: <Old>중독된 아군 유닛</Old> 대상 → <New type="nerf">중독된 유닛</New> 대상
  - <CardLink target="불타는 물줄기" />: <Old>적 유닛에게 3/4/5/6/7 데미지를 입힙니다</Old> → 적 유닛과 <New type="buff">건물들에게</New> 3/4/5/6/7 데미지를 입힙니다
  - <CardLink target="옹호자" />: <Old>공격하기 전</Old> → <New type="nerf">유닛 또는 건물을 공격하기 전</New>

<Comment>

사냥꾼 우베스, 현자의 선물, 대지의 신, 비누 세척과 옹호자를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)
  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>
<Comment>

모든 밸런스 변경점은 6월 1일에 적용될 예정입니다. 다만 <CardLink target="현자의 선물" />은 6월 중반에 클라이언트 업데이트와 함께 별도로 적용될 예정이며 이에 따른 보상이 지급될 예정입니다.

</Comment>

## 새로운 기지 레벨링 체계
이번 패치에서는 기지 레벨링 체계가 재설계되어 단순히 카드를 수집하고 레벨을 올리는 것 이외에도 다양한 게임 내 활동을 통해 경험치 포인트(EXP)를 획득하도록 개선됩니다.

플레이어는 다양한 활동을 진행함으로써 경험치를 모을 수 있고, 일정량의 경험치를 획득하면 궁극적으로 기지의 체력이 증가합니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/0a391905626fee3cbba14241b2eff19f51382c0c-3000x1080.png#landscape" />
</FlexibleList>

기지 레벨링 체계가 새롭게 업데이트됨에 따라 기지 함락자가 게임에서 삭제됩니다. 각 플레이어는 진행 중이었던 기지 함락자 단계의 보상을 즉시 지급받습니다.

### 경험치 획득처
게임 내에서 경험치를 획득할 수 있는 활동들은 1회만 획득이 가능한 활동들과 반복해서 획득이 가능한 활동들로 나뉩니다.

**1회 제한 획득처**: 다음 활동들은 계정당 1회만 경험치를 지급합니다.
  - 캠페인 챕터 완료
  - 처음으로 가장 높은 랭크 달성
  - 컬렉션에 없던 신규 카드 잠금 해제

**반복 획득처**: 다음 활동들은 조건이 충족될 때마다 경험치를 지급합니다.
  - 경쟁 모드에서 적 기지에 데미지 부여
  - 각 단계별 일일 퀘스트 완료
  - 드래프트 상자 획득
  - 난투 업적 달성
  - 랭크 시즌 상자 획득

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/bde396b7111f706b2fcee38ebc9589d3942f52c9-400x533.png" />
</FlexibleList>

### 보상
새로운 체계에서는 하나의 기지 레벨이 여러 개의 중간 단계로 세분화됩니다. 플레이어는 각 중간 단계에 도달함으로써 보상을 획득할 수 있습니다.

아래 표에서 기지 레벨당 요구되는 경험치와 중간 단계 달성 보상을 확인하시기 바랍니다.

<Table>

|기지 레벨|필요 경험치(반올림)|중간 단계별 보상|
|---|---|---|
|11|3000|<Icon type="coin" /> 250 코인, <Icon type="ruby" /> 30 루비, <Icon type="stone" /> 7 합성석|
|12|6375|<Icon type="coin" /> 350 코인, <Icon type="ruby" /> 40 루비, <Icon type="stone" /> 10 합성석|
|13|10500|<Icon type="coin" /> 500 코인, <Icon type="ruby" /> 75 루비, <Icon type="stone" /> 15 합성석|
|14|18000|<Icon type="coin" /> 650 코인, <Icon type="ruby" /> 100 루비, <Icon type="stone" /> 20 합성석|
|15|30000|<Icon type="coin" /> 800 코인, <Icon type="ruby" /> 125 루비, <Icon type="stone" /> 25 합성석|
|16|50000|<Icon type="coin" /> 1,000 코인, <Icon type="ruby" /> 150 루비, <Icon type="stone" /> 30 합성석|
|17|80000|<Icon type="coin" /> 1,250 코인, <Icon type="ruby" /> 175 루비, <Icon type="stone" /> 35 합성석|
|18|110000|<Icon type="coin" /> 1,500 코인, <Icon type="ruby" /> 200 루비, <Icon type="stone" /> 40 합성석|
|19|155000|<Icon type="coin" /> 1,750 코인, <Icon type="ruby" /> 250 루비, <Icon type="stone" /> 45 합성석|
|20|200000|<Icon type="coin" /> 2,000 코인, <Icon type="ruby" /> 300 루비, <Icon type="stone" /> 50 합성석|

</Table>

저희는 현재 설정된 경험치 지급량이 적절하다고 판단하고 있으나, 관련된 데이터가 수집됨에 따라 게임 내 활동들이 지급하는 경험치의 양은 유동적으로 조금씩 조정될 수 있습니다.

또한 이미 기지 레벨 20에 도달한 플레이어들을 위한 새로운 체계가 기획 중에 있습니다. 다만 해당 체계가 플레이어들이 진정으로 원하는 것을 제공할 수 있도록 작업에 들어가기에 앞서 먼저 충분한 데이터를 모을 예정입니다.

### 진척도
플레이어는 플레이어 프로필 팝업 창에서 현재 기지 레벨과 다음 레벨까지의 진척도를 확인할 수 있습니다. 해당 창에는 게임 내 활동 목록과 각 활동이 지급하는 경험치 또한 표시됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/ae113d126cdbff2e9035c5c88625f8bdd3f2b6b6-1920x1080.png#landscape" />
</FlexibleList>

이 체계는 플레이어들의 성장 곡선이 더욱 합리적이도록 다듬고 활발한 플레이어를 효과적으로 보상하기 위해 설계되었습니다. 궁극적으로 새로운 기지 레벨링 체계는 기지 레벨을 성장시키는 일련의 과정을 통해 기지 함락자보다 훨씬 많은 양의 자원을 제공합니다.

## 보상
6월 1일, 밸런스 변경점을 적용하던 중 기술 오류로 인해 일부 플레이어들이 게임에 접속하지 못하는 문제가 발생했습니다. 이에 대한 보상으로 **모든 플레이어들에게** <Icon type="coin" /> **200 코인을 드립니다.**

선물을 받으시려면 **6월 13일부터 6월 17일까지** 특별 코드 **1STOFJUNE**을 입력하세요. 여러분의 양해와 지속적인 성원에 감사드립니다.

## 여름 이벤트
목전에 다가온 여름을 기념하기 위해 6월 13일부터 6월 17일까지 여름 이벤트가 진행됩니다!

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/7cadc2b9d75767d18988e9dbd9aa599438f756cb-1500x1064.png#landscape" width="70%" />
</FlexibleList>

### 여름 선물
이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **SUNBEAM**을 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 6월 13일부터 6월 17일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 코인
이벤트 기간 동안 모든 코인 획득량(퀘스트 제외)과 일일 코인 획득 제한량이 두 배로 증가합니다.

### 더 많은 카드
이벤트 기간 동안 상점에서 전설의 책과 혼돈의 책을 구매하면 카드 두 장을 추가로 획득할 수 있습니다.

### 여름 특별 상품
아바타가 포함된 두 개의 특별 상품이 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/3ef6ef46d1fcc08e588f121e5c2fcfd9f18b323a-1200x543.png#bundle" />
</FlexibleList>

또한 지금부터 특별 상품들을 각각 **3번씩** 구매할 수 있게 됩니다. 아바타는 최초 구매 시에만 지급됩니다.

### 저렴해진 난투
마지막으로 6월 13일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 6월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 6월 1일 오후 4시
  - **기지 레벨링 체계 업데이트**: 6월 13일 오후 4시
  - **보상 코드**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시
  - **여름 이벤트**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시
  - **여름 이벤트 기념 선물(200 코인)**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시
  - **추가 카드 지급 (전설의 책 및 혼돈의 책)**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시
  - **추가 코인 지급**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시
  - **여름 이벤트 상점 상품**: 6월 13일 오후 4시 ~ 6월 17일 오후 4시

모든 시간은 한국 표준시 기준입니다.