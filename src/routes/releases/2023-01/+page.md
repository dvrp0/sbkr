---
title: 2023 1월 업데이트
publishedAt: 2023/01
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/b3b4146d867a9888d2eb422ed2dc50768f59eee9-1920x622.png
summary: 1월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 신규 로그인 시스템이 적용됩니다!
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
    import DiscountedBrawl from "$components/DiscountedBrawl.md";
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다. 저희는 모든 바닐라 카드를 버프하기로 결정했으나, 안정성을 해치지 않도록 여러 단계에 걸쳐 진행하고 있습니다. 1월에는 두 번째 대상인 1 이동 바닐라 카드들이 버프되며, 2월에 마지막 대상들에 대한 버프가 진행됩니다.

  - <CardLink target="전쟁 베테랑" />: 체력 <Old>8/10/12/15/18</Old> → 9/11/13/16/19
  - <CardLink target="아이스 드로플링" />: 체력 <Old>7/8/10/12/15</Old> → 8/9/11/13/16
  - <CardLink target="연산자" />: 체력 <Old>10/13/16/20/24</Old> → 12/15/18/22/26
  - <CardLink target="대리자" />: 체력 <Old>7/8/10/12/15</Old> → 8/9/11/13/16
  - <CardLink target="영웅적인 병사" />: 체력 <Old>5/6/7/8/10</Old> → 6/7/8/9/11

<Comment>

**역주**: 다음 달에는 0 이동 바닐라 카드들이 버프될 예정으로, 다음 변경점들이 예고됐습니다.

  - <CardLink target="선실의 여인" />: 체력 5/6/7/8/10 → 6/7/8/9/11
  - <CardLink target="뱃멀미 경비원" />: 체력 8/10/12/15/18 → 10/12/14/17/20
  - <CardLink target="거침없는 광신도" />: 체력 10/13/16/20/24 → 12/15/18/22/26

</Comment>

## 신규 카드
1월에는 두 장의 신규 카드가 추가됩니다. 또 다른 해적과 새로운 유형의 능력(어느 정도는 말이죠)을 선보이는 신규 에픽 주문입니다.

<Card type="unit" faction="neutral" name="엄격한 갑판수" unitType="해적" cost={3} strengths={[1, 2, 3, 4, 5]} movement={1} rarity="rare" cardart="/images/cards/cardart_U063.png" abilities={[
    "카드 사용 시, 덱에서 무작위 해적 카드 *1장*을 *뽑습니다*",
    "카드 사용 시, 덱에서 무작위 해적 카드 *1장*을 *뽑습니다*",
    "카드 사용 시, 덱에서 무작위 해적 카드 *1장*을 *뽑습니다*",
    "카드 사용 시, 덱에서 무작위 해적 카드 *1장*을 *뽑습니다*",
    "카드 사용 시, 덱에서 무작위 해적 카드 *1장*을 *뽑습니다*"
]} />
<Card type="spell" faction="neutral" name="천둥소리" cost={5} rarity="epic" cardart="/images/cards/cardart_S022.png" abilities={[
    "아군 유닛들에게 내 손의 빈 카드 공간 하나마다 *2 체력*을 무작위로 나누어 *부여*합니다",
    "아군 유닛들에게 내 손의 빈 카드 공간 하나마다 *3 체력*을 무작위로 나누어 *부여*합니다",
    "아군 유닛들에게 내 손의 빈 카드 공간 하나마다 *4 체력*을 무작위로 나누어 *부여*합니다",
    "아군 유닛들에게 내 손의 빈 카드 공간 하나마다 *5 체력*을 무작위로 나누어 *부여*합니다",
    "아군 유닛들에게 내 손의 빈 카드 공간 하나마다 *6 체력*을 무작위로 나누어 *부여*합니다"
]} />

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 1월 12일에 시작하는 워리어 난투는 <CardLink target="엄격한 갑판수" /> 난투입니다.
  - 1월 26일에 시작하는 워리어 난투는 <CardLink target="천둥소리" /> 난투입니다.

## 신규 로그인 시스템
오랜 기다림 끝에 신규 로그인 시스템이 드디어 준비되었으며, **12월 20일**에 모든 플랫폼으로 출시된다는 소식을 기쁜 마음으로 전해드립니다.

새로운 시스템에서 플레이어는 Google 계정 또는 Apple ID를 통해 게임에 로그인할 수 있습니다. 두 가지 방식으로 게임과 Google 및 Apple 계정을 연결할 수 있으니 편하신 방법을 선택해 주세요. 자세한 설명은 다음과 같습니다.

### 로그인 후 연결
Kongregate 계정으로 로그인한 뒤 Google 또는 Apple 계정과 연결할 수 있습니다.

  1. 시작 메뉴에서 "계정으로 로그인" 버튼을 누르세요.
  2. "Kongregate로 로그인하기" 버튼을 누른 뒤 Kongregate 계정으로 로그인하세요.
  3. 스톰바운드의 환경 설정에서 "로그인 방법 추가" 버튼을 누른 뒤 Google 또는 Apple을 선택하세요.
  4. "이름 확인" 화면이 보이실 겁니다. 맞습니다. 이 화면에서 닉네임을 변경하실 수 있습니다.

