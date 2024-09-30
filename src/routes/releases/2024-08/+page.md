---
title: 2024 8월 업데이트
publishedAt: 2024/08
headerImage: https://i.imgur.com/ljaBfYq.png
isHeaderShadowNeeded: true
summary: 8월에는 일부 밸런스가 조정되고, 일일 카드 UI가 변경되며, 서리여름 및 영원 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/08-2024
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

  - <CardLink target="관문 홍수" />: 능력 대상 <Old>유닛</Old> → <New type="buff">적 유닛</New>
  - <CardLink target="날카로운 주먹의 추방자" />: 체력 <Old>2/4/4/7/7</Old> → <New type="buff">4/5/6/7/8</New>, 체력 획득량 <Old>2/2/3/3/4</Old> → <New type="buff">3/3/4/4/5</New>
  - <CardLink target="스노우메이슨" />: 체력 부여량 <Old>4/5/6/7/8</Old> → <New type="buff">5/6/7/8/10</New>
  - <CardLink target="대예언자 브라그다" />: 체력 <Old>5/6/7/9/11</Old> → <New type="buff">6/7/8/10/12</New>, 대상 유닛 수 <Old>2/3/3/4/4</Old> → <New type="buff">3/4/4/5/5</New>
  - <CardLink target="한겨울의 혼돈" />: <Old>5/6/7/8/9 체력 이하의 적 유닛 중, 이미 빙결된 유닛들을 파괴하고 나머지 유닛들을 빙결시킵니다</Old> → <New type="buff">빙결된 적 유닛들에게 4/5/6/7/8 데미지를 입히고 5/6/7/8/10 체력 이하의 적 유닛들을 빙결시킵니다</New>
  - <CardLink target="완력의 축복" />: 체력 제한 <Old>4/5/6/7/8</Old> → <New type="buff">5/6/7/8/10</New>
  - <CardLink target="차가운 여석상" />: 체력 <Old>5/6/7/8/9</Old> → <New type="buff">6/7/8/9/10</New>

## 일일 카드 UI 변경
카드를 구매하는 과정이 더욱 편리해지도록 상점의 일일 카드 기능이 일부 변경됩니다. 이제 일일 카드 구역에 여러분이 현재 보유 중인 카드 수와 레벨 업까지 필요한 카드 수가 진행 표시줄의 형태로 표시됩니다.

또한 이제 미보유 카드를 루비와 코인 대신 합성석으로 잠금 해제할 수 있습니다. 이에 맞추어 카드를 잠금 해제하는 데 필요한 합성석 가격이 보유 중인 카드를 생성하는 가격과 동일하게 조정됩니다(3, 5, 15).

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/cb329a136676449a577002770e138b6d78cc795c-1920x1080.png#landscape" />
</FlexibleList>

해당 변경점은 신규 플레이어들이 자원의 사용처를 익히면서 카드를 획득할 수 있도록 돕기 위해 마련되었으며, 플레이어의 성장에 긍정적인 영향을 미칠 것으로 기대합니다.

## 서리여름 축제
새로운 스톰바운드 이벤트로 더위를 물리치세요! 서리여름 축제가 8월 14일부터 8월 19일까지 진행되며 여러분의 여름날에 시원한 바람을 불어넣어 줄 겁니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/cabaefe7b802e7c3321f8f4d2c6eeab049ebaf68-1500x1104.png#landscape" width="70%" />
</FlexibleList>

### 이벤트 선물
이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **ICECREAM**을 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 8월 14일부터 8월 19일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 코인
이벤트 기간 동안 모든 코인 획득량(퀘스트 제외)과 일일 코인 획득 제한량이 두 배로 증가합니다. 일반 플레이어들은 <Icon type="coin" /> 1,000 코인까지, 패스 보유 시 <Icon type="coin" /> 2,000 코인까지 획득할 수 있습니다.

### 더 많은 카드
이벤트 기간 동안 상점에서 프로스틀링의 책과 드워프의 책을 구매하면 카드 두 장을 추가로 획득할 수 있습니다.

### 여름 축제 특별 상품
아바타가 포함된 두 개의 특별 상품이 8월 26일까지 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/12b720f00ed38a91cd300541b1ec1ed228b06ac8-1200x622.png#bundle" />
</FlexibleList>

## 영원 이벤트
특별한 이벤트와 함께 영원의 힘을 해방하세요! 영원 이벤트가 8월 26일부터 9월 2일까지 진행됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/5625aaed1bbb4f5f6c78b4f8aed8f177c8f0c0f8-1500x1156.png#landscape" width="70%" />
</FlexibleList>

### 이벤트 선물
이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **HOURGLASS**를 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 8월 26일부터 9월 2일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 카드
이벤트 기간 동안 상점에서 엘더의 책과 언데드의 책을 구매하면 카드 두 장을 추가로 획득할 수 있습니다.

### 더 많은 루비와 코인
이벤트 기간 동안 코인 구매 시 최대 30%, 루비 구매 시 최대 50%의 추가 보너스를 획득하실 수 있습니다.

### 영원 특별 상품
아바타가 포함된 두 개의 특별 상품이 9월 9일까지 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/5ddbf60fad1c13014968d492c4a14e8f2102979f-1200x622.png#bundle" />
</FlexibleList>

### 저렴해진 난투
마지막으로 8월 29일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 8월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 8월 1일 오후 4시
  - **서리여름 축제**: 8월 14일 오후 4시 ~ 8월 19일 오후 4시
  - **서리여름 축제 기념 선물(200 코인)**: 8월 14일 오후 4시 ~ 8월 19일 오후 4시
  - **추가 카드 지급 (프로스틀링의 책 및 드워프의 책)**: 8월 14일 오후 4시 ~ 8월 19일 오후 4시
  - **서리여름 축제 상점 상품**: 8월 14일 오후 4시 ~ 8월 26일 오후 4시
  - **영원 이벤트**: 8월 26일 오후 4시 ~ 9월 2일 오후 4시
  - **영원 이벤트 기념 선물(200 코인)**: 8월 26일 오후 4시 ~ 9월 2일 오후 4시
  - **추가 카드 지급 (엘더의 책 및 언데드의 책)**: 8월 26일 오후 4시 ~ 9월 2일 오후 4시
  - **루비 및 코인 구매 보너스**: 8월 26일 오후 4시 ~ 9월 2일 오후 4시
  - **영원 이벤트 상점 상품**: 8월 26일 오후 4시 ~ 9월 9일 오후 4시

모든 시간은 한국 표준시 기준입니다.