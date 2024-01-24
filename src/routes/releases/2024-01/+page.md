---
title: 2024 1월 업데이트
publishedAt: 2024/01
headerImage: https://cdn.sanity.io/images/5hlpazgd/production/2b534b4166167136dd8860bc3cf15ab146f67057-1920x622.png
isHeaderShadowNeeded: true
summary: 1월에는 일부 밸런스가 조정됩니다!
source: https://stormbound-kitty.com/releases/01-2024
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

  - <CardLink target="천사 같은 티카" />: 체력 <Old>2/3/4/5/6</Old> → <New type="nerf">1/2/3/4/5</New>
  - <CardLink target="은퇴한 지휘관" />: 소환하는 나이트 체력 <Old>2/3/4/5/6</Old> → <New type="nerf">1/2/3/4/5</New>
  - <CardLink target="눈더미" />: 체력 <Old>6/7/9/11/13</Old> → <New type="nerf">5/6/7/9/11</New>
  - <CardLink target="오르곤 착취자" />: 다른 아군 고대인 및 프로스틀링 하나마다 감소하는 마나 소모량 <Old>1</Old> → <New type="buff">2</New>
  - <CardLink target="영혼 파괴자" />: 체력 <Old>5/6/7/8/10</Old> → <New type="buff">6/7/8/9/11</New>
  - <CardLink target="유한 반복자" />: 소환하는 컨스트럭트 체력 <Old>1/1/2/2/3</Old> → <New type="buff">1/2/3/3/4</New>

<Comment>

천사 같은 티카, 은퇴한 지휘관과 눈더미를 소유하고 계신 분들에게는 코인 및 합성석 보상이 지급됩니다. 보상은 카드 레벨과 희귀도에 따라 달라집니다.

  - <Icon type="common" /> 일반 카드: <Icon type="coin" /> 10 코인(레벨 2), <Icon type="coin" /> 20 코인 및 <Icon type="stone" /> 1 합성석(레벨 3), <Icon type="coin" /> 50 코인 및 <Icon type="stone" /> 2 합성석(레벨 4), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 5 합성석(레벨 5)
  - <Icon type="rare" /> 레어 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 30 코인 및 <Icon type="stone" /> 3 합성석(레벨 3), <Icon type="coin" /> 90 코인 및 <Icon type="stone" /> 7 합성석(레벨 4), <Icon type="coin" /> 190 코인 및 <Icon type="stone" /> 10 합성석(레벨 5)
  - <Icon type="epic" /> 에픽 카드: <Icon type="coin" /> 15 코인 및 <Icon type="stone" /> 2 합성석(레벨 2), <Icon type="coin" /> 40 코인 및 <Icon type="stone" /> 5 합성석(레벨 3), <Icon type="coin" /> 120 코인 및 <Icon type="stone" /> 10 합성석(레벨 4), <Icon type="coin" /> 250 코인 및 <Icon type="stone" /> 20 합성석(레벨 5)

</Comment>

## 신규 카드
지난 몇 달 동안, 저희는 카드 출시 속도를 늦추고 여러 업데이트의 개발 및 게임을 더욱 발전시키기 위한 기획을 준비하는 데 집중했습니다.

그와 동시에, 저희는 모든 왕국과 유닛 종족의 카드 수를 동일하게 맞춰 어느 한쪽으로도 치우치지 않은 공평한 환경을 만들고자 노력했습니다. 마침내 <CardLink target="광기의 상아" />를 출시하면서 해당 목표를 성공적으로 달성하게 되었습니다!

그럼 다음에는 무엇이 기다릴까요? 새로운 카드가 곧 출시될 예정이므로 앞으로의 업데이트를 기대해 주세요!

신규 펠린 <CardLink target="광기의 상아" />가 게임에 곧 등장할 예정입니다!

<Card type="unit" faction="neutral" name="광기의 상아" cost={4} strengths={[5, 6, 7, 8, 9]} movement={1} rarity="rare" cardart="/images/cards/cardart_U074.png" abilities={[
    "데미지를 견뎌낸 후, 자신이 전방의 첫 번째 적 유닛을 공격하도록 *강제*합니다",
    "데미지를 견뎌낸 후, 자신이 전방의 첫 번째 적 유닛을 공격하도록 *강제*합니다",
    "데미지를 견뎌낸 후, 자신이 전방의 첫 번째 적 유닛을 공격하도록 *강제*합니다",
    "데미지를 견뎌낸 후, 자신이 전방의 첫 번째 적 유닛을 공격하도록 *강제*합니다",
    "데미지를 견뎌낸 후, 자신이 전방의 첫 번째 적 유닛을 공격하도록 *강제*합니다"
]} />

<Comment>

**역주**: 광기의 상아는 기존 4 마나 1 이동 8 체력의 공식을 벗어나 9 체력으로 출시되었는데요. 이는 상아가 4 마나 1 이동 카드들에게 9 체력이 적합한지 알아보는 일종의 테스트이기 떄문이며, 다른 4 마나 1 이동 카드들도 곧 아주 면밀히 살펴볼 예정이라고 합니다. 만약 해당 카드들이 버프된다면 미드레인지 덱이 어그로에 대항할 수 있는 더 나은 도구가 주어지는 것이라고 언급하기도 했습니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://media.discordapp.net/attachments/815214884920098817/1199701178544558100/image.png#screenshot" />
    <img alt="스크린샷" src="https://media.discordapp.net/attachments/815214884920098817/1199701664572129340/image.png#screenshot" />
