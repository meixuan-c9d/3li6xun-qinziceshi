<template>
  <article class="childGender">
    <header class="childGender__header">{{ childGenderHeaderText }}</header>
    <section class="childGender__figureParentSelected">
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

    <section class="childGender__bubbleSelection">
      <div>
        <article 
          @click="selectGirl"
          class="childGender__bubble childGender__bubble--daughter"
          :class="{'childGender__bubble--daughterSelected': childGender === 'f'}"
          ref="bubbleGirl"
        >
          <div ref="bubbleDaughter">
            <span
              v-show="childGender !== 'f'" 
              class="childGender__bubbleOutline"
            >
            </span>
            <span 
              v-show="childGender !== 'f'" 
              class="childGender__bubbleText"
            >
              小公主
            </span>

            <span
              v-show="childGender === 'f'"
              class="childGender__bubbleOutline childGender__bubbleOutline--highlighted"
            >
            </span>
            <span 
              v-show="childGender === 'f'" 
              class="childGender__bubbleText childGender__bubbleText--highlighted"
            >
              小公主
            </span>
          </div>
        </article>

        <article 
          @click="selectBoy"
          class="childGender__bubble childGender__bubble--son"
          :class="{'childGender__bubble--sonSelected': childGender === 'm'}"
          ref="bubbleSon"
        >
          <div ref="bubbleSon">
            <span
              v-show="childGender !== 'm'" 
              class="childGender__bubbleOutline"
            >
            </span>
            <span 
              v-show="childGender !== 'm'" 
              class="childGender__bubbleText"
            >
              小王子
            </span>

            <span
              v-show="childGender === 'm'"
              class="childGender__bubbleOutline childGender__bubbleOutline--highlighted"
            >
            </span>
            <span 
              v-show="childGender === 'm'" 
              class="childGender__bubbleText childGender__bubbleText--highlighted"
            >
              小王子
            </span>
          </div>
        </article>

      </div>
    </section>

    <section class="childGender__figureSelection">
      <figure 
        @click="selectGirl"
        class="childGender__figure childGender__figure--girl"
        ref="figureDaughter"
      >
        <picture>
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
      </figure>
      <figure 
        @click="selectBoy"
        class="childGender__figure childGender__figure--boy"
        ref="figureSon"
      >
        <picture>
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
      </figure>
    </section>

    <!-- <AppButtonProceed
      ref="buttonProceed"
      select-tip
      :text="buttonProceedText"
      :is-symbol="buttonProceedIsSymbol"
    /> -->

    <TheGuideSelect />

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
      // buttonProceedText: '你的孩子是？',
      // buttonProceedIsSymbol: false
    }
  },
  computed: {
    ...mapState([
      'parentGender',
      'childGender',
      'childGenderHeaderText'
    ])
  },
  methods: {
    ...mapMutations([
      'setChildGender',
      'setIsChildGenderShown',
      'setIsChildAgeRangeShown',

      'setBackgroundColor'
    ]),
    selectGirl() {
      if (this.childGender) return

      this.setBackgroundColor({ value: '#DD99A9' })
      this.setChildGender({ value: 'f'})
      this.$analytics('child-gender/f')
      // this.buttonProceedIsSymbol = true
      this.$nextTick(() => {
        const timelineSelectDaughter = gsap.timeline({
          onComplete: () => {
            this.setIsChildGenderShown({ value: false })
            this.setIsChildAgeRangeShown({ value: true })
          }
        })
        const timelineSelectDaughterBubble = gsap.timeline()
        const timelineSelectDaughterFigureSwapIn = gsap.timeline()
        // const timelineSelectDaughterButtonProceed = gsap.timeline()

        timelineSelectDaughterBubble
          .to(this.$refs.bubbleSon, .3, {
            filter: 'blur(2px)',
            autoAlpha: 0,
            yPercent: -5
          })
        
        timelineSelectDaughterFigureSwapIn
          .to(this.$refs.figureDaughter, 1.25, {
            xPercent: 10,
            yPercent: 7.5,
            scale: 1.1,
            ease: "expo.out"
          })
          .to(this.$refs.figureSon, 1.25, {
            scale: .8,
            autoAlpha: .5,
            yPercent: -20,
            ease: "expo.out"
          }, '-=1.25')
        
        // timelineSelectDaughterButtonProceed
        //   .fromTo(this.$refs.buttonProceed.$el.querySelector('[data-symbol]'), .75, {
        //     scale: .5,
        //   }, {
        //     scale: 1,
        //     ease: "elastic.out(1, 0.3)"
        //   })

        timelineSelectDaughter
          .add(timelineSelectDaughterBubble)
          .add(timelineSelectDaughterFigureSwapIn, '-=.15')
          // .add(timelineSelectDaughterButtonProceed, '0')
      })
    },
    selectBoy() {
      if (this.childGender) return

      this.setBackgroundColor({ value: '#85ACC8' })
      this.setChildGender({ value: 'm'})
      this.$analytics('child-gender/m')
      // this.buttonProceedIsSymbol = true
      this.$nextTick(() => {
        const timelineSelectSon = gsap.timeline({
          onComplete: () => {
            this.setIsChildGenderShown({ value: false })
            this.setIsChildAgeRangeShown({ value: true })
          }
        })
        const timelineSelectSonBubble = gsap.timeline()
        const timelineSelectSonFigureSwapIn = gsap.timeline()
        // const timelineSelectSonButtonProceed = gsap.timeline()

        timelineSelectSonBubble
          .to(this.$refs.bubbleDaughter, .3, {
            filter: 'blur(2px)',
            autoAlpha: 0,
            yPercent: -5
          })
        
        timelineSelectSonFigureSwapIn
          .to(this.$refs.figureSon, 1.25, {
            xPercent: -12.5,
            yPercent: 7.5,
            scale: 1.2,
            ease: "expo.out"
          })
          .to(this.$refs.figureDaughter, 1.25, {
            scale: .9,
            autoAlpha: .5,
            yPercent: -15,
            ease: "expo.out"
          }, '-=1.25')
        
        // timelineSelectSonButtonProceed
        //   .fromTo(this.$refs.buttonProceed.$el.querySelector('[class*="--symbol"]'), .75, {
        //     scale: .5,
        //   }, {
        //     scale: 1,
        //     ease: "elastic.out(1, 0.3)"
        //   })

        timelineSelectSon
          .add(timelineSelectSonBubble)
          .add(timelineSelectSonFigureSwapIn, '-=.15')
          // .add(timelineSelectSonButtonProceed, '0')
      })
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
.childGender {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__header {
    font-size: 30px;
    text-align: center;
    color: #fff;
    /* margin-top: 6.232%; */
    margin-top: 10.232%;
  }

  &__figureParentSelected {
    --width: 46.459%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / .603);
    /* top: 14.139%; */
    top: 16.139%;
    position: absolute;
    right: -3.12%;
    
    > picture {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    
  }

  &__bubbleSelection {
    --width: 60.4%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 3.521);
    position: absolute;
    /* top: 25.894%; */
    top: 30.894%;
    left: 4.674%;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  &__bubble {
    width: 47.66%;
    height: 100%;
    position: relative;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__bubbleOutline {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ^&__bubble--daughter & {
      background: url('~assets/parent-gender/bubble-outline-green-left.svg') no-repeat center;
      background-size: contain;
      &--highlighted {
        background: url('~assets/child-gender/bubble-outline-green-left-highlighted.svg') no-repeat center;
        background-size: contain;
      }
    }

    ^&__bubble--son & {
      background: url('~assets/parent-gender/bubble-outline-green-right.svg') no-repeat center;
        background-size: contain;
      &--highlighted {
        background: url('~assets/child-gender/bubble-outline-green-right-highlighted.svg') no-repeat center;
        background-size: contain;
      }
    }

  }

  &__bubbleText {
    position: relative;
    z-index: 1;
    font-size: 20px;
    color: #397468;
    font-weight: 600;
    top: -7.5%;

    ^&__bubble--daughterSelected & {
      color: #A74D63;
    }

    ^&__bubble--sonSelected & {
      color: #3E7CA8;
    }
    
  }

  &__figureSelection {
    --width: 67.998%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1.326);
    position: absolute;
    /* top: 38.671%; */
    top: 43.671%;
    left: 4.674%;
    display: flex;
  }
  &__figure {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    &--girl {
      left: 0;

    }
    &--boy {
      right: 0;
    }
  }

}
</style>