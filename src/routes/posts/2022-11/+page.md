---
title: 2022 11월 업데이트
publishedAt: 2022/11
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/26106c4bb080b59079e421798884fd57f41ba58b-1920x622.png
summary: 11월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 다양한 프리미엄 상품이 판매됩니다.
---

<script>
    import Old from "$components/Old.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import FlexibleList from "$components/FlexibleList.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
</script>

## 밸런스 변경점
최근 저희는 랭크전 CPU의 레벨을 상향 조정했습니다.

  - **실버**: 레벨 2
  - **골드**: 레벨 3
  - **플래티넘**: 레벨 4
  - **다이아몬드**: 레벨 5

CPU를 상대하는 것이 조금 더 어려워지겠지만, 이 변경을 통해 더 나은 랭크전 경험을 제공할 수 있을 것이라고 생각합니다. 영웅 리그일 때 CPU와 친선전을 하면 CPU의 레벨이 1로 고정되는 버그 또한 이번 패치에서 수정될 예정입니다.

외에도 여느 때와 마찬가지로 일부 밸런스가 변경됩니다.

  - **혼돈의 제자**: <Old>사망 시, 인접한 무작위 적 하나에게 3/4/5/6/7 데미지를 입힙니다</Old> → 사망 시, 인접한 무작위 적들에게 4/5/6/7/8 데미지를 나누어 입힙니다
  - **요새 강화제**: 체력 부여량 <Old>2/3/4/5/6</Old> → 3/4/5/6/7
  - **황혼을 부르는 노인**: 체력 <Old>5/6/7/8/10</Old> → 6/7/8/9/11
  - **방랑하는 시의원**: 데미지 <Old>3/3/4/4/5</Old> → 받은 데미지만큼
  - **반복자 바벨**: 체력 <Old>2/3/4/4/5</Old> → 1/2/3/3/4
  - **대예언자 브라그다**: 대상 유닛 수 <Old>모두</Old> → 2/3/3/4/4명

***역주:*** *아래에도 다시 나오지만 가르디 또한 너프입니다. 생성된 사원 카드가 이제 정상적인 사이클 알고리즘을 따라서 손패에 더 늦게 잡힙니다.*

## 신규 카드
11월에는 신규 동방 건물과 철갑 컨스트럭트가 추가됩니다.

<Card type="unit" faction="ironclad" name="전선 기술자" unitType="컨스트럭트" cost=4 strengths={[2, 3, 4, 4, 5]} movement=1 rarity="rare" cardart="https://cdn.sanity.io/images/5hlpazgd/production/f3ac4ee9a976f053d6d8d0316839c55d4696d845-512x512.png" abilities={[
    "카드 사용 시, <strong>주변의</strong> 아군 건물 하나마다 <strong>2 체력</strong>을 <strong>획득</strong>합니다",
    "카드 사용 시, <strong>주변의</strong> 아군 건물 하나마다 <strong>2 체력</strong>을 <strong>획득</strong>합니다",
    "카드 사용 시, <strong>주변의</strong> 아군 건물 하나마다 <strong>3 체력</strong>을 <strong>획득</strong>합니다",
    "카드 사용 시, <strong>주변의</strong> 아군 건물 하나마다 <strong>4 체력</strong>을 <strong>획득</strong>합니다",
    "카드 사용 시, <strong>주변의</strong> 아군 건물 하나마다 <strong>4 체력</strong>을 <strong>획득</strong>합니다"
]} />

<Card type="building" faction="swarm" name="저주받은 묘지" cost=4 strengths={[3, 4, 5, 6, 7]} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/35a665df172f01539b0547404ab2430a97749641-1451x1451.png" abilities={[
    "내 턴 시작 시, 양쪽 타일에 <strong>1 체력</strong> 언데드를 <strong>소환</strong>합니다",
    "내 턴 시작 시, 양쪽 타일에 <strong>2 체력</strong> 언데드를 <strong>소환</strong>합니다",
    "내 턴 시작 시, 양쪽 타일에 <strong>2 체력</strong> 언데드를 <strong>소환</strong>합니다",
    "내 턴 시작 시, 양쪽 타일에 <strong>3 체력</strong> 언데드를 <strong>소환</strong>합니다",
    "내 턴 시작 시, 양쪽 타일에 <strong>3 체력</strong> 언데드를 <strong>소환</strong>합니다"
]} />

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 11월 10일에 시작하는 워리어 난투는 저주받은 묘지 난투입니다.
  - 11월 17일에 시작하는 워리어 난투는 전선 기술자 난투입니다.

