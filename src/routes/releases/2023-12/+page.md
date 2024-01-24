---
title: 2023 12월 업데이트
publishedAt: 2023/12
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/8725ff6a629d11e1e2ab2e1183982900f6ba86d3-1920x622.png
isHeaderShadowNeeded: true
summary: 12월에는 일부 밸런스가 조정되고, 크리스마스 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/12-2023
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
</script>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다.

  - <CardLink target="머리 없는 다혈질" />: 체력 <Old>3/4/5/6/7</Old> → <New type="buff">4/5/6/7/8</New>
  - <CardLink target="집결하는 극단원" />: 체력 <Old>1/2/3/4/5</Old> → <New type="buff">2/3/4/5/6</New>
  - <CardLink target="기계 공방" />: 체력 <Old>3/3/4/5/6</Old> → <New type="buff">5/5/6/7/8</New>
  - <CardLink target="기계 노동자" />: 소환하는 공방 체력 <Old>3/3/4/5/6</Old> → <New type="buff">5/5/6/7/8</New>
  - <CardLink target="디버그 로거" />: 체력 <Old>4/5/6/7/8</Old> → <New type="buff">5/6/7/8/9</New>
  - <CardLink target="새벽의 불꽃" />: 체력 <Old>8/10/12/15/18</Old> → <New type="nerf">6/8/10/13/16</New>
  - <CardLink target="수정방호자" />: 이동 속도 <Old>1</Old> → <New type="nerf">0</New>

<Comment>

새벽의 불꽃과 수정방호자를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)

</Comment>

## 크리스마스 이벤트
크리스마스 이벤트가 12월 21일부터 1월 1일까지 진행됩니다. 특별한 크리스마스 선물과 보너스, 다양한 특별 판매 상품과 함께 연휴 분위기를 마음껏 즐겨 보세요.

모든 스톰바운드 유저 여러분들과 기쁨을 나누기 위해 <Icon type="ruby" /> 40 루비와 <Icon type="coin" /> 400 코인을 드립니다. 이 선물을 획득하시려면 12월 21일부터 12월 27일까지 특별 코드 **CHRISTMAS2023**을 입력하세요.

코드를 입력하는 단계는 다음과 같습니다.

1. 메인 화면의 우상단에 위치한 게임 옵션을 여세요.
2. 옵션에서 찾을 수 있는 **코드 사용** 버튼을 누르세요.
3. 코드를 입력하고 **받기** 버튼을 누르세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/782061675a637bde5a5f243153f99e49b82c64e1-1572x1080.png#screenshot" />
</FlexibleList>

**코드는 12월 21일부터 12월 27일까지만 사용 가능하다는 점을 다시 한번 말씀드립니다.** 코드 활성화에 어려움을 겪으실 경우 공식 디스코드에서 @Aileen에게 문의하거나 contact@stormboundgames.com으로 메일을 보내 주세요.

이벤트 기간 동안 퀘스트를 제외한 모든 코인이 두 배로 지급됩니다. 또한 겸손의 책을 제외한 모든 책에서 카드 한 장이 추가로 지급됩니다. 기존에 카드 3장을 지급하던 책은 4장을, 6장을 지급하던 책(신화, 영웅 및 클래식)은 7장을 지급합니다!

마지막으로 코인과 루비 구매 시 최대 30%의 추가 보너스를 획득하실 수 있습니다.

## 크리스마스 난투
크리스마스 이벤트의 일환으로 **눈싸움 난투**가 다시 돌아옵니다.

전투가 시작되면 각 플레이어의 두 번째 줄의 무작위 타일에 눈사람이 소환됩니다. 내 눈사람과 적 눈사람은 각 플레이어의 시점에서 같은 타일에 위치하므로 서로 마주보지 않게 됩니다. 예시를 들자면 각 플레이어의 왼쪽에서 3번째 타일에 소환될 수 있겠죠. 눈사람은 난투 난이도에 따라 10/15/20 체력을 가집니다. 파괴되면 재생성되지 않고 전선에 영향을 미치지 않습니다.

<Card type="building" faction="neutral" name="눈사람" cost={0} strengths={[10, 10, 10, 10, 10]} rarity="common" cardart="/images/cards/cardart_TD04.png" abilities={[
    "내 턴 시작 시, *주변의* 아군 유닛들이 전방의 첫 번째 적에게 *1 데미지*를 *입히게* 만듭니다",
    "내 턴 시작 시, *주변의* 아군 유닛들이 전방의 첫 번째 적에게 *1 데미지*를 *입히게* 만듭니다",
    "내 턴 시작 시, *주변의* 아군 유닛들이 전방의 첫 번째 적에게 *1 데미지*를 *입히게* 만듭니다",
    "내 턴 시작 시, *주변의* 아군 유닛들이 전방의 첫 번째 적에게 *1 데미지*를 *입히게* 만듭니다",
    "내 턴 시작 시, *주변의* 아군 유닛들이 전방의 첫 번째 적에게 *1 데미지*를 *입히게* 만듭니다"
]} />

다음 난투들은 눈싸움 난투입니다.

  - 12월 21일 캐주얼 난투
  - 12월 28일 워리어 난투
  - 1월 4일 얼티메이트 난투

각각의 눈싸움 난투에서 6번째 업적을 달성하면 특별 크리스마스 아바타를 획득하실 수 있습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/8662a5ad89c0c5e175900eac15f9e510b7e2e3a5-1920x672.png#screenshot" />
</FlexibleList>

마지막으로 12월 21일에 시작하는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%). 다음은 감소한 입장료입니다.

<DiscountedBrawl />

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 12월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 12월 1일 오후 4시
  - **크리스마스 이벤트**: 12월 21일 오후 4시 ~ 1월 1일 오후 4시
  - **크리스마스 선물 코드**: 12월 21일 오후 4시 ~ 12월 27일 오후 4시
  - **저렴해진 난투**: 12월 21일 오후 4시
  - **캐주얼 눈싸움 난투**: 12월 21일 오후 4시
  - **워리어 눈싸움 난투**: 12월 28일 오후 4시
  - **얼티메이트 눈싸움 난투**: 1월 4일 오후 4시
  - **크리스마스 코인 2배**: 12월 24일 오후 4시 ~ 12월 28일 오후 4시
  - **크리스마스 카드 추가 지급**: 12월 21일 오후 4시 ~ 12월 27일 오후 4시

모든 시간은 한국 표준시 기준입니다.