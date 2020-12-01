<template>
  <article class="cardPicking">
    <aside
      v-set-radiation-size
      class="cardPicking__radiation"
      ref="radiation"
    ></aside>
    <header class="cardPicking__header">{{ cardPickingHeaderText }}</header>
    <div class="cardPicking__cardListWrapper">
      <transition
        @appear="whenCardListAppears"
        :css="false"
      >
        <ul class="cardPicking__cardList">
          <li 
            v-for="(cardItem, index) of cardList"
            class="cardPicking__cardItem"
            @click.once="pickCard(index, $event)"
            ref="cardList"
          >
            <picture>
              <source 
                type="image/webp" 
                :data-srcset="require(`~/assets/card-picking/${cardItem}.webp`)" 
              />
              <img 
                :data-src="require(`~/assets/card-picking/${cardItem}.png`)"
                :src="require(`~/assets/card-picking/${cardItem}.low.png`)"
                class="lazyload"
              />
            </picture>
            <picture 
              v-if="index === cardPicked"
              class="cardPicking__outlinePicked">
              <img 
                :data-src="require(`~/assets/card-picking/outline-picked.svg`)"
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
        style="visibility: hidden; opacity: 0;"
        ref="buttonProceed"
        :text="buttonProceedText"
        :is-symbol="buttonProceedIsSymbol"
      />
    </transition> -->

    <div 
      class="cardPicking__float"
      ref="cardFloat"
    >
      <picture v-for="cardItem of cardListPicked">
        <source 
          type="image/webp" 
          :data-srcset="require(`~/assets/card-picking/${cardItem}.webp`)" 
        />
        <img 
          :data-src="require(`~/assets/card-picking/${cardItem}.png`)"
          :src="require(`~/assets/card-picking/${cardItem}.low.png`)"
          class="lazyload"
        />
      </picture>
      <picture class="cardPicking__outlinePicked">
        <img 
          :data-src="require(`~/assets/card-picking/outline-picked.svg`)"
          class="lazyload"
        />
      </picture>
    </div>
    
    
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
      'cardPickingHeaderText',
      'cardList',
      'cardPicked'
    ]),
    cardListPicked() {
      return this.cardList
        .filter((card, index) => index === this.cardPicked)
    }
  },
  methods: {
    ...mapMutations([
      'setBackgroundColor',
      'setCardPicked',
      'setIsCardPickingShown',
      'setIsSpotPickingShown'
    ]),

    whenCardListAppears(el, done) {
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
        ease: 'expo.out'
      })
    },

    // whenButtonProceedAppears(el, done) {
    //   gsap.fromTo(el, .75, {
    //     scale: .5,
    //     autoAlpha: 0,
    //   }, {  
    //     scale: 1,
    //     autoAlpha: 1,
    //     delay: 2,
    //     ease: "elastic.out(1, 0.6)"
    //   })
    // },

    pickCard(cardIndexPicked, e) {

      this.setCardPicked({ value: cardIndexPicked })

      const target = e.currentTarget
      const rectCardPicked = target.getBoundingClientRect()
      const first = {
       width: rectCardPicked.width,
       left: rectCardPicked.left,
       top: rectCardPicked.top
      }

      const rectCardFloat = this.$refs.cardFloat.getBoundingClientRect()
      const last = {
        width: rectCardFloat.width
      }

      const scaleFactor = first.width / last.width

      gsap.set(this.$refs.cardFloat, {
        scale: scaleFactor
      })
      const rectCardFloatRecalculated = this.$refs.cardFloat.getBoundingClientRect()
      last.left = rectCardFloatRecalculated.left
      last.top = rectCardFloatRecalculated.top

      const delta = {
        x: first.left - last.left,
        y: first.top - last.top
      }

      const timelineCardPicked = gsap.timeline()
      const timelineCardPickedFadeOutUnpicked = gsap.timeline()
      const timelineCardPickedRadiation = gsap.timeline()
      const timelineCardPickedStandOut = gsap.timeline()
      
      const arrayCardListClone = [...this.$refs.cardList]
      arrayCardListClone.splice(cardIndexPicked, 1)
      const elListUnpicked = arrayCardListClone

      const zIndexElevated = 10

      timelineCardPickedFadeOutUnpicked
        .to(elListUnpicked, .5, {
          autoAlpha: .2,
          rotate: () => {
            return gsap.utils.random(-5, 5)
          },
          stagger: .15
        })

      timelineCardPickedRadiation
        .set(this.$refs.radiation, { zIndex: zIndexElevated - 5 })
        .to(this.$refs.radiation, .5, {autoAlpha: 1})
        .to(this.$refs.radiation, 30, {
          repeat: -1,
          rotate: 360,
          ease: 'linear'
        }, 0)

      timelineCardPickedStandOut
        .set(target, {autoAlpha: 0})
        .set([
          this.$refs.cardFloat,
          // this.$refs.buttonProceed.$el
        ], {
          zIndex: zIndexElevated,
          autoAlpha: 1
        })
        .fromTo(this.$refs.cardFloat, .75, {
          x: delta.x,
          y: delta.y,
          scale: scaleFactor
        }, {
          x: 0,
          y: 0,
          scale: 1,
          ease: "elastic.out(1, 0.75)",
          rotate: gsap.utils.random(-10, 10),
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
            //       onComplete: this._finalizeThePageCardPicking
            //     })
            // })

            setTimeout(() => {
              this._finalizeThePageCardPicking()
            }, 1000)

            
          }
        }, 0)

      timelineCardPicked
        .add(timelineCardPickedFadeOutUnpicked)
        .add(timelineCardPickedRadiation)
        .add(timelineCardPickedStandOut, '<')

    },

    _finalizeThePageCardPicking() {
      this.setIsCardPickingShown({ value: false })
      this.setIsSpotPickingShown({ value: true })
    }
  },

  directives: {
    setRadiationSize: {
      inserted(el, binding, vnode) {
        const elFrameMain = document.querySelector('.frame__main')
        const radiationSize = Math.hypot(elFrameMain.offsetWidth, elFrameMain.offsetHeight)
        gsap.set(el, {
          width: radiationSize,
          height: radiationSize,
          scale: 1.5
        })
      }
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
.cardPicking {
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
  }

  &__cardListWrapper {
    
    /* width: 80.453%; */
    /* margin: 4.533% auto 0; */
    width: 88.952%;
    margin: 7.082% auto 0;
    /** 628 644 */
  }

  &__cardList {
    display: flex;
    flex-wrap: wrap;
    /* margin: -1.846% -2.349%; */
    margin: -1.242%;

    transform: scale(1.05);
  }
  &__cardItem {
    /** 596 */
    /* --width: 45.302%; */

    --width: 47.516%;
    width: var(--width);
    height: 0;
    /* padding-bottom: calc(var(--width) / .6553); */
    padding-bottom: calc(var(--width) / .6538);
    position: relative;
    /* margin: 1.846% 2.349%; */
    margin: 1.242%;
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

  &__float {
    position: absolute;
    --width: 80.453%;
    width: var(--width);
    /* padding-bottom: calc(var(--width) / .6553); */
    padding-bottom: calc(var(--width) / .6538);
    height: 0;
    /* top: 6.7%; */
    top: 15%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    visibility: hidden;
    opacity: 0;

    > picture {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  &__radiation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:rgba(3, 64, 58, .2) url('~assets/card-picking/radiation.svg') no-repeat center;
    visibility: hidden;
    opacity: 0;
  }
}
</style>