<ImageBlock position="right" src="https://cdn.sanity.io/images/5hlpazgd/production/7777bf0a7d2d316bedf1aa9e1438e19bb2024ac2-1125x2436.jpg#screenshot">

또한 할로윈 이벤트의 일환으로 **으스스한 호박**이라는 특별 난투가 진행됩니다. 이 난투에서는 적 유닛이 사망할 때마다 으스스한 호박 건물이 소환됩니다. 이 건물은 특별한 조건을 충족하면 폭발하며, 난투 난이도에 따라 3/5/7 체력을 가집니다.

다음 난투들은 으스스한 호박 난투입니다.

- 10월 27일 캐주얼 난투
- 11월 3일 워리어 난투
- 11월 10일 얼티메이트 난투

</ImageBlock>

<Card type="building" faction="neutral" name="으스스한 호박" cost=0 strengths={[5, 5, 5, 5, 5]} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/68a09c8a1be3ab12a762051d8141d8b7d49722e3-512x512.png" abilities={[
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 <strong>파괴</strong>하고 파괴된 호박 하나마다 <strong>1 데미지</strong>를 적 기지에 <strong>입힙니다</strong>",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 <strong>파괴</strong>하고 파괴된 호박 하나마다 <strong>1 데미지</strong>를 적 기지에 <strong>입힙니다</strong>",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 <strong>파괴</strong>하고 파괴된 호박 하나마다 <strong>1 데미지</strong>를 적 기지에 <strong>입힙니다</strong>",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 <strong>파괴</strong>하고 파괴된 호박 하나마다 <strong>1 데미지</strong>를 적 기지에 <strong>입힙니다</strong>",
    "내 턴 시작 시, 아군 으스스한 호박이 3개 이상이라면, 모두 <strong>파괴</strong>하고 파괴된 호박 하나마다 <strong>1 데미지</strong>를 적 기지에 <strong>입힙니다</strong>"
]} />

각각의 으스스한 호박 난투에서 6번째 업적을 달성하면 특별 할로윈 아바타를 획득하실 수 있습니다.

<FlexibleList disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/7f621d062fb65dbbe358ce437b9a22d3e925abb5-568x621.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/ff2feac75d70fcc0cd764698e755a10f64df7842-568x622.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/198a61715df0387ab685c6b42631ba2903ab6521-568x622.png#avatar" />
</FlexibleList>

## 이벤트
### 할로윈 (10월 27일 ~ 11월 6일)
할로윈을 기념하는 의미에서 3종류의 프리미엄 번들이 판매될 예정입니다. 또한 이벤트 기간 동안 로그인하는 모든 분들께 <Icon type="ruby" /> 20 루비를 드립니다.

<FlexibleList allowOverflow setFontSizeFixed>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/f37998030f217b75810e3e5e9b402c8c7df84b0e-1047x642.png#bundle">

**13가지 무서운 이야기 번들 ($79.99)**
  - 프랑켄슈타인의 괴물 아바타
  - 전설의 책 13개
  - <Icon type="coin" /> 5000 코인
  - <Icon type="ruby" /> 500 루비
  - <Icon type="stone" /> 50 합성석

</ImageBlock>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/0bf8d8f0b885ea035f1c508a7dcb522801f4c965-1047x642.png#bundle">

**과자 하나 주면 안 잡아먹지 번들 ($29.99)**
  - 귀여운 호박 아바타
  - 신화의 고서 6개
  - 영웅의 고서 6개
  - 클래식 고서 6개

</ImageBlock>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/6face8684fa3428338ea7e88cbca7c4383ab26a1-1047x642.png#bundle">

**마법 가마솥 번들 ($9.99)**
  - 마녀 고양이 아바타
  - 마법의 책 3개
  - 엘더의 책 3개
  - <Icon type="coin" /> 300 코인
  - <Icon type="ruby" /> 30 루비

</ImageBlock>
</FlexibleList>

작년과 마찬가지로 11월 동안 특별한 주간 및 월간 사라지는 팩이 등장합니다.

마지막으로 11월 3일에 시작하는 난투의 입장료가 50% 감소합니다. (패스 보유 시 60%)

### 블랙 프라이데이 (11월 24일 ~ 11월 28일)
이벤트 기간 동안 한 번만 구매할 수 있는 특별 상품이 판매될 예정입니다.