### 회원가입 후 연결
Google 또는 Apple 계정을 생성하고 로그인한 뒤 기존 Kongregate 계정과 연결할 수 있습니다.

  1. 시작 메뉴에서 "계정으로 로그인" 버튼을 누르세요.
  2. "Google 또는 Apple 계정으로 로그인" 버튼을 누르세요.
  3. 새 계정에 대한 튜토리얼을 끝마치세요.
  4. "이름 확인" 화면이 보이실 겁니다. 맞습니다. 이 화면에서 닉네임을 변경하실 수 있습니다.
  5. 스톰바운드의 환경 설정에서 "Kongregate 연결" 버튼을 누르세요. 이 과정을 통해 새로 생성된 Google 또는 Apple 계정이 Kongregate 계정과 연결됩니다.
  6. "이름 확인" 화면이 다시 보이실 겁니다. 맞습니다. 이 화면에서 다시 한 번 닉네임을 변경하실 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/8d3f1bff75aab55f7359b5e95b624789a3791851-1080x2280.jpg#screenshot" />
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/51b47baad5b311177a62cc8b191e9e1d80a2b89a-1080x2280.jpg#screenshot" />
</FlexibleList>

## 신규 고대인 맵
고대인 테마의 새로운 맵이 추가됩니다! 12월 24일에 출시될 예정으로, 저희의 작은 크리스마스 선물입니다. ✨

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/b2066cb6897cc01a9e217dc2a9f6d8922c74ab17-3840x2160.png#landscape">
</FlexibleList>

## 난투 추첨
<ImageBlock position="right" src="https://cdn.sanity.io/images/5hlpazgd/production/81f717c6a822afa7ad9e2782cafea27420afba4a-1080x2400.jpg#screenshot">

난투에서 생명이 하나 남으면, 플레이어는 승리했을 때 보상을 고르는 것과 같은 방식으로 보너스를 선택할지 결정할 수 있습니다. 보너스를 선택하려면 드래프트 모드에 사용되는 티켓 카드를 하나 소모해야 합니다.

난투를 더 오래 이어갈 수 있도록 하기 위해, 이 과정에서 선택하는 난투 보너스 중 하나는 확정적으로 **생명**, **모든 생명** 또는 **얼음 갑옷**입니다. 다른 하나의 보너스는 어떤 것이든 제시될 수 있습니다.

</ImageBlock>

## 변경 사항
### 강등
영웅 리그에서의 시즌 강등이 개선됩니다.

이제 다이아몬드와 영웅 리그 사이에 "다이아몬드+" 리그가 추가됩니다. 이 리그는 일종의 중간 리그로, 다이아몬드보다 높지만 영웅 리그의 상위 500명보다는 낮습니다.

플레이어가 다이아몬드 리그에서 가장 높은 랭크를 달성했으나 영웅 리그에 이미 500명의 인원이 존재하는 경우, 해당 플레이어는 다이아몬드+ 리그로 승급하며 상위 500명에 들어가게 될 때까지 머무릅니다. 상위 500명에 속했었으나 500위 아래로 밀려난 플레이어 또한 다이아몬드+ 리그로 강등됩니다.

시즌이 마무리될 때, 한 번이라도 영웅 리그에 승급했던 플레이어들은 다이아몬드 5로 초기화됩니다. 다이아몬드+ 리그로 승급했으나 영웅 리그에는 도달하지 못한 플레이어들은 플래티넘 5로 초기화됩니다.

### 일일 달력
이제 일일 달력 보상을 24시간이 아닌 23시간마다 획득할 수 있습니다.

### 기지 함락자
기지 함락자가 게임에 미치는 영향과 데이터를 검토한 결과, 보상을 감소하기로 결정했습니다. 이제 목표별 보상은 다음과 같습니다.

  - 목표 1: <Icon type="ruby" /> 5 루비
  - 목표 2: <Icon type="coin" /> 75 코인
  - 목표 3: <Icon type="coin" /> 100 코인
  - 목표 4: <Icon type="stone" /> 5 합성석
  - 목표 5: <Icon type="coin" /> 150 코인
  - 목표 6: <Icon type="coin" /> 200 코인
  - 목표 7: <Icon type="coin" /> 250 코인
  - 목표 8: <Icon type="stone" /> 10 합성석
  - 목표 9: <Icon type="coin" /> 350 코인
  - 목표 10: <Icon type="coin" /> 450 코인
  - 목표 11: <Icon type="coin" /> 550 코인
  - 목표 12: <Icon type="stone" /> 25 합성석
  - 목표 13: <Icon type="coin" /> 700 코인
  - 목표 14: <Icon type="coin" /> 850 코인
  - 목표 15: <Icon type="coin" /> 1000 코인
  - 목표 16: <Icon type="stone" /> 50 합성석
  - 목표 17: <Icon type="coin" /> 1500 코인
  - 목표 18: <Icon type="coin" /> 2000 코인
  - 목표 19: <Icon type="coin" /> 2500 코인
  - 목표 20: <Icon type="stone" /> 75 합성석

또한 **최소 5턴 이상** 지속된 게임에서만 기지 함락자 포인트를 획득할 수 있습니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
시즌 초기화는 평소와 같이 1월 1일에 진행됩니다. 다만 밸런스 변경점은 신년으로 인해 1월 2일에 적용됩니다. 신규 카드인 엄격한 갑판수는 1월 6일, 천둥 소리는 1월 20일에 출시됩니다.

신규 로그인 시스템과 난투의 마지막 생명 기능은 12월 20일부터 이용 가능합니다. 새로운 고대인 맵은 12월 24일에 추가됩니다. 리그 변경점은 시즌 초기화와 함께 적용됩니다.