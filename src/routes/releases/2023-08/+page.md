---
title: 2023 8월 업데이트
publishedAt: 2023/08
headerImage: https://clan.cloudflare.steamstatic.com/images/32724087/46842f26239caf78460901fc64468d9e2fdc3c37.png
isHeaderShadowNeeded: true
summary: 8월에는 신규 카드 2장이 추가되고, 일부 밸런스가 조정됩니다!
source: https://stormbound-kitty.com/releases/08-2023
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
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다.

  - <CardLink target="대지의 신" />: 체력 <Old>5/6/7/9/11</Old> → 6/7/8/10/12, 체력 획득량 <Old>3/3/3/4/4</Old> → 4/4/4/5/5
  - <CardLink target="시체 소환사" />: 체력 <Old>3/4/4/5/6</Old> → 4/5/5/6/7
  - <CardLink target="전선 기술자" />: 체력 <Old>2/3/4/5/6</Old> → 3/4/5/5/6
  - <CardLink target="수리, 생명의 군주" />: 체력 부여량 <Old>3/4/5/6/7</Old> → 1/2/3/4/5
  - <CardLink target="잊혀진 영혼" />: 이동 속도 <Old>1</Old> → 0

<Comment>

수리, 생명의 군주와 잊혀진 영혼을 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>
<Comment>

능력이 적에게도 발동하는 버전의 수리가 오랫동안 테스트됐지만 재미가 지나치게 떨어진다는 이유로 무산됐다고 합니다. 잊혀진 영혼의 이동 속도 감소는 너프의 첫 번째 단계입니다. 추후에 4 마나로 너프될 가능성이 있으며 현재는 적절한 시기가 아니라고 언급됐습니다. 또한 대지의 신은 현재 게임 승률에 영향을 미치는 모든 카드 중 하위 5%에 위치해 있다고 합니다.

</Comment>

## 신규 카드
8월에는 두 장의 신규 카드가 추가됩니다. 바로 그림자 레이븐 고대인과 중립 나이트 엘더입니다!

<Card type="unit" faction="shadowfen" name="선택받은 구원자" unitType="레이븐 고대인" cost={5} strengths={[4, 5, 6, 7, 8]} movement={1} rarity="epic" cardart="/images/cards/cardart_U418.png" abilities={[
    "이동하기 전, *3 체력* 이하의 *주변의* 무작위 적 유닛 하나를 *전향*시킵니다. 그 유닛을 내 기지와 *인접한* 무작위 타일로 *순간이동*시킵니다",
    "이동하기 전, *4 체력* 이하의 *주변의* 무작위 적 유닛 하나를 *전향*시킵니다. 그 유닛을 내 기지와 *인접한* 무작위 타일로 *순간이동*시킵니다",
    "이동하기 전, *5 체력* 이하의 *주변의* 무작위 적 유닛 하나를 *전향*시킵니다. 그 유닛을 내 기지와 *인접한* 무작위 타일로 *순간이동*시킵니다",
    "이동하기 전, *6 체력* 이하의 *주변의* 무작위 적 유닛 하나를 *전향*시킵니다. 그 유닛을 내 기지와 *인접한* 무작위 타일로 *순간이동*시킵니다",
    "이동하기 전, *7 체력* 이하의 *주변의* 무작위 적 유닛 하나를 *전향*시킵니다. 그 유닛을 내 기지와 *인접한* 무작위 타일로 *순간이동*시킵니다"
]} />
<Card type="unit" faction="neutral" name="은퇴한 지휘관" unitType="나이트 엘더" cost={5} strengths={[5, 6, 7, 8, 9]} movement={1} rarity="rare" cardart="/images/cards/cardart_U073.png" abilities={[
    "데미지를 견뎌낸 후, 아군 나이트마다 그에 *인접한* 무작위 타일 하나에 *2 체력* 나이트를 *소환*합니다",
    "데미지를 견뎌낸 후, 아군 나이트마다 그에 *인접한* 무작위 타일 하나에 *3 체력* 나이트를 *소환*합니다",
    "데미지를 견뎌낸 후, 아군 나이트마다 그에 *인접한* 무작위 타일 하나에 *4 체력* 나이트를 *소환*합니다",
    "데미지를 견뎌낸 후, 아군 나이트마다 그에 *인접한* 무작위 타일 하나에 *5 체력* 나이트를 *소환*합니다",
    "데미지를 견뎌낸 후, 아군 나이트마다 그에 *인접한* 무작위 타일 하나에 *6 체력* 나이트를 *소환*합니다"
]} />

<Comment>

은퇴한 지휘관의 능력은 자기 자신도 발동 대상에 포함시키지만 아직 테스트 중이므로 변경될 가능성이 있다고 언급했습니다. 또한 펠린 엘더가 개발 중이라고 하며, 현재 이름은 광기의 늙은 고양이(Lunatic Grimalkins)입니다. 혼란 관련된 능력은 아니며 데미지를 입은 뒤 스스로가 공격하도록 강제하는 식일 것이라고 합니다.

</Comment>

각 신규 카드마다 $9.99로 구매할 수 있는 특별 상품이 판매될 예정입니다. 이 상품들은 여러 번 구매할 수 있으며, 플랫폼에 따라 가격이 상이할 수 있습니다.

  - <CardLink target="선택받은 구원자" /> 팩: 카드 3장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석
  - <CardLink target="은퇴한 지휘관" /> 팩: 카드 5장, <Icon type="coin" /> 750 코인, <Icon type="stone" /> 5 합성석

## 신규 난투
저번 달과 같이 2장의 신규 카드를 위한 신규 난투들이 추가됩니다. 저희는 이러한 방식이 신규 카드를 본격적으로 모으기 전에 시도해보고 즐길 수 있는 좋은 방식이라고 생각합니다.

신규 카드의 0 마나 버전이 덱에 자동으로 추가됩니다(즉 모든 덱이 13장). 신규 카드를 소유하고 있지 않거나 레벨을 올리지 않았다면 1레벨로, 레벨을 올렸다면 해당 레벨로 추가됩니다.

## UIUX 및 편의성 개선
8월 업데이트에 다음과 같은 편의성 개선이 포함됩니다.

  - 레벨 업 가능 여부를 기준으로 카드를 정렬할 수 있게 됩니다. 컬렉션 및 덱 수정 창에서 해당 카드 테두리에 추가적인 효과가 표시됩니다.
  - 메인 메뉴의 랭크전 버튼과 현재 랭크 표시가 조정됩니다.
  - 실력 향상에 도움이 되는 기본 규칙을 알려 주는 로딩 화면이 추가됩니다.
  - 메인 메뉴의 애니메이션이 조정됩니다.
  - VS 애니메이션과 인게임 아바타 위젯이 조정됩니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/f06d465d4166756f1773ab807bec053542c356c2-1080x1920.png#screenshot" />
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/ec79f28c2c75efdf482785456d447d9072eacb4f-1080x1920.png#screenshot" />
</FlexibleList>

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
밸런스 변경점은 8월 1일에 시즌이 초기화되면 적용됩니다. 신규 카드 2장과 편의성 개선은 이달 말에 추가될 예정입니다.

<CardLink target="은퇴한 지휘관" />의 카드아트는 출시될 때가 되면 공개됩니다.