<FlexibleList setFontSizeFixed>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/123abb43cf2bf38ca5c8fbb2513431eff46b0d20-1047x642.png?fit=max&auto=format&q=90#bundle">

**쏟아지는 고양이 번들 ($9.99)**
  - 해적 고양이 아바타
  - 레어 및 에픽 펠린 각각 3장씩
  - 클래식 고서 3개

</ImageBlock>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/fb371224f52e53aa2ad2e1f2d659fcc8de266035-1047x642.png?fit=max&auto=format&q=90#bundle">

**에드릭의 군대 번들 ($19.99)**
  - 힙스터 아바타
  - 용맹한 에드릭 2장
  - 지난 3달 동안 가장 많이 플레이된 카드 18장

</ImageBlock>
</FlexibleList>
<FlexibleList setFontSizeFixed>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/b13361e8db57188497ef79941c6e0a3496d011b4-1047x642.png?fit=max&auto=format&q=90#bundle">

**영웅의 증표 번들 ($49.99)**
  - 뽀글머리 아바타
  - 영웅의 고서 35개

</ImageBlock>
<ImageBlock position="top" type="vertical" src="https://cdn.sanity.io/images/5hlpazgd/production/bc14aeecb10f96584b9ef3e494d9af2fc2f3d7bb-1047x642.png?fit=max&auto=format&q=90#bundle">

**최고의 보물 번들 ($99.99)**
  - 외눈박이 아바타
  - 각 희귀도별 카드 30장씩
  - <Icon type="ruby" /> 1000 루비
  - <Icon type="coin" /> 5000 코인

</ImageBlock>
</FlexibleList>

<FlexibleList disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/6da66095e4cb7bfe1826f22c54af392536f1c3bf-400x500.png?fit=max&auto=format&q=90#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/141cbb8ace7384cebcbd6ff1959047feb63b5e9d-400x500.png?fit=max&auto=format&q=90#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/a1d047e94985e3ae8c1727e932319cdae2c6dea3-400x500.png?fit=max&auto=format&q=90#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/d9202e15b28b3679f1b128e44bb04a0e3f33ec68-400x500.png?fit=max&auto=format&q=90#avatar" />
</FlexibleList>

무엇보다 이벤트 기간 동안 고결의 책을 포함한 모든 책에서 카드 1장이 추가로 지급됩니다. 또한 코인을 구매하면 10~30%의 코인을, 루비를 구매하면 10~60%의 루비를 추가로 지급되며, 획득하는 모든 코인(퀘스트 제외) 및 일일 코인 획득 제한량이 2배로 증가합니다.

마지막으로 11월 24일에 시작하는 난투의 입장료가 50% 감소합니다. (패스 보유 시 60%)

## 신규 로그인 시스템 베타
신규 로그인 시스템이 안드로이드와 iOS에서 출시될 준비가 거의 완료되었습니다. 오류가 없음을 확인하기 위해 추가 테스트를 진행하려고 합니다. 테스트에 신청해 새로운 시스템을 먼저 경험하고 <Icon type="ruby" /> 50 루비를 획득하세요!

