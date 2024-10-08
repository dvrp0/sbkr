---
title: 2024 9월 업데이트
publishedAt: 2024/09
headerImage: https://i.imgur.com/bnG63Yc.png
isHeaderShadowNeeded: true
summary: 9월에는 일부 밸런스가 조정되고, 신규 카드가 출시되며, 7주년 이벤트가 진행됩니다!
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

<Comment>

믿음직한 양치기와 망치 올프를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)
  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>

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
### 신규 카드
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

### 기존 카드
신규 카드 상품과 비슷하게 기존 카드를 구매할 수 있는 새로운 상품이 상점에 등장합니다. 기존 카드 상품은 24시간 동안 판매되며, 다음 일일 초기화 시간에 새로운 상품으로 교체됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/51776ec996ade7d8c74a602f3313d68c70d44ee2-455x260.png#landscape" />
</FlexibleList>

모든 플레이어에게 동일한 카드가 제시됩니다. 카드는 무작위로 선택되지만 각 카드는 다른 모든 카드가 한 번씩 판매된 이후에만 다시 제시될 수 있습니다. 이는 특정 카드만 여러 번 판매되는 것을 방지하고 모든 카드가 상품으로 판매될 수 있도록 보장하기 위함입니다.

## 신규 난투
이전과 같이 신규 카드를 위한 신규 난투가 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 8월 29일에 시작하는 워리어 난투는 <CardLink target="천문의 소환사" /> 난투입니다.

## 7주년 이벤트
7주년을 기념하는 이벤트가 9월 13일부터 9월 23일까지 진행됩니다. 특별한 날을 기념하기 위해 선물과 다양한 보너스, 특별 상품을 준비했습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/98db2ed9759712cd401c656db36d5db85d54965a-1500x1208.png#landscape" width="70%" />
</FlexibleList>

### 기념 선물
이벤트 기간 동안 접속하시는 모든 분들은 <Icon type="coin" /> 600 코인, <Icon type="ruby" /> 60 루비, <Icon type="stone" /> 6 합성석, <Icon type="legendary" /> 무작위 레전더리 카드 1장을 획득하실 수 있습니다.

하지만 그뿐만이 아닙니다! 이벤트 기간 동안 모든 분들께 <Icon type="coin" /> 200 코인의 특별 선물을 드립니다. 선물을 받으시려면 **이벤트가 종료되기 전까지** 특별 코드 **SBDAY**를 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#landscape" />
</FlexibleList>

**코드는 9월 13일부터 9월 23일 오후 4시까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

### 더 많은 코인
이벤트 기간 동안 퀘스트를 제외한 모든 코인이 두 배로 지급됩니다. 일반 플레이어들은 <Icon type="coin" /> 1,000 코인까지, 패스 보유 시 <Icon type="coin" /> 2,000 코인까지 획득할 수 있습니다.

### 더 많은 카드
이벤트 기간 동안 모든 책에서 카드가 추가로 지급됩니다!

  - **2장 추가**: 유닛 유형 책, 클래식 고서, 영웅의 고서, 신화의 고서
  - **1장 추가**: 고결의 책

### 루비 보너스
루비 번들을 구매하면 루비가 두 배로 지급됩니다. 이 보너스에는 기한이 따로 없으며 각 번들을 한 번씩 구매할 때까지 혜택이 적용됩니다.

### 7주년 특별 상품
아바타가 포함된 세 개의 특별 상품이 판매될 예정입니다.

<FlexibleList>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/1aec144291b83cf0d6f30bf664b5e112bf36927b-1042x400.png#bundle" />
</FlexibleList>

## 저렴해진 난투
9월 19일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

## UI 개선
사용자 경험을 개선하기 위한 지속적인 노력의 일환으로, Android와 iOS 모두에 푸시 알림이 도입된다는 사실을 기쁜 마음으로 알립니다. 알림을 통해 중요한 이벤트와 보상을 놓치지 마세요.

### 알림은 어떻게 이루어지나요?
플레이어는 게임 내 이벤트, 신규 드래프트 및 난투 시작에 대한 알림을 받게 됩니다. 또한 신규 시즌이 시작하거나 시즌 보상을 획득할 수 있을 때에도 알림이 전송되어 전투 끝에 얻은 보상을 제때 확인할 수 있도록 합니다.

또안 특별한 게임 내 컨텐츠에 계속 참여할 수 있도록 기간 한정 이벤트와 일일 보상에 대한 알림을 보내 드릴 예정입니다.

알림은 매우 유용한 정보를 제공하도록 설계되었으며, 앱에 계속해서 접속하지 않고도 게임 관련 정보를 놓치지 않도록 돕습니다.

### 알림 설정하기
플레이어는 어떠한 알림을 수신할지 완전히 제어하여 자신의 취향에 맞는 환경을 유지할 수 있습니다. 플레이어는 기기 설정 또는 게임 내 설정에서 푸시 알림을 관리할 수 있습니다.

모바일 기기에서 제어하는 경우, 알림을 켜거나 끌 수 있으며 알림 표시 방식을 변경하는 것도 가능합니다.

게임 설정의 경우, 특별 이벤트, 신규 시즌, 일일 보상, 드래프트 및 난투와 같은 게임 모드 중에서 정확히 어떤 알림을 수신할지 선택할 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/3e89d27179bb7a515d918a93d873ab84b28f8351-582x450.png#landscape" />
</FlexibleList>

이를 통해 불필요한 알림이 과도하게 전송되는 것을 방지하고 유연하게 정보를 확인할 수 있습니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 9월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **천문의 소환사 출시**: 8월 29일 오후 4시
  - **천문의 소환사 난투 (워리어)**: 8월 29일 오후 4시 ~ 9월 2일 오후 4시
  - **밸런스 변경점**: 9월 1일 오후 4시
  - **7주년 이벤트**: 9월 13일 오후 4시 ~ 9월 23일 오후 4시
  - **7주년 이벤트 기념 선물(200 코인)**: 9월 13일 오후 4시 ~ 9월 23일 오후 4시
  - **코인 두 배**: 9월 13일 오후 4시 ~ 9월 23일 오후 4시
  - **루비 보너스**: 9월 13일 오후 4시 ~ 9월 23일 오후 4시
  - **저렴해진 난투**: 9월 19일 오후 4시 ~ 9월 23일 오후 4시
  - **7주년 상점 상품**: 9월 13일 오후 4시 ~ 9월 30일 오후 4시

모든 시간은 한국 표준시 기준입니다.