---
title: 2023 11월 업데이트
publishedAt: 2023/11
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/26106c4bb080b59079e421798884fd57f41ba58b-1920x622.png
isHeaderShadowNeeded: true
summary: 11월에는 일부 밸런스가 조정되고, 신규 카드 2장이 추가되며, 할로윈 및 블랙 프라이데이 이벤트가 진행됩니다!
source: https://stormbound-kitty.com/releases/11-2023
---

<script>
    import BadgedHeader from "$components/BadgedHeader.svelte";
    import Badge from "$components/Badge.svelte";
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

<div style="margin-top: 1em;" />
<Comment>

<Badge darkBackground>✨ 11/23 업데이트</Badge>
<br>
<a href="#신규-카드">신규 카드</a>, <a href="#블랙-프라이데이">블랙 프라이데이</a>, <a href="#자주-묻는-질문">자주 묻는 질문</a> 부분이 업데이트됐어요. 

</Comment>

## 밸런스 변경점
이번 업데이트에는 평소와 같이 일부 밸런스가 조정됩니다.

  - <CardLink target="야생 퓨마" />: 능력 발동 조건 <Old>적 없음</Old> → <New type="nerf">유닛 없음</New>
  - <CardLink target="반짝반짝 야옹이" />: 혼란 대상 <Old>자신</Old> → <New type="nerf">자신과 다른 아군 유닛</New>
  - <CardLink target="대드루이드 이어린" />: 체력 <Old>7/9/11/12/15</Old> → <New type="nerf">7/8/9/10/12</New>
  - <CardLink target="돌격의 호랑이" />: 마나 <Old>2</Old> → <New type="buff">3</New>, 체력 <Old>1/2/3/4/5</Old> → <New type="buff">3/4/5/6/7</New>
  - <CardLink target="용맹한 에드릭" />: 체력 <Old>3/4/5/6/7</Old> → <New type="buff">4/5/6/7/8</New>
  - <CardLink target="성장의 지도자" />: 체력 <Old>4/5/6/7/8</Old> → <New type="buff">5/6/7/8/9</New>

<Comment>

대드루이드 이어린과 야생 퓨마, 반짝반짝 야옹이를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)
  - <Icon type="legendary" /> 레전더리 카드: <Icon type="stone" /> 1 합성석(레벨 1), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 5 합성석(레벨 2), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 10 합성석(레벨 3), <Icon type="coin" /> 150 코인 및 <Icon type="stone" /> 20 합성석(레벨 4), <Icon type="coin" /> 300 코인 및 <Icon type="stone" /> 50 합성석(레벨 5)

</Comment>

<BadgedHeader heading="신규 카드" badge="✨ 업데이트된" />
신규 해적 엘더인 <CardLink target="주름진 장루원" />이 10월 27일에, 신규 드래곤 엘더인 <CardLink target="신성한 바리" />가 11월 24일에 출시됩니다.

<Card type="unit" faction="neutral" name="주름진 장루원" unitType="해적 엘더" cost={3} strengths={[3, 4, 5, 6, 7]} movement={0} rarity="epic" cardart="/images/cards/cardart_U075.png" abilities={[
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다",
    "데미지를 견뎌낸 후, 적 덱의 맨 위로부터 *마나가 1 적은* 일회성 *카드 복사본*을 *생성*해 덱에 추가합니다"
]} />

<Card type="unit" faction="neutral" name="신성한 바리" unitType="드래곤 엘더" cost={5} strengths={[5, 6, 7, 8, 9]} movement={1} rarity="epic" cardart="/images/cards/cardart_U076.png" abilities={[
    "데미지를 견뎌낸 후, 드래곤이 아닌 *주변의* 무작위 유닛에게 *2 데미지*를 *입힙니다*. 그 유닛이 사망하면 해당 타일에 *2 체력* 드래곤을 *소환*합니다",
    "데미지를 견뎌낸 후, 드래곤이 아닌 *주변의* 무작위 유닛에게 *3 데미지*를 *입힙니다*. 그 유닛이 사망하면 해당 타일에 *3 체력* 드래곤을 *소환*합니다",
    "데미지를 견뎌낸 후, 드래곤이 아닌 *주변의* 무작위 유닛에게 *4 데미지*를 *입힙니다*. 그 유닛이 사망하면 해당 타일에 *4 체력* 드래곤을 *소환*합니다",
    "데미지를 견뎌낸 후, 드래곤이 아닌 *주변의* 무작위 유닛에게 *5 데미지*를 *입힙니다*. 그 유닛이 사망하면 해당 타일에 *5 체력* 드래곤을 *소환*합니다",
    "데미지를 견뎌낸 후, 드래곤이 아닌 *주변의* 무작위 유닛에게 *6 데미지*를 *입힙니다*. 그 유닛이 사망하면 해당 타일에 *6 체력* 드래곤을 *소환*합니다"
]} />

<Comment>

**역주**: 모든 에픽 드래곤의 이름은 각자의 방식으로 스톰바운드 커뮤니티에 기여한 플레이어들의 닉네임을 따서 지어집니다. 예를 들어 <CardLink target="비단 물결" />의 영문명은 공식 디스코드 관리자인 Ayanami(綾波)의 이름을 그대로 영어로 옮긴 것이고, 한국어 번역 역시 두 한자의 훈독입니다. <CardLink target="혼돈의 불씨" /> 또한 스톰바운드의 본래 개발사였던 팔라딘 스튜디오의 직원 Emkaem의 이름을 따서 지어졌습니다.

