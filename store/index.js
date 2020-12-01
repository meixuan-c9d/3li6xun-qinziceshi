export const state = () => ({

  // green #85CCBE
  // purple #A381BA

  backgroundColor: '#85CCBE',

  // parentGenderHeaderText: '介绍一下你和孩子',
  parentGenderHeaderText: '你的身份是？',
  
  // childGenderHeaderText: '介绍一下你和孩子',
  childGenderHeaderText: '你的孩子是？',

  // childAgeRangeHeaderText: '介绍一下你和孩子',
  childAgeRangeHeaderText: '你的孩子正处在<br>于哪个年龄段',

  quickMindfulHeaderText: '接下来请跟着<br>完成以下三个步骤',
  quickMindfulStepText: [
    '深呼吸<br>静下心',
    '闭上眼睛',
    '在脑海里<br>还原出孩子<br>的样貌'
  ],
  cardPickingHeaderText: '凭直觉选择一张卡牌',
  spotPickingHeaderText: '画面中你第一眼<br>看中的是哪一块区域',

  isPrefaceShown: 1,
  isParentGenderShown: 0,
  isChildGenderShown: 0,
  isChildAgeRangeShown: 0,
  isQuickMindfulShown: 0,
  isCardPickingShown: 0,
  isSpotPickingShown: 0,
  isAssessingShown: 0,
  isAssessmentShown: 0,

  parentGender: '',
  childGender: '',
  childAgeRange: '',

  childAgeRangeChoiceList: [
    {
      text: '0-6岁',
      value: 1
    },
    {
      text: '7-12岁',
      value: 2
    },
    {
      text: '12-18岁',
      value: 3
    },
    {
      text: '18岁以上',
      value: 4
    },
  ],

  cardPicked: null,
  cardList: ['I', 'II', 'III', 'IV'],

  spotPicked: null

})

export const mutations = {

  setBackgroundColor(state, { value }) {
    state.backgroundColor = value
  },


  setIsPrefaceShown(state, { value }) {
    state.isPrefaceShown = value
  },
  setIsParentGenderShown(state, { value }) {
    state.isParentGenderShown = value
  },
  setIsChildGenderShown(state, { value }) {
    state.isChildGenderShown = value
  },
  setIsChildAgeRangeShown(state, { value }) {
    state.isChildAgeRangeShown = value
  },
  setIsQuickMindfulShown(state, { value }) {
    state.isQuickMindfulShown = value
  },
  setIsCardPickingShown(state, { value }) {
    state.isCardPickingShown = value
  },
  setIsSpotPickingShown(state, { value }) {
    state.isSpotPickingShown = value
  },
  setIsAssessingShown(state, { value }) {
    state.isAssessingShown = value
  },
  setIsAssessmentShown(state, { value }) {
    state.isAssessmentShown = value
  },

  setParentGender(state, { value }) {
    state.parentGender = value
  },
  setChildGender(state, { value }) {
    state.childGender = value
  },
  setChildAgeRange(state, { value }) {
    state.childAgeRange = value
  },
  setCardPicked(state, { value }) {
    state.cardPicked = value
  },
  setSpotPicked(state, { value }) {
    state.spotPicked = value
  }
}