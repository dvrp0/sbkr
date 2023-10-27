---
title: 2023 11월 업데이트
publishedAt: 2023/11
headerImage: https://clan.cloudflare.steamstatic.com/images/32724087/7a8e17379d654e2e73f513ca3430c77413642bfa_960x311.png
isHeaderShadowNeeded: true
summary: 11월에는 일부 밸런스가 조정되고, 새 카드가 추가되며, 할로윈 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/11-2023
---

<script>
    import Old from "$components/Old.svelte";
    import New from "$components/New.svelte";
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

  - <CardLink target="야생 퓨마" />: 능력 발동 조건 <Old>적 없음</Old> → <New type="nerf">유닛 없음</New>
  - <CardLink target="반짝반짝 야옹이" />: 혼란 대상 <Old>자신</Old> → <New type="nerf">자신과 다른 아군 유닛</New>
  - <CardLink target="대드루이드 이어린" />: 체력 <Old>7/9/11/12/15</Old> → <New type="nerf">7/8/9/10/12</New>
  - <CardLink target="돌격의 호랑이" />: 마나 <Old>2</Old> → <New type="buff">3</New>, 체력 <Old>1/2/3/4/5</Old> → <New type="buff">3/4/5/6/7</New>

나머지 변경점은 10월 31일에 모두 공개됩니다.

<Comment>

대드루이드 이어린과 야생 퓨마, 반짝반짝 야옹이를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>

## 신규 카드
신규 해적 엘더인 <CardLink target="주름진 장루원" />이 10월 27일에 출시됩니다.

<Card type="unit" faction="neutral" name="주름진 장루원" unitType="해적 엘더" cost={3} strengths={[3, 4, 5, 6, 7]} movement={0} rarity="epic" cardart="/images/cards/cardart_U075.png" abilities={[
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다"
]} />

## 신규 난투
이전과 같이 신규 카드를 위한 신규 난투가 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 11월 2일에 시작하는 워리어 난투는 <CardLink target="주름진 장루원" /> 난투이며, 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

<ImageBlock position="right" src="https://cdn.sanity.io/images/5hlpazgd/production/7777bf0a7d2d316bedf1aa9e1438e19bb2024ac2-1125x2436.jpg#screenshot">

또한 할로윈 이벤트의 일환으로 **으스스한 호박**이라는 특별 난투가 진행됩니다. 이 난투에서는 적 유닛이 사망할 때마다 으스스한 호박 건물이 소환됩니다. 이 건물은 특별한 조건을 충족하면 폭발하며, 난투 난이도에 따라 3/5/7 체력을 가집니다.

다음 난투들은 으스스한 호박 난투입니다.

  - 11월 2일 캐주얼 난투
  - 11월 9일 워리어 난투
  - 11월 16일 얼티메이트 난투

</ImageBlock>

<Card type="building" faction="neutral" name="으스스한 호박" cost={0} strengths={[5, 5, 5, 5, 5]} rarity="common" cardart="/images/cards/cardart_TD03.png" abilities={[
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 *파괴*하고 파괴된 호박 하나마다 *1 데미지*를 적 기지에 *입힙니다*",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 *파괴*하고 파괴된 호박 하나마다 *1 데미지*를 적 기지에 *입힙니다*",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 *파괴*하고 파괴된 호박 하나마다 *1 데미지*를 적 기지에 *입힙니다*",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 *파괴*하고 파괴된 호박 하나마다 *1 데미지*를 적 기지에 *입힙니다*",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 *파괴*하고 파괴된 호박 하나마다 *1 데미지*를 적 기지에 *입힙니다*"
]} />

각각의 으스스한 호박 난투에서 6번째 업적을 달성하면 특별 할로윈 아바타를 획득하실 수 있습니다.

<FlexibleList setFontSizeFixed disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/2c894cec085b4be1988ebc1234fa23ee85b22b78-1920x810.png#screenshot" />
</FlexibleList>

## 할로윈 이벤트
할로윈을 기념하는 의미에서 10월 30일부터 11월 6일까지 3종류의 음산한 프리미엄 번들이 판매될 예정입니다. 또한 해당 기간 동안 특별 코드 **HALLOWEEN2023**를 입력하시는 모든 분들께 자그마한 <Icon type="ruby" /> 20 루비의 선물을 드립니다.

코드를 입력하려면 메인 화면의 우상단에 위치한 게임 옵션을 열어야 합니다. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누른 뒤, 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#screenshot" />
</FlexibleList>

**코드는 10월 30일 오후 4시부터 11월 6일 오후 4시까지만 사용할 수 있습니다.** 코드 사용에 문제가 있으시다면 공식 디스코드에서 @Aileen에게 문의하시거나 **contact@stormboundgames.com**에 이메일을 보내 주세요.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 11월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **<CardLink target="주름진 장루원" /> 출시**: 10월 27일 오후 4시
  - **할로윈 이벤트**: 10월 30일 오후 4시 ~ 11월 6일 오후 4시
  - **할로윈 코드 사용 가능**: 10월 30일 오후 4시 ~ 11월 6일 오후 4시
  - **밸런스 변경점**: 11월 1일 오후 4시
  - **<CardLink target="주름진 장루원" /> 난투 (워리어)**: 11월 1일 오후 4시
  - **으스스한 호박 난투 (캐주얼)**: 11월 2일 오후 4시
  - **으스스한 호박 난투 (위리어)**: 11월 9일 오후 4시
  - **으스스한 호박 난투 (얼티메이트)**: 11월 16일 오후 4시

모든 시간은 한국 표준시 기준입니다.

### 으스스한 호박의 능력이 어떻게 작동하나요?
해당 난투에서는 적 유닛이 사망하면 아군 으스스한 호박이 소환됩니다.

내 턴 시작 시, 보드에 있는 첫 번째 아군 으스스한 호박이 아군 호박의 개수를 확인합니다. 만약 3개 이상이라면 능력을 발동합니다. 능력이 발동하면 다른 모든 아군 으스스한 호박은 파괴되기 때문에, 첫 번째 으스스한 호박만이 능력을 발동할 수 있습니다.

기지에 3 데미지 이상을 입힐 수 있다는 점을 유념하세요. 한 턴에 더 많은 유닛을 처치할수록 소환되는 호박이 많아지며, 기지에 입히는 데미지 또한 증가합니다!
