---
title: 2023 2월 업데이트
publishedAt: 2023/02
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/57361b354dc771f4fd277696755d4cbf413a1fde-1920x622.png
summary: 2월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정되며, 닉네임을 변경할 수 있게 됩니다!
source: https://stormbound-kitty.com/releases/02-2023
---

<script>
    import Old from "$components/Old.svelte";
    import ImageBlock from "$components/ImageBlock.svelte";
    import FlexibleList from "$components/FlexibleList.svelte";
    import Icon from "$components/Icon.svelte";
    import Card from "$components/Card.svelte";
    import Comment from "$components/Comment.svelte";
    import DiscountedBrawl from "$components/DiscountedBrawl.md";
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정되며, 바닐라 카드 버프가 계속됩니다.

  - **뱃멀미 경비원**: 체력 <Old>8/10/12/15/18</Old> → 10/12/14/17/20
  - **에본락 항구**: 체력 <Old>4/5/6/7/8</Old> → 5/6/7/8/9
  - **온화한 영혼**: 체력 <Old>10/13/16/20/24</Old> → 12/15/18/22/26
  - **선실의 여인**: 체력 <Old>5/6/7/8/10</Old> → 6/7/8/9/11
  - **불꽃 없는 도마뱀**: 체력 <Old>7/8/10/12/14</Old> → 8/9/11/13/15
  - **거침없는 광신도**: 체력 <Old>10/13/16/20/24</Old> → 12/15/18/22/26

<Comment>

**역주**: 바닐라 버프는 이번 달이 마지막입니다. 3월부터 다른 카드들에 대한 조정이 재개되며 따라서 평소보다 많은 변경이 이뤄질 것이라고 합니다. 버프 대상으로 군중의 여왕을 살짝 언급하기도 했습니다.

</Comment>

## 신규 카드
2월에는 두 장의 신규 카드가 추가됩니다. 바로 중립 사티로스와 중립 레이븐입니다.

<Card type="unit" faction="neutral" name="앙심 품은 놈팡이" unitType="레이븐" cost={3} strengths={[1, 2, 3, 4, 5]} movement={1} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/677c4d8466c38388f1af171b0fac70c220ee9ba5-512x512.png" abilities={[
    "사망 시, 가장 약한 적 유닛을 **파괴**합니다",
    "사망 시, 가장 약한 적 유닛을 **파괴**합니다",
    "사망 시, 가장 약한 적 유닛을 **파괴**합니다",
    "사망 시, 가장 약한 적 유닛을 **파괴**합니다",
    "사망 시, 가장 약한 적 유닛을 **파괴**합니다"
]}/>
<Card type="unit" faction="neutral" name="믿음직한 양치기" unitType="사티로스" cost={4} strengths={[1, 2, 2, 3, 4]} movement={0} rarity="rare" cardart="https://cdn.sanity.io/images/5hlpazgd/production/1c54c40f89fe7896f272e8b9ae208b86b5a73e37-512x512.png" abilities={[
    "카드 사용 시, 최대 **3명**의 다른 아군 유닛 하나마다 **2 체력**을 **획득**합니다",
    "카드 사용 시, 최대 **3명**의 다른 아군 유닛 하나마다 **2 체력**을 **획득**합니다",
    "카드 사용 시, 최대 **3명**의 다른 아군 유닛 하나마다 **3 체력**을 **획득**합니다",
    "카드 사용 시, 최대 **3명**의 다른 아군 유닛 하나마다 **3 체력**을 **획득**합니다",
    "카드 사용 시, 최대 **3명**의 다른 아군 유닛 하나마다 **3 체력**을 **획득**합니다"
]}/>

<Comment>

**역주**: 이번 신규 카드 둘 모두 더 이상 자신의 종족과 관련이 없는 이탈자라고 합니다. 믿음직한 양치기는 그 이후로 평화로운 삶을 살기 시작했지만, 앙심 품은 놈팡이는 다른 레이븐에게 복수를 시도하고 있습니다. 또한 양치기의 지팡이가 사티로스의 창으로 만들어졌을 수도 있다고 언급했습니다.

</Comment>

각 신규 카드마다 특별 상품이 판매될 예정입니다. 카드 10장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석을 획득할 수 있습니다.

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

  - 2월 9일에 시작하는 워리어 난투는 **앙심 품은 놈팡이** 난투입니다.
  - 2월 23일에 시작하는 워리어 난투는 **믿음직한 양치기** 난투입니다.

## 발렌타인 이벤트
점점 가까워지는 발렌타인 데이를 기념하기 위해 작은 이벤트가 진행됩니다. 발렌타인 이벤트가 진행되는 2월 9일부터 2월 20일까지 코인과 루비를 구매하면 추가로 획득합니다.

2월 16일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

또한 각기 다른 아바타를 포함하는 발렌타인 특별 상품 또한 판매될 예정입니다.

### 발렌타인 난투
특별한 발렌타인 난투에서 플레이어는 아군 마음의 사원과 함께 게임을 시작합니다. 마음의 사원의 능력치나 능력은 평소와 완벽하게 동일하지만, **파괴될 수 없다는 점**이 다릅니다. 게임이 시작되면 마음의 사원이 각 플레이어의 첫 번째 열에 무작위로 소환됩니다.