</FlexibleList>

능력 설명에서 이동 관련 부분이 암시적으로 제시되고 있어 해석이 모호할 수 있는데요. 상아의 능력이 발동된 이 상황에서 상아는 두 타일 앞에 있는 3 체력 펠린을 공격하기 위해 이동합니다. 이 과정에서 사진에 나와 있듯 여러 타일을 이동하는 것이 가능하며, 능력이 여러 번 발동하는 것 또한 가능합니다.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://media.discordapp.net/attachments/815214884920098817/1199702850297663538/image.png#screenshot" />
</FlexibleList>

그렇기 때문에 상황만 맞는다면 엘로스처럼 내 기지에서 상대 기지까지 단숨에 이동할 수 있습니다.

</Comment>

## 사육제
현재 진행 중인 사육제 행사들을 기념하기 위해, 올해부터 아름다운 새 전통을 시작하려고 합니다.

주말 내내 진행되는 코인 두 배 이벤트와 상점에 추가된 굉장한 특별 상품들을 만나 보세요. **1월 26일부터 1월 29일까지 획득하는 코인이 두 배가 됩니다.**

<FlexibleList allowOverflow >
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/872e4f0fac9782f66c4243177e9dd1ff93451c4f-1500x1102.png#landscape" width="70%" />
</FlexibleList>

## 상점 및 경제 변경
**스톰바운드의 경제 및 진행 속도와 관련해 계획된 변경 사항 중 첫 번째가 이번 달에 적용됩니다.**

이제부터 **상점에서 구매할 수 있는 모든 고서**(겸손의 책과 고결의 책 제외)**에서 지급되는 카드의 양이 영구적으로 한 장 증가합니다.** 또한 이제부터 **하루에 등장하는 특별 고서**(유닛 종족, 카드 유형 및 혼돈의 책)**의 수가 하나에서 두 개로 늘어납니다.** 다음 변경점들도 기대해 주세요!

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/653b5095e21f4376ada242512e28708ff2df5467-1920x1080.png#landscape" />
</FlexibleList>

## 게임 속도
**지금부터 스톰바운드 게임플레이 속도가 약 17% 빨라집니다.** 왜 굳이 17%인지 궁금하신가요? 내부 테스트를 거친 결과, 해당 수치가 스톰바운드의 가장 중요한 요소를 유지하면서도 게임을 더욱 즐겁게 만드는 최적의 속도라고 판단했기 때문입니다.

**이 변경점은 게임이 업데이트된 이후**부터 적용된다는 점을 알려드립니다. **1월 25일** 점검 이후부터 모든 플레이어들에게 적용됩니다.

현재 적용된 수치는 추후 소폭 변경될 수 있습니다.

<Comment>

**역주**: Steam 및 안드로이드 버전의 경우 이미 속도 변경이 적용되어 있습니다. 가속된 부분은 게임플레이뿐만이 아니라 고서를 여는 애니메이션, 카드를 구매하는 애니메이션 등 게임 전체가 해당된다고 합니다. 다만 턴 타이머의 경우 줄어들지 않고 기존 그대로이므로 한 턴에 사용할 수 있는 시간이 늘어난 것이라고 볼 수 있습니다.

</Comment>

## 계정 생성 변경
**지금부터 더 이상 Kongregate를 사용해 새로운 스톰바운드 계정을 생성할 수 없습니다.**

이미 Kongregate를 통해 계정을 생성하셨거나 병합하는 과정을 거치셨다면 계속해서 Kongregate를 통해 로그인하실 수 있습니다. 보다 원활한 플레이 경험을 위해, 현재 사용 중이신 계정을 Google 또는 Apple과 연동하는 것을 권장해 드립니다. **환경 설정**에서 **"로그인 방법 추가"** 버튼을 누른 뒤 Google 또는 Apple을 선택하세요.

<FlexibleList allowOverflow>
    <img alt="스크린샷" src="https://cdn.sanity.io/images/5hlpazgd/production/021edc6961aace3eb7b0393669268726fcd06f26-800x570.png" />
</FlexibleList>

계정 연동과 관련한 어려움을 겪으실 경우 contact@stormboundgames.com으로 메일을 보내 주세요.

## 자주 묻는 질문
### 언제 업데이트가 진행되나요?
아래에서 1월 업데이트에 대한 자세한 일정을 확인하시기 바랍니다.

  - **밸런스 변경점**: 2024년 1월 1일 오후 4시
  - **계정 생성 변경점**: 2024년 1월 24일
  - **상점 및 경제 변경점 - 모든 고서에서 카드 추가 지급**: 2024년 1월 24일
  - **상점 및 경제 변경점 - 하루에 특별 고서 두 종류**: 2024년 1월 25일 오후 4시
  - **게임 속도 변경점**: 2024년 1월 25일 오후 4시
  - **사육제 코인 두 배**: 2024년 1월 26일 오후 4시 ~ 1월 29일 오후 4시
  - **사육제 번들**: 2024년 1월 26일 오후 4시 ~ 2월 5일 오후 4시

모든 시간은 한국 표준시 기준입니다.