<br>

그렇다면 <CardLink target="신성한 바리" /> 역시 누군가의 이름을 참고했을 겁니다. 그리고 그게 누구냐면...

### 바로 접니다!!!

영문명 **D**i**v**ine **R**e**p**tiles에는 제 닉네임인 DVRP의 모든 글자가 들어가 있습니다. 일러스트에도 한국의 느낌을 조금이나마 넣으려고 했다는데, 수염과 뿔이 한국 용의 것과 닮은 듯하기도 하고... 배색이 한국적인 것 같기도 하고... 그렇습니다.

<br>

이렇다 보니 한국어 번역명에도 어떻게든 DVRP와의 연관성을 욱여 넣고 싶어서 꽤 오래 고민했는데요. 너무 어려워서 포기했습니다. ㄷㅂㅇㅍ가 모두 들어가는 독별한 파룡(爬龍) 정도가 최선이었는데 너무 억지 느낌이 들더라고요. 대신 한국인 플레이어를 따서 만든 카드니 아주 한국적인 어휘를 써 보자는 방향으로 옮겨갔습니다.

<br>

Reptiles의 번역명으로 사용된 바리는 <Icon type="refer-comment" /> [용을 부르는 순우리말](https://encykorea.aks.ac.kr/Article/E0039355#section-2)입니다. 사실 한국민족문화대백과에서는 용을 지칭하는 말로서 소개하지만 좀 더 찾아 보면 이무기를 뜻하는 단어라는 해석도 여럿 보입니다. 이 때문에 써도 되나 고민했는데, 좀 더 생각해 보니 원문도 파충류라는 뜻의 Reptiles로 용을 우회해 지칭한 만큼 바리라는 단어가 꽤 잘 들어맞는 것 같아서 이대로 가기로 했습니다.

<br>

그냥 이 게임이 너무 좋아서 번역도 고치고, 그러다 진짜로 한국어 번역을 맡게 되고, 피드백도 꾸준히 보내다 몇 개는 게임에 적용도 되어 보고, 하다하다 이 사이트까지 만들다 보니 이젠 카드로 박제까지 되어 버렸네요. 크레딧에 DVRP 네 글자가 추가됐을 때도 뿌듯했는데 아예 카드까지 생겨 버리니까 기분이 정말 좋네요 ☺️😭 저는 나오면 바로 5렙 찍을 생각입니다. 여러분도 언젠가 얻으신다면 한번 써 보세요 🐉

</Comment>

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

<BadgedHeader heading="블랙 프라이데이" badge="✨ 업데이트된" />
블랙 프라이데이 이벤트는 11월 24일부터 11월 27일까지 진행됩니다. 먼저 이벤트 기간 동안 한 번만 구매할 수 있는 특별 상품들이 판매됩니다.

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

다음으로 이벤트가 종료될 때까지 고결의 책을 포함한 모든 책에서 추가 카드 한 장이 지급됩니다. 또한 코인을 구매하면 10~30%의 코인이, 루비를 구매하면 10~60%의 루비가 추가로 지급되며, 획득하는 모든 코인(퀘스트 제외) 및 일일 코인 획득 제한량이 2배로 증가합니다.

마지막으로 11월 23일에 진행되는 난투의 입장료가 50% 감소합니다(패스 보유 시 60%).

다음은 감소한 입장료입니다.

<DiscountedBrawl />

<BadgedHeader heading="자주 묻는 질문" badge="✨ 업데이트된" />
<h3 style="margin-top: 0;">언제 업데이트가 진행되나요?</h3>
아래에서 11월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **<CardLink target="주름진 장루원" /> 출시**: 10월 27일 오후 4시
  - **할로윈 이벤트**: 10월 30일 오후 4시 ~ 11월 6일 오후 4시
  - **할로윈 코드 사용 가능**: 10월 30일 오후 4시 ~ 11월 6일 오후 4시
  - **밸런스 변경점**: 11월 1일 오후 4시
  - **<CardLink target="주름진 장루원" /> 난투 (워리어)**: 11월 1일 오후 4시
  - **으스스한 호박 난투 (캐주얼)**: 11월 2일 오후 4시
  - **으스스한 호박 난투 (위리어)**: 11월 9일 오후 4시
  - **으스스한 호박 난투 (얼티메이트)**: 11월 16일 오후 4시
  - **블랙 프라이데이 이벤트**: 11월 24일 오후 4시 ~ 11월 27일 오후 4시
  - **<CardLink target="신성한 바리" /> 출시**: 11월 24일 오후 4시

모든 시간은 한국 표준시 기준입니다.

### 으스스한 호박의 능력이 어떻게 작동하나요?
해당 난투에서는 적 유닛이 사망하면 아군 으스스한 호박이 소환됩니다.

내 턴 시작 시, 보드에 있는 첫 번째 아군 으스스한 호박이 아군 호박의 개수를 확인합니다. 만약 3개 이상이라면 능력을 발동합니다. 능력이 발동하면 다른 모든 아군 으스스한 호박은 파괴되기 때문에, 첫 번째 으스스한 호박만이 능력을 발동할 수 있습니다.

기지에 3 데미지 이상을 입힐 수 있다는 점을 유념하세요. 한 턴에 더 많은 유닛을 처치할수록 소환되는 호박이 많아지며, 기지에 입히는 데미지 또한 증가합니다!