참가하시려면 **new.login.beta@stormboundgames.com**로 다음 내용들을 보내 주세요.

  - 스톰바운드 플레이어 ID (예시: 102390249)
  - 디스코드 닉네임 및 태그 (예시: Kitty#1909)
  - 거주 국가 (예시: United States of America)
  - 플레이하는 플랫폼 (예시: iOS 또는 Android)
  - Google Play 게임 또는 Apple Game Center로 로그인할 때 사용할 이메일

메일의 제목은 반드시 **&amp;lt;디스코드 ID&amp;gt; &amp;lt;스톰바운드 ID&amp;gt; &amp;lt;플랫폼 (iOS/Android/Steam)&amp;gt; login**의 형식을 지켜야 합니다. (예시: Kitty#1909 1002216742 Android login)

일정 수의 플레이어들을 선발해 11월 중으로 비공개 디스코드 채널에 초대할 예정입니다. 자세한 안내는 해당 시기가 되면 전달할 예정입니다.

## 카드 드로우 알고리즘
막 플레이한 카드를 다시 뽑게 되는 현상이 너무 자주 발생하며, 이는 드로우 메커니즘의 결함일 수 있다는 문제를 다수의 플레이어분이 제보해 주셨습니다. 면밀한 테스트 결과 메커니즘에는 문제가 없으며 정상 작동하고 있다는 결론을 내렸습니다.

희귀한 경우이지만, 한 턴에 같은 카드가 여러 번 사용될 수 있습니다. 사용된 카드는 1의 "가중치"를 갖고 덱 맨 아래로 들어갑니다. 다른 카드를 뽑게 되면 덱의 가중치가 재계산되어 사용했던 카드의 가중치가 유효한 값을 갖게 됩니다. 따라서 카드 능력 혹은 카드 교체를 통해 연속적으로 카드를 뽑게 되는 경우, 확률은 낮지만 카드를 다시 뽑을 수 있는 것입니다.

한 턴에서 여러 장의 카드를 사용하거나 교체하면 턴이 종료될 때 그만큼의 카드를 뽑게 되며, 그때마다 덱에 있는 모든 카드의 가중치가 재계산됩니다. 수집가 머즈가 생성하는 카드의 경우는 가중치가 1입니다.

빛의 인도자 가르디가 생성하는 카드는 독자적인 가중치 기반 드로우 알고리즘을 사용합니다. 11월 2일에 밸런스 변경점이 적용될 때 정상적인 수준으로 완화될 예정입니다. (***역주:*** *가르디가 생성한 사원들은 굉장히 빠르게 손에 들어와서 버그 아니냐고 말이 많았습니다*)

드로우 메커니즘은 대략 다음과 같이 동작합니다.

  1. 처음에 덱을 섞습니다. 카드 순서대로 가중치가 할당되는 것, 즉 저렴한 카드는 낮은 가중치를 갖고 비싼 카드는 높은 가중치를 갖는 것을 막기 위함힙니다.
  2. 섞인 덱의 첫 번째 카드에 1의 가중치를 할당합니다.
  3. 다른 모든 카드의 가중치를 (이전 카드의 가중치) `*` 1.6 + 100 공식에 따라 계산합니다. 따라서 두 번째 카드는 101.6의 가중치(1 `*` 1.6 + 100)를, 세 번째 카드는 262.56(101.6 `*` 1.6 + 100)의 가중치를 갖게 됩니다.
  4. 첫 핸드를 구성하기 위해 카드 4장을 가중치 랜덤으로 뽑습니다. 가중치 랜덤이기 때문에, 높은 가중치를 가진 카드가 뽑힐 확률이 높지만 반드시 뽑히지는 않습니다.

## 새로운 VS 애니메이션
<ImageBlock position="right"  src="https://cdn.sanity.io/images/5hlpazgd/production/73d0ebb1c28c3ac7fda11949b03b9ad01760cf24-883x1767.jpg?fit=max&auto=format&q=90#screenshot">

이번 업데이트에서 새로운 "그 상대는" 애니메이션이 추가됩니다. 화면 중단에 등장하며 회전하는 흰색 선과 함께 "VS" 텍스트가 나타납니다.

텍스트가 사라지기 시작하면 화면에 플레이어 이름, 왕국, 리그 단계를 포함한 리그 정보가 나타납니다.

또한 게임 중에 적의 정보를 터치하면 VS 애니메이션에서 나타났던 정보를 다시 확인할 수 있습니다.

</ImageBlock>

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
다른 때와 마찬가지로 밸런스 변경점은 시즌이 초기화되면 적용되지만, 휴일로 인해 11월 2일에 진행될 예정입니다. 신규 카드인 저주받은 묘지는 11월 4일, 전선 기술자는 11월 11일에 출시됩니다.

할로윈 이벤트는 10월 27일부터 11월 6일, 블랙 프라이데이 이벤트는 11월 24일부터 11월 28일까지 진행됩니다.

### 으스스한 호박의 능력이 어떻게 작동하나요?
해당 난투에서는 적 유닛이 사망하면 아군 으스스한 호박이 소환됩니다.

내 턴 시작 시, 보드에 있는 첫 번째 아군 으스스한 호박이 아군 호박의 개수를 확인합니다. 만약 3개 이상이라면 능력을 발동합니다. 능력이 발동하면 다른 모든 아군 으스스한 호박은 파괴되기 때문에, 첫 번째 으스스한 호박만이 능력을 발동할 수 있습니다.

기지에 3 데미지 이상을 입힐 수 있다는 점을 유념하세요. 한 턴에 더 많은 유닛을 처치할수록 소환되는 호박이 많아지며, 기지에 입히는 데미지 또한 증가합니다!