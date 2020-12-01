<template>
  <article class="parentGender">
    <header class="parentGender__header">{{ parentGenderHeaderText }}</header>
    <section class="parentGender__bubbleSelection">
      <article 
        @click="selectFather"
        class="parentGender__bubble parentGender__bubble--father"
        :class="{'parentGender__bubble--fatherSelected': parentGender === 'm'}"
      >
        <div ref="bubbleFather">
          <span
            v-show="parentGender !== 'm'" 
            class="parentGender__bubbleOutline"
          >
          </span>
          <span 
            v-show="parentGender !== 'm'" 
            class="parentGender__bubbleText"
          >
            我是爸爸。
          </span>

          <span
            v-show="parentGender === 'm'"
            class="parentGender__bubbleOutline parentGender__bubbleOutline--highlighted"
          >
          </span>
          <span 
            v-show="parentGender === 'm'" 
            class="parentGender__bubbleText parentGender__bubbleText--highlighted"
          >
            我是爸爸。
          </span>
        </div>
      </article>
      
      <article
        @click="selectMother"
        class="parentGender__bubble parentGender__bubble--mother"
        :class="{'parentGender__bubble--motherSelected': parentGender === 'f'}"
      >
        <div ref="bubbleMother">
          <span 
            v-show="parentGender !== 'f'"
            class="parentGender__bubbleOutline"
          >
          </span>
          <span
            v-show="parentGender !== 'f'"
            class="parentGender__bubbleText"
          >
            我是妈妈。
          </span>
          <span 
            class="parentGender__bubbleOutline parentGender__bubbleOutline--highlighted"
            v-show="parentGender === 'f'"
          >
          </span>
          <span
            v-show="parentGender === 'f'"
            class="parentGender__bubbleText parentGender__bubbleText--highlighted"
          >
            我是妈妈。
          </span>
        </div>
      </article>
    </section>

    <section class="parentGender__figureSelection">
      <div>
        <article 
          @click="selectFather"
          class="parentGender__figure parentGender__figure--father"
          ref="figureFather"
        >
          <picture>
            <source 
              type="image/webp" 
              :data-srcset="require('~/assets/parent-gender/male.webp')" 
            />
            <img 
              :data-src="require('~/assets/parent-gender/male.png')"
              :src="require('~/assets/parent-gender/male.low.png')"
              class="lazyload"
            />
          </picture>
        </article>
        <article 
          @click="selectMother"
          class="parentGender__figure parentGender__figure--mother"
          ref="figureMother"
        >
          <picture>
            <source 
              type="image/webp" 
              :data-srcset="require('~/assets/parent-gender/female.webp')" 
            />
            <img 
              :data-src="require('~/assets/parent-gender/female.png')"
              :src="require('~/assets/parent-gender/female.low.png')"
              class="lazyload"
            />
          </picture>
        </article>
        <!-- <aside 
          class="parentGender__figureSelectionGuide"
          ref="figureSelectionGuide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 131"><g fill="#FFF" fill-rule="evenodd"><circle opacity=".3" cx="29" cy="29" r="29"/><circle opacity=".7" cx="29" cy="29" r="16"/><g fill-rule="nonzero" stroke="#4A8B7E" stroke-width="2"><path d="M97.615 66.234L94.24 49.037a8.459 8.459 0 00-3.577-5.398 8.421 8.421 0 00-6.34-1.275h0a8.436 8.436 0 00-5.387 3.585 8.474 8.474 0 00-1.273 6.355l-.38-1.936a8.459 8.459 0 00-3.577-5.399 8.421 8.421 0 00-6.34-1.274h0a8.436 8.436 0 00-5.386 3.585 8.474 8.474 0 00-1.273 6.355 8.459 8.459 0 00-3.575-5.408 8.421 8.421 0 00-6.345-1.28h0a8.436 8.436 0 00-5.385 3.587 8.474 8.474 0 00-1.272 6.354l-5.063-25.772a8.459 8.459 0 00-3.575-5.396 8.421 8.421 0 00-6.336-1.277h0a8.436 8.436 0 00-5.387 3.585 8.474 8.474 0 00-1.273 6.355l5.98 30.472c-.22.025-.44.05-.659.096a8.436 8.436 0 00-5.385 3.586 8.474 8.474 0 00-1.272 6.354l1.212 6.174 2.892 14.739.588 2.99a38.435 38.435 0 0016.25 24.495 38.266 38.266 0 0028.77 5.8h0c20.777-4.097 34.307-24.302 30.22-45.129l-3.477-17.726h0z"/><path d="M47.862 76.025L44.105 56.88c-.901-4.593 2.083-9.049 6.665-9.952 4.583-.903 9.028 2.088 9.928 6.682l3.747 19.161"/><path d="M31.28 79.295l-8.812-44.906c-.9-4.594 2.085-9.048 6.667-9.95 4.582-.903 9.027 2.09 9.927 6.682l8.8 44.904M64.445 72.771l-3.755-19.17c-.9-4.593 2.085-9.048 6.667-9.95 4.582-.902 9.027 2.09 9.927 6.683l3.757 19.145"/><path d="M81.03 69.487l-3.347-17.053c-.9-4.593 2.085-9.048 6.667-9.95 4.582-.903 9.027 2.09 9.927 6.683l3.347 17.053"/></g></g></svg>
        </aside> -->
      </div>
      
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
      buttonProceedText: '你的身份是？',
      buttonProceedIsSymbol: false
    }
  },
  computed: {
    ...mapState([
      'parentGender',
      'parentGenderHeaderText'
    ])
  },
  methods: {
    ...mapMutations([
      'setParentGender',
      'setIsParentGenderShown',
      'setIsChildGenderShown',

      'setBackgroundColor'
      
    ]),
    selectFather() {

      if (this.parentGender) return

      this.setParentGender({ value: 'm' })
      this.$analytics('parent-gender/m')

      // this.buttonProceedIsSymbol = true

      this.$nextTick(() => {

        const timelineSelectFather = gsap.timeline({
          onComplete: () => {
            // this.timelineGuide.kill()
            this.setIsParentGenderShown({ value: false })
            this.setIsChildGenderShown({ value: true })
          }
        })
        const timelineSelectFatherBubble = gsap.timeline()
        const timelineSelectFatherFigureSwapIn = gsap.timeline()
        // const timelineSelectFatherButtonProceed = gsap.timeline()

        timelineSelectFatherBubble
          .to(this.$refs.bubbleMother, .3, {
            filter: 'blur(2px)',
            autoAlpha: 0,
            yPercent: -5
          })

        timelineSelectFatherFigureSwapIn
          .to(this.$refs.figureFather, 1.25, {
            
            xPercent: 19.5,
            yPercent: -3.75,
            scale: 1.05,
            ease: "expo.out"
          })
          .to(this.$refs.figureMother, 1.25, {
            scale: .8,
            autoAlpha: .5,
            yPercent: -20,
            ease: "expo.out"
          }, '-=1.25')

        // timelineSelectFatherButtonProceed
        //   .fromTo(this.$refs.buttonProceed.$el.querySelector('[data-symbol]'), .75, {
        //     scale: .5,
        //   }, {
        //     scale: 1,
        //     ease: "elastic.out(1, 0.3)"
        //   })

        timelineSelectFather
          .add(timelineSelectFatherBubble)
          .add(timelineSelectFatherFigureSwapIn, '-=.15')
          // .add(timelineSelectFatherButtonProceed, '0')
      })
    },
    selectMother() {

      if (this.parentGender) return
      // this.setBackgroundColor({ value: '#A381BA' })
      this.setParentGender({ value: 'f'})
      this.$analytics('parent-gender/f')
      // this.buttonProceedIsSymbol = true
      this.$nextTick(() => {
        const timelineSelectMother = gsap.timeline({
          onComplete: () => {
            // this.timelineGuide.kill()
            this.setIsParentGenderShown({ value: false })
            this.setIsChildGenderShown({ value: true })
          }
        })
        const timelineSelectMotherBubble = gsap.timeline()
        const timelineSelectMotherFigureSwapIn = gsap.timeline()
        // const timelineSelectMotherButtonProceed = gsap.timeline()

        timelineSelectMotherBubble
          .to(this.$refs.bubbleFather, .3, {
            filter: 'blur(2px)',
            autoAlpha: 0,
            yPercent: -5
          })
        
        timelineSelectMotherFigureSwapIn
          .to(this.$refs.figureMother, 1.25, {
            xPercent: -19.5,
            yPercent: 3.75,
            scale: 1.05,
            ease: "expo.out"
          })
          .to(this.$refs.figureFather, 1.25, {
            scale: .8,
            autoAlpha: .5,
            yPercent: -20,
            ease: "expo.out"
            
          }, '-=1.25')

        // timelineSelectMotherButtonProceed
        //   .fromTo(this.$refs.buttonProceed.$el.querySelector('[class*="--symbol"]'), .75, {
        //     scale: .5,
        //   }, {
        //     scale: 1,
        //     ease: "elastic.out(1, 0.3)"
        //   })

        timelineSelectMother
          .add(timelineSelectMotherBubble)
          .add(timelineSelectMotherFigureSwapIn, '-=.15')
          // .add(timelineSelectMotherButtonProceed, '0')

      })
      
    }
  },
  mounted() {

    // const timelineGuide = gsap.timeline({  
    //   onComplete: () => {
    //     gsap.to(this.$refs.figureSelectionGuide, .35, {
    //       autoAlpha: 0,
    //       yPercent: 2.5,
    //       onComplete: () => {
    //         gsap.set(this.$refs.figureSelectionGuide, { display: 'none' })
    //       }
    //     })
    //   }
    // })
    
    
    // const timelineGuideAppear = gsap.timeline({})
    // timelineGuideAppear
    //   .fromTo(this.$refs.figureSelectionGuide, .75, {
    //     autoAlpha: 0
    //   }, { autoAlpha: .75})

    // const timelineGuideFlash = gsap.timeline({ 
    //   repeat: 7, 
    //   yoyo: true,
    // })
    // timelineGuideFlash
    //   .fromTo(
    //     this.$refs.figureSelectionGuide,
    //     .5,
    //     { scale: 1 , autoAlpha: .75},
    //     { scale: .75, autoAlpha:1, ease: "sine.in"}
    //   )
    
    // this.timelineGuide = timelineGuide
    // timelineGuide
    //   .add(timelineGuideAppear)
    //   .add(timelineGuideFlash)
    
  }
}
</script>
<style>
.parentGender {
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
  &__bubbleSelection {
    /* margin-top: 8.357%; */
    margin-top: 10.357%;
    display: flex;
    justify-content: center;
  }
  &__bubble {
    --width: 41.541%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1.684);
    position: relative;
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    margin: 0 1.912%;
  }
  
  &__bubbleOutline {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    ^&__bubble--father & {
      background: url('~assets/parent-gender/bubble-outline-green-left.svg') no-repeat center;
      background-size: contain;
      &--highlighted {
        background: url('~assets/parent-gender/bubble-outline-green-left-highlighted.svg') no-repeat center;
        background-size: contain;
      }
    }

    ^&__bubble--mother & {
      background: url('~assets/parent-gender/bubble-outline-green-right.svg') no-repeat center;
        background-size: contain;
      &--highlighted {
        background: url('~assets/parent-gender/bubble-outline-green-right-highlighted.svg') no-repeat center;
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

    ^&__bubble--fatherSelected & {
      color: #346CC4;
    }

    ^&__bubble--motherSelected & {
      color: #7C35AB;
    }
    
  }
  
  &__figureSelection {
    margin-top: 1.7%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    --width: 97.167%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1.261);

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    
  }
  &__figure {
    position: absolute;
    top: 0;
    --width: 56.268%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / .71);

    &--father {
      left: 0;
    }
    &--mother {
      right: 0;
    }
    > picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
  }

  &__figureSelectionGuide {
    --width: 14.868%;
    height: 0;
    width: var(--width);
    padding-bottom: calc(var(--width) / .785);
    top: 26%;
    left: 29%;
    position: absolute;
    visibility: hidden;
    opacity: 0;

  }
}
</style>