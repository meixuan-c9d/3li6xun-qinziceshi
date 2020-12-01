<template>
  <article class="spotPicking">
    <header class="spotPicking__header" v-html="spotPickingHeaderText"></header>
    <div class="spotPicking__spotListWrapper">
      <transition
        @appear="whenSpotListAppears"
        :css="false"
      >
        <ul class="spotPicking__spotList">
          <li 
            v-for="(n, index) of 4"
            class="spotPicking__spotItem"
            @click.once="pickSpot(index)"
            ref="spotList"
          >
            <picture>
              <source 
                type="image/webp" 
                :data-srcset="require(`~/assets/spot-picking/${cardPicked}-${n-1}.webp`)" 
              />
              <img 
                :data-src="require(`~/assets/spot-picking/${cardPicked}-${n-1}.png`)"
                class="lazyload"
              />
            </picture>
            <picture 
              v-if="index === spotPicked"
              class="spotPicking__outlinePicked">
              <img 
                :data-src="require(`~/assets/spot-picking/outline-picked.svg`)"
                class="lazyload"
              />
            </picture>
          </li>
        </ul>
      </transition>
    </div>

    <!-- <transition
      @appear="whenButtonProceedAppears"
      :css="false"
    >
      <AppButtonProceed
        ref="buttonProceed"
        :text="buttonProceedText"
        :is-symbol="buttonProceedIsSymbol"
      />
    </transition> -->
    
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
      // buttonProceedText: '你的选择是？',
      // buttonProceedIsSymbol: false
    }
  },
  computed: {
    ...mapState([
      'spotPickingHeaderText',
      'cardPicked',
      'spotPicked'
    ]),
    spotListPicked() {
      return this.spotList
        .filter((spot, index) => index === this.spotPicked)
    }
  },
  methods: {
    ...mapMutations([
      'setBackgroundColor',
      'setSpotPicked',
      'setIsSpotPickingShown',
      'setIsAssessingShown'
    ]),

    whenSpotListAppears(el, done) {
      gsap.fromTo(el.children, .5, {
        scale: 5,
        autoAlpha: 0,
        rotate: () => {
          return gsap.utils.random(-55, 55)
        }
      }, {
        scale: 1,
        autoAlpha: 1,
        rotate: 0,
        stagger: .15,
        ease: 'expo.out',
        rotate: (index) => {
          return ({
            0: -1,
            1: 2,
            2: -2,
            3: 1
          })[index]
        },
        y: (index) => {
          return ({
            0: 0,
            1: 5,
            2: 0,
            3: 2.5
          })[index]
        }
      })
    },

    // whenButtonProceedAppears(el, done) {
    //   gsap.fromTo(el, .75, {
    //     scale: .5,
    //     autoAlpha: 0,
    //   }, {  
    //     scale: 1,
    //     autoAlpha: 1,
    //     delay: 1,
    //     ease: "elastic.out(1, 0.6)"
    //   })
    // },

    pickSpot(spotIndexPicked) {


      this.setSpotPicked({ value: spotIndexPicked })

      const timelineSpotPicked = gsap.timeline({
        onComplete: () => {
          // this.buttonProceedIsSymbol = true
          //   this.$nextTick(() => {
          //     const timelineButtonProceed = gsap.timeline()
          //     timelineButtonProceed
          //       .fromTo(this.$refs.buttonProceed.$el.querySelector('[data-symbol]'), .75, {
          //         scale: .5,
          //       }, {
          //         scale: 1,
          //         ease: "elastic.out(1, 0.3)",
          //         onComplete: this._finalizeThePageSpotPicking
          //       })
          //   })
          setTimeout(() => {
            this._finalizeThePageSpotPicking()
          }, 250)
          
        }
      })
      const timelineSpotPickedFadeOutUnpicked = gsap.timeline()
            
      const arraySpotListClone = [...this.$refs.spotList]
      arraySpotListClone.splice(spotIndexPicked, 1)
      const elListUnpicked = arraySpotListClone

      const zIndexElevated = 10

      timelineSpotPickedFadeOutUnpicked
        .to(elListUnpicked, .5, {
          autoAlpha: .5,
          rotate: (...args) => {
            return gsap.utils.random(-5, 5)
          },
          stagger: .15
        })

      timelineSpotPicked
        .add(timelineSpotPickedFadeOutUnpicked)
    },

    _finalizeThePageSpotPicking() {
      this.setIsSpotPickingShown({ value: false })
      this.setIsAssessingShown({ value: true })
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
.spotPicking {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &__header {
    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-top: 6.232%;
    line-height: 1.33;
  }

  &__spotListWrapper {
    width: 80.17%;
    /* margin: 6.799% auto 0; */
    margin: 15% auto 0;
    transform: scale(1.125);
  }

  &__spotList {
    display: flex;
    flex-wrap: wrap;
    margin: -3.453%;
  }
  &__spotItem {
    /** 608 */
    --width: 43.092%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / .766);
    position: relative;
    margin: 3.453%;
    > picture {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    visibility: hidden;
    opacity: 0;
  }


}
</style>