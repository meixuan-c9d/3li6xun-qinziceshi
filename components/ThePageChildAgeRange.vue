<template>
  <article class="childAgeRange">
    <header class="childAgeRange__header" v-html="childAgeRangeHeaderText"></header>
    <section class="childAgeRange__figure childAgeRange__figure--parent">
      <picture v-if="parentGender === 'm'">
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/child-gender/father.webp')" 
        />
        <img 
          :data-src="require('~/assets/child-gender/father.png')"
          :src="require('~/assets/child-gender/father.low.png')"
          class="lazyload"
        />
      </picture>
      <picture v-else>
        <source
          type="image/webp" 
          :data-srcset="require('~/assets/child-gender/mother.webp')" 
        />
        <img 
          :data-src="require('~/assets/child-gender/mother.png')"
          :src="require('~/assets/child-gender/mother.low.png')"
          class="lazyload"
        />
      </picture>
    </section>
    <section class="childAgeRange__figure childAgeRange__figure--child">
      <picture v-if="childGender === 'm'">
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/child-gender/male.webp')" 
        />
        <img 
          :data-src="require('~/assets/child-gender/male.png')"
          :src="require('~/assets/child-gender/male.low.png')"
          class="lazyload"
        />
      </picture>
      <picture v-else>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/child-gender/female.webp')" 
        />
        <img 
          :data-src="require('~/assets/child-gender/female.png')"
          :src="require('~/assets/child-gender/female.low.png')"
          class="lazyload"
        />
      </picture>
    </section>

    <section class="childAgeRange__choiceListWrapper">
      <transition
        @appear="whenChoiceListAppear"
        :css="false"
      >
        <ul class="childAgeRange__choiceList">
          <li 
            v-for="choiceItem of childAgeRangeChoiceList"
            class="childAgeRange__choiceItem"
            :class="{'childAgeRange__choiceItem--selected': childAgeRange === choiceItem.value}"
            @click="selectChildAgeRange(choiceItem.value, $event)"
            ref="choiceList"
          >
            <div>
              <span class="childAgeRange__choiceItemText">{{ choiceItem.text }}</span>
            </div>
            
          </li>
        </ul>  
      </transition>
      
    </section>

    <!-- <AppButtonProceed
      ref="buttonProceed"
      :text="buttonProceedText"
      :is-symbol="buttonProceedIsSymbol"
    /> -->

    <TheGuideSelect guide-text="点击按钮选择" />
    
  </article>
</template>

<script>
import "lazysizes"
import { gsap } from 'gsap'
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      // buttonProceedText: '你的孩子正处于哪个年龄段？',
      // buttonProceedIsSymbol: false
    }
  },
  computed: {
    ...mapState([
      'parentGender',
      'childGender',
      'childAgeRangeHeaderText',

      'childAgeRange',
      
      'childAgeRangeChoiceList'
    ])
  },
  methods: {
    ...mapMutations([
      'setChildAgeRange',
      'setIsChildAgeRangeShown',
      'setIsQuickMindfulShown',
      
      'setBackgroundColor'
    ]),
    whenChoiceListAppear(el, done) {
      gsap.fromTo(this.$refs.choiceList, 1.25, {
        scale: 0,
        autoAlpha: 0
        
      }, {
        autoAlpha: 1,
        stagger: .15,
        scale: 1,
        ease: "elastic.out(1, 0.35)"
      })
    },

    selectChildAgeRange(childAgeRange, e) {
      
      const currentTarget = e.currentTarget
      if (this.childAgeRange) return
      this.setChildAgeRange({ value: childAgeRange})
      this.$analytics(`child-age-range/${childAgeRange - 1}`)
      const elChoiceSelected = currentTarget.children[0]
      gsap.to(elChoiceSelected, .25, {
        scale: .85,
        ease: "expo.out",
        onComplete: () => {
          gsap.to(elChoiceSelected, .5, {
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            onComplete: () => {
              // this.buttonProceedIsSymbol = true
              // this.$nextTick(() => {
              //   const timelineButtonProceed = gsap.timeline()
              //   timelineButtonProceed
              //     .fromTo(this.$refs.buttonProceed.$el.querySelector('[data-symbol]'), .75, {
              //       scale: .5,
              //     }, {
              //       scale: 1,
              //       ease: "elastic.out(1, 0.3)",
              //       onComplete: this._finalizeThePageChildAgeRange
              //     })
              // })
              setTimeout(() => {
                this._finalizeThePageChildAgeRange()
              }, 1000)
              
              
            }
          })
          const indexChosen = this.$refs.choiceList.findIndex(el => el === currentTarget)
          const choiceListClone = this.$refs.choiceList
          choiceListClone.splice(indexChosen, 1)
          gsap.to(
            choiceListClone, 
            .35, 
            {
              delay: .25,
              stagger: .15,
              autoAlpha: 0,
              yPercent: 15
            }  
          )
          
        },
      })

    },

    _finalizeThePageChildAgeRange() {
      this.setIsChildAgeRangeShown({ value: false })
      this.setIsQuickMindfulShown({ value: true })
    }
  },

  mounted() {
    setTimeout(() => {
      this.setBackgroundColor({ value: '#85CCBE' })
    }, 600)
  }
}
</script>

<style scoped>  
.childAgeRange {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &__header {
    /* font-size: 30px; */
    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-top: 6.232%;
    line-height: 1.33;
  }

  &__figure {
    position: absolute;
    &--parent {
      --width: 44.476%;
      width: var(--width);
      height: 0;
      padding-bottom: calc(var(--width) / .604);
      /* top: 12.606%; */
      top: 15.606%;
      right: 23.654%;
    }
    &--child {
      --width: 32.436%;
      width: var(--width);
      height: 0;
      padding-bottom: calc(var(--width) / .664);
      /* top: 27.512%; */
      top: 30.512%;
      left: 26.262%;
    }
  }

  &__choiceListWrapper {
    position: absolute;
    --width: 84.703%;
    width: var(--width);
    left: 50%;
    transform: translateX(-50%);
    /* top: 60.477%; */
    top: 64.477%;
    /* overflow: hidden; */
  }
  &__choiceList {
    display: flex;
    flex-wrap: wrap;
    margin: -3.105% -3.571%;
  }

  --color-choice-selected: #336CC3;
  &__choiceItem {
    /* 644 */
    --width: 42.857%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 2.875);
    position: relative;
    margin: 3.105% 3.571%;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background: #68B4A5;
      border-radius: 24px;

      
    }

    &--selected {
      > div {
        background: #fff;
        border: 3px solid var(--color-choice-selected);
      }    
    }

  }
  &__choiceItemText {
    color: #fff;
    font-size: 18px;
    ^&__choiceItem--selected & {
      color: var(--color-choice-selected)
    }
  }
}
</style>