<Card type="building" faction="neutral" name="마음의 사원" cost={3} strengths={[3, 4, 5, 6, 7]} rarity="common" cardart="https://cdn.sanity.io/images/5hlpazgd/production/053786ff9efe07087f8582ceb0edfb384ed935db-512x512.png" abilities={[
    "내 턴 시작 시, 더 강한 기지에서 1 체력을 제거해 더 약한 기지에 부여합니다",
    "내 턴 시작 시, 더 강한 기지에서 1 체력을 제거해 더 약한 기지에 부여합니다",
    "내 턴 시작 시, 더 강한 기지에서 1 체력을 제거해 더 약한 기지에 부여합니다",
    "내 턴 시작 시, 더 강한 기지에서 2 체력을 제거해 더 약한 기지에 부여합니다",
    "내 턴 시작 시, 더 강한 기지에서 2 체력을 제거해 더 약한 기지에 부여합니다"
]}/>

발렌타인 난투는 난이도별로 한 번씩 진행됩니다. 정확한 날짜는 패치 노트 하단에 있는 일정을 참고하세요.

### 특별 보상
발렌타인 난투의 각 난이도마다 특별 아바타를 획득할 수 있습니다.

<FlexibleList setFontSizeFixed disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/b579265669906facf16443e97f9b42b9d19d740e-415x617.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/c8f682e5b564a2d78996af8e1106854ee8d1130b-445x623.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/b88fdcdbc46fb12135a4a2bad62421caf7ad42c3-416x637.png#avatar" />
</FlexibleList>

다음은 발렌타인 특별 상품으로 획득할 수 있는 아바타입니다.

<FlexibleList setFontSizeFixed disableVertical>
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/809c6ed904f40ba39ae4efe46d12091d7c23e35b-541x632.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/93694211e7fd12aa543371d1fc468fa175069f89-516x616.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/7e9b4e8ed4485c662d8bef110bf02c4822fa2704-477x608.png#avatar" />
    <img alt="아바타" src="https://cdn.sanity.io/images/5hlpazgd/production/832e9d15ec802a354a0d8aeb4298bf02048b733d-473x648.png#avatar" />
</FlexibleList>

## 닉네임 변경
<ImageBlock position="right" src="https://cdn.sanity.io/images/5hlpazgd/production/219e4d83cefa600f6aadd0a5f87a56a141da5201-750x1334.jpg#screenshot">

플레이어는 90일마다 한 번씩 무료로 닉네임을 변경할 수 있습니다. 90일이 되기 전에 닉네임을 변경하고 싶으시다면 티켓 카드(드래프트 모드 및 난투 추첨에 사용되는 재화)를 소모해 변경할 수 있습니다. 이름을 즉시 변경하려면 티켓 카드 3장이 필요합니다.

또한 매주 티켓 카드를 획득하기 위해서 시청해야 하는 광고의 개수가 1개에서 3개로 증가합니다. 이는 매주 티켓 카드를 무료로 얻을 수 있도록 유지하면서도 티켓 카드의 사용성을 높이기 위한 조치입니다. 프리미엄 패스 소유자는 업데이트 전과 동일하게 티켓 카드를 획득할 수 있습니다.

</ImageBlock>

## 카드 사용량 데이터
놓치신 분들을 위해, 저희가 리그별 티어 목록 형태로 (카드 사용량 데이터)[https://sbkr.pages.dev/card-usages]를 공개하기 시작했다는 소식을 다시 한번 알려드립니다. 이를 통해 각 리그에서 특정 카드가 얼마나 인기 있는지, 리그별로 가장 많이 사용되는 카드가 무엇인지 파악하실 수 있을 것입니다.

참고로 말씀드리면 저희는 현재 해당 데이터가 나타내는 중립 카드의 영향력을 조정할 방식을 찾고 있습니다. 중립 카드는 모든 파벌의 덱에 포함되기 때문에 불균형적으로 나타나고 있습니다. 가까운 시일 내에 데이터에서 중립 카드가 두드러지는 정도를 완화시킬 예정입니다.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
저희는 업데이트 진행, 카드 출시 등과 같은 날짜에 대한 관리를 개선하고 이벤트를 놓쳐 실망하는 플레이어가 없도록 하고자 합니다. 아래에서 2월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 2023년 2월 1일 오후 4시
  - **믿음직한 양치기 출시**: 2023년 2월 3일 오후 4시
  - **발렌타인 코인 보너스**: 2023년 2월 9일 오후 4시 ~ 2023년 2월 20일 오후 4시
  - **발렌타인 루비 보너스**: 2023년 2월 9일 오후 4시 ~ 2023년 2월 20일 오후 4시
  - **발렌타인 난투 (캐주얼)**: 2023년 2월 9일 오후 4시 ~ 2023년 2월 13일 오후 4시
  - **믿음직한 양치기 난투 (워리어)**: 2023년 2월 9일 오후 4시 ~ 2023년 2월 13일 오후 4시
  - **입장료 50% 감소 발렌타인 난투 (워리어)**: 2023년 2월 16일 오후 4시 ~ 2023년 2월 20일 오후 4시
  - **앙심 품은 놈팡이 출시**: 2023년 2월 17일 오후 4시
  - **앙심 품은 놈팡이 난투 (워리어)**: 2023년 2월 23일 오후 4시 ~ 2023년 2월 27일 오후 4시
  - **발렌타인 난투 (얼티메이트)**: 2023년 2월 23일 오후 4시 ~ 2023년 2월 27일 오후 4시

모든 시간은 한국 표준시 기준입니다.