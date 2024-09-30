---
title: 2024 7월 업데이트
publishedAt: 2024/07
headerImage: https://i.imgur.com/yrVCa8U_d.webp?maxwidth=1520&fidelity=grand
isHeaderShadowNeeded: true
summary: 7월에는 일부 밸런스가 조정되고, 휴가철 및 장엄함 이벤트가 진행되며, 루비 패스가 추가됩니다!
source: https://stormbound-kitty.com/releases/07-2024
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

  - <CardLink target="골판지 대저택" />: 마나 <Old>4</Old> → <New type="buff">3</New>, 체력 <Old>4/5/6/7/8</Old> → <New type="nerf">3/4/5/6/7</New>
  - <CardLink target="총을 든 장교" />: 마나 <Old>6</Old> → <New type="buff">3</New>, 체력 <Old>5/6/7/8/10</Old> → <New type="nerf">2/3/4/5/6</New>, 데미지 <Old>5/6/7/8/10</Old> → <New type="nerf">3/4/5/6/7</New>
  - <CardLink target="귀중한 우두머리" />: 체력 <Old>5/6/7/8/9</Old> → <New type="nerf">4/5/6/7/8</New>
  - <CardLink target="부활자 사이로" />: 부활 범위 <Old>주변</Old> → <New type="buff">전체</New>, 대상 유닛 수 <Old>1/2/3/4/8</Old> → <New type="buff">2</New>/2/3/<New type="nerf">3/4</New>
  - <CardLink target="얼어붙은 중심" />: 마나 <Old>5</Old> → <New type="buff">3</New>, 체력 <Old>4/5/6/7/8</Old> → <New type="nerf">2/3/4/5/6</New>, 마나 획득량 <Old>2</Old> → <New type="nerf">1</New>
  - <CardLink target="쓰러진 땅의 드레이크" />: 마나 <Old>6</Old> → <New type="buff">5</New>, 데미지 <Old>3/4/5/6/7</Old> → <New type="nerf">2/3/4/5/6</New>
  - <CardLink target="선택받은 구원자" />: 체력 제한 <Old>3/4/5/6/7</Old> → <New type="nerf">2/3/4/5/6</New>

<Comment>

귀중한 우두머리, 선택받은 구원자를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)
  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)

</Comment>

## 보너스 루비 패스
여러분들께 **보너스 루비 패스**를 소개하게 되어 무척이나 기쁩니다. 루비 패스는 14일에 걸쳐 대량의 루비를 모을 수 있는 상품으로, 플레이어들이 할인된 가격으로 루비를 획득할 수 있는 새로운 방식입니다.

루비 패스를 구매하면 즉시 <Icon type="ruby" /> 300 루비를 획득하고 14일 동안 일정량의 루비를 매일 지급받게 됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/63875036032858af1346c4dcceff209004c1e01a-1036x566.png#landscape" width="70%" />
</FlexibleList>

### 루비 획득
보너스 루비 패스를 구매하면 메인 화면에 루비 모양의 아이콘이 추가됩니다. 이 아이콘은 현재 루비 획득 가능 여부를 나타냅니다.

  - **루비 획득 가능**: 루비를 획득할 수 있는 잔여 시간이 녹색 타이머로 표시됩니다.
  - **루비 이미 획득**: 루비를 다시 획득하려면 기다려야 하는 시간이 빨간 타이머로 표시됩니다.

각 타이머는 24시간제로 표시되어 루비를 언제 획득할 수 있는지 정확하게 파악할 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/96f8f9ebf89710eecf1baacd70dc9446ab27add0-339x600.png#landscape" />
</FlexibleList>

루비를 획득하려면 아이콘을 터치해 루비 수집 팝업 창을 열어야 합니다. 해당 창에서 현재 루비를 획득할 수 있는지, 아니면 다음 루비까지 기다려야 하는지 확인할 수 있습니다.

플레이어는 일일 달력의 보상 획득 시간을 단축할 수 있는 것과 동일하게 루비 획득 시간 또한 단축할 수 있습니다. 시간 단축 기능에 대한 자세한 내용은 <Icon type="refer" /> <a href="/releases/2024-02" target="_blank">2월 패치 노트</a>를 참고하세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/07ab942afe75e79dc18d8b88ea1b6b5354819bd4-338x600.png#landscape" />
</FlexibleList>

### 루비 획득 과정
  1. 메인 화면의 루비 아이콘을 터치합니다.
  2. 보상 획득 화면으로 넘어가 즉시 루비를 획득합니다.
  3. 보상 획득 화면이 종료되면 메인 화면으로 돌아오고, 시간 단축 옵션이 있는 팝업 창이 표시됩니다.
  4. 만약 획득한 루비가 마지막이어서 보너스 루비 패스가 만료되었다면 구독 종료 및 재결제에 관한 팝업 창이 대신 표시됩니다.

새로운 루비 구독 모델이 모든 플레이어에게 더욱 매력적이고 가치 있는 경험을 제공하기를 바랍니다.

## 프리미엄 패스 구독
이번 업데이트에서는 **프리미엄 패스 구독 옵션**이 추가됩니다. 이제 플레이어들은 프리미엄 패스를 달마다 구매하는 것이 아니라 편리하게 구독할 수 있습니다.

### 구독이 어떤 방식으로 진행되나요?
프리미엄 패스를 구독하면 플레이어는 매달 요금을 지불하고 프리미엄 패스 기능을 이용할 수 있습니다.

매달 새롭게 프리미엄 패스를 구매하는 것과는 다르게, 구독은 플레이어가 취소하기 전까지 자동으로 갱신됩니다. 이를 통해 플레이어는 편리하고 끊김 없이 프리미엄 패스를 이용할 수 있습니다.

### 구독 결제
프리미엄 패스 구독을 결제하는 과정은 이전 프리미엄 패스와 동일합니다.
  - 프리미엄 패스 아이콘을 터치합니다.
  - 나타난 프리미엄 패스 팝업 창에서 가격이 적힌 녹색 버튼을 터치합니다.

결제는 플레이어의 Google Play 계정, Apple ID, Steam 지갑 또는 Steam에서 이용할 수 있는 다른 결제 수단을 통해 진행됩니다.

다음은 각 플랫폼별 결제 진행 과정에 대한 안내입니다.
  - **Google Play**: 플레이어는 게임 내 구매를 통해 프리미엄 패스를 구독할 수 있습니다. 결제는 Google Play 계정을 통해 진행되며 자동으로 갱신됩니다(30일).
  - **App Store**: 플레이어는 게임 내 구매를 통해 프리미엄 패스를 구독할 수 있습니다. 결제는 Apple ID를 통해 진행되며 Apple의 구독 조항에 따라 자동으로 갱신됩니다(30일).
  - **Steam**: 플레이어는 Steam 상점 페이지 또는 Steam 클라이언트에서 프리미엄 패스를 구독할 수 있습니다. 결제는 Steam 지갑 또는 Steam에서 이용할 수 있는 다른 결제 수단을 통해 진행됩니다. 비용은 정기적으로 청구됩니다(30일).

각 플랫폼은 각자의 시스템을 통해 원활한 결제 환경을 보장하므로 플레이어는 손쉽게 구독을 관리하면서 끊김 없이 프리미엄 패스의 혜택을 누릴 수 있습니다.

지금 프리미엄 패스가 활성화되어 있는 플레이어는 이전 시스템대로 할인된 가격으로 패스를 연장할 수 있습니다. 시간 내에 패스를 연장하지 못한 경우, 새로운 구독 방식을 통해서만 패스를 구매할 수 있습니다.

## 휴가철 이벤트
7월은 휴가와 기분 전환의 달이죠. 휴가철의 기분을 이벤트와 함께 스톰바운드에서도 느껴 봅시다!

휴가철 이벤트는 7월 10일부터 7월 15일까지 진행됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/f8eaecf43f2227593ffc981ab2c0a82ae49fd574-1500x1088.png#landscape" width="70%" />
</FlexibleList>

### 휴가 선물
이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **RELAX**를 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 7월 10일부터 7월 15일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 카드
이벤트 기간 동안 상점의 모든 책에서 카드 1장이 추가로 지급됩니다.

### 휴가철 특별 상품
아바타가 포함된 두 개의 특별 상품이 7월 22일까지 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/8819fceb78e8de15999da777a5b243764f6b3c94-1200x622.png#bundle" />
</FlexibleList>

## 장엄함 이벤트
올해 가장 장엄한 이벤트를 맞이하세요! 장엄함 이벤트가 7월 23일부터 7월 29일까지 진행됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/4e80703fab49a3a572489699f519bc340d9b7d39-1500x1084.png#landscape" width="70%" />
</FlexibleList>

### 장엄한 선물
이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **EXALTEDGIFT**를 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 7월 23일부터 7월 29일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 카드
이벤트 기간 동안 상점에서 레이븐의 책과 나이트의 책을 구매하면 카드 두 장을 추가로 획득할 수 있습니다.

### 더 많은 루비와 코인
이벤트 기간 동안 코인 구매 시 최대 30%, 루비 구매 시 최대 50%의 추가 보너스를 획득하실 수 있습니다.

### 장엄한 특별 상품
아바타가 포함된 두 개의 특별 상품이 8월 5일까지 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/055d0ef7892bf5e8b9db0c87134c8eaf7bd98ff2-1200x622.png#bundle" />
</FlexibleList>

### 저렴해진 난투
마지막으로 7월 25일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 7월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 7월 1일 오후 4시
  - **프리미엄 패스 구독제 변경**: 7월 3일 오후 4시
  - **휴가철 이벤트**: 7월 10일 오후 4시 ~ 7월 15일 오후 4시
  - **휴가철 이벤트 기념 선물(200 코인)**: 7월 10일 오후 4시 ~ 7월 15일 오후 4시
  - **추가 카드 지급 (모든 책)**: 7월 10일 오후 4시 ~ 7월 15일 오후 4시
  - **휴가철 이벤트 상점 상품**: 7월 10일 오후 4시 ~ 7월 15일 오후 4시
  - **장엄함 이벤트**: 7월 23일 오후 4시 ~ 7월 29일 오후 4시
  - **장엄함 이벤트 기념 선물(200 코인)**: 7월 23일 오후 4시 ~ 7월 29일 오후 4시
  - **추가 카드 지급 (레이븐의 책 및 나이트의 책)**: 7월 23일 오후 4시 ~ 7월 29일 오후 4시
  - **루비 및 코인 구매 보너스**: 7월 23일 오후 4시 ~ 7월 29일 오후 4시
  - **장엄함 이벤트 상점 상품**: 7월 23일 오후 4시 ~ 7월 29일 오후 4시

모든 시간은 한국 표준시 기준입니다.