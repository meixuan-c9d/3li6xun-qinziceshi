<template>
  <article class="preface">
    <figure class="preface__background preface__background--upper">
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/preface/bg-upper.webp')" 
        />
        <img 
          :data-src="require('~/assets/preface/bg-upper.png')"
          :src="require('~/assets/preface/bg-upper.low.png')"
          class="lazyload"
        />
      </picture>
    </figure>
    <figure class="preface__background preface__background--lower">
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/preface/bg-lower.webp')" 
        />
        <img 
          :data-src="require('~/assets/preface/bg-lower.png')"
          :src="require('~/assets/preface/bg-lower.low.png')"
          class="lazyload"
        />
      </picture>
    </figure>
    <figure class="preface__subtitle">
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/preface/subtitle.webp')" 
        />
        <img 
          :data-src="require('~/assets/preface/subtitle.png')"
          :src="require('~/assets/preface/subtitle.low.png')"
          class="lazyload"
        />
      </picture>
    </figure>
    <header 
      class="preface__header"
      ref="textBlock1"
    >
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/preface/title.webp')" 
        />
        <img 
          :data-src="require('~/assets/preface/title.png')"
          :src="require('~/assets/preface/title.low.png')"
          class="lazyload" 
        />
      </picture>
    </header>
    <!-- <section class="preface__text">
      <transition
        @leave="whenTextSplittedOneLeaves"
        :css="false"
      >
        <article 
          v-show="isTextSplittedOneShown"
          class="preface__textSplitted"
        >
          <transition 
            @enter="whenTextBlockOneEnters" 
            :css="false"
          >
            <section 
              v-show="isTextBlockOneShown"
              class="preface__textSplittedHalf preface__textSplittedHalf--first">
              <p>孩子来到每个家庭</p>
              <p>都是因为</p>
              <p>与这个家有着莫大的缘分</p>
              <p>...</p>
            </section>
          </transition>
          
          <transition 
            @enter="whenTextBlockTwoEnters" 
            :css="false"
          >
            <section 
              v-show="isTextBlockTwoShown"
              class="preface__textSplittedHalf preface__textSplittedHalf--second">
              <p>父母对孩子的教育</p>
              <p>是孩子成长的秘方</p>
              <p>孩子对父母的“治愈”</p>
              <p>也往往远超你的想象</p>
              <p>...</p>
            </section>
          </transition>
        </article>
      </transition>

      <transition
        @enter="whenTextSplittedTwoEnters"
        :css="false"
      >
        <article
          v-show="isTextSplittedTwoShown"
          class="preface__textSplitted"
        >
          <section class="preface__textSplittedHalf">
            <p>那么</p>
            <p>你与孩子之间的缘分</p>
            <p>又究竟是哪一种呢</p>
            <p>...</p>
          </section>
        </article>
      </transition>
      
    </section> -->

    <!-- <section 
      v-for="number of 3"
      class="preface__headerCenter preface__headerCenter--textBlock2"
      :class="[`preface__headerCenter--textBlock${number + 1}`]"
      :ref="`textBlock${number + 1}`"
    >
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require(`~/assets/preface/text-block-${number + 1}.webp`)" 
        />
        <img 
          :data-src="require(`~/assets/preface/text-block-${number + 1}.png`)"
          class="lazyload"
        />
      </picture>
    </section> -->
    
    <transition
      @enter="whenStartButtonEnters"
      :css="false"
    >
      <button 
        v-show="isStartButtonShown"
        class="preface__startButton"
        @click="start"
      >
        <div>
          开始测试
          <picture 
            ref="startButtonAsset"
            class="preface__startButtonAsset"
          >
            <source 
              type="image/webp" 
              :data-srcset="require('~/assets/preface/pigeon.webp')" 
            />
            <img 
              :data-src="require('~/assets/preface/pigeon.png')"
              :src="require('~/assets/preface/pigeon.low.png')"
              class="lazyload"
            />
          </picture>
        </div>
        
      </button>
    </transition>

    <TheFooter class="l-footerPreface" />
        
  </article>  
</template>
<script>
import 'lazysizes'
import { gsap } from 'gsap'
import { mapMutations } from 'vuex'

export default {
  asyncData(context) {
    console.log(context)
  },
  
  data() {
    return {
      isTextSplittedOneShown: true,
      isTextBlockOneShown: false,
      isTextBlockTwoShown: false,
      isTextSplittedTwoShown: false,

      isStartButtonShown: false
    }
  },
  methods: {
    start() {
      this.setIsPrefaceShown({ value: false })
      this.setIsParentGenderShown({ value: true })
    },
    ...mapMutations([
      'setIsPrefaceShown',
      'setIsParentGenderShown'
    ]),
    // whenTextBlockOneEnters(el) {
    //   gsap.fromTo(el, .75, { autoAlpha: 0}, { autoAlpha: 1 })
    // },
    // whenTextBlockTwoEnters(el) {
    //   gsap.fromTo(el, .75, { autoAlpha: 0}, { autoAlpha: 1 })
    // },
    // whenTextSplittedOneLeaves(el, done) {
    //   gsap.to(el, .75, {
    //     yPercent: 2.5,
    //     autoAlpha: 0,
    //   })
    // },
    // whenTextSplittedTwoEnters(el, done) {
    //   gsap.from(el, .75, {
    //     autoAlpha: 0,
    //   }, {
    //     autoAlpha: 1,
    //   })
    // },
    whenStartButtonEnters(el, done) {
      gsap.fromTo(el, 1, {
        autoAlpha: 0,
        scale: .75
      }, {
        autoAlpha: 1,
        scale: 1,
        ease: "elastic.out(1, 0.6)",
      })
      gsap.fromTo(this.$refs.startButtonAsset, 2.5, {
        autoAlpha: 0,
        xPercent: 15
      }, {
        delay: .85,
        autoAlpha: 1,
        xPercent: 1,
        ease: "expo.out"
      })
    }
  },
  mounted() {
    // const timeline = gsap.timeline()
    // timeline
    //   .to({}, 0, {
    //     delay: 1,
    //     complete: () => {
    //       this.isTextBlockOneShown = true
    //     }
    //   })
    //   .to({}, 0, {
    //     complete: () => {
    //       this.isTextBlockTwoShown = true
    //     }
    //   }, '+=2.5')
    //   .to({}, 0, {
    //     complete: () => {
    //       this.isTextSplittedOneShown = false
    //     }
    //   }, '+=2.5')
    //   .to({}, 0, {
    //     complete: () => {
    //       this.isTextSplittedTwoShown = true
    //     }
    //   }, '+=.75')
    //   .to({}, 0, {
    //     complete: () => {
    //       this.isStartButtonShown = true
    //     }
    //   }, '+=1')
      
    // timeline.timeScale(5)

    // const timeline = gsap.timeline({
    //   onComplete: () => {
    //     setTimeout(() => {
    //       this.isStartButtonShown = true
    //     }, 500)
    //   }
    // })
    // timeline
    //   .to(this.$refs.textBlock1, 1.75, {
    //     delay: 2,
    //     autoAlpha: 0
    //   })
    //   .to(this.$refs.textBlock2, 1.75, {
    //     autoAlpha: 1
    //   })
    //   .to(this.$refs.textBlock2, 1.75, {
    //     autoAlpha: 0
    //   }, '>1')
    //   .to(this.$refs.textBlock3, 1.75, {
    //     autoAlpha: 1
    //   })
    //   .to(this.$refs.textBlock3, 1.75, {
    //     autoAlpha: 0
    //   })
    //   .to(this.$refs.textBlock4, 1.75, {
    //     autoAlpha: 1
    //   })

    setTimeout(() => {
      this.isStartButtonShown = true
    }, 500)
    
    if (window.scriptLoadedJweixin) {
      this.$wxConfig()
    } else {
      const elScriptJweixin = document.getElementById('jweixin')
      elScriptJweixin.onload = this.$wxConfig
    }
  }
}
</script>
<style scoped>
.preface {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--green);
  &__header {
    /* margin-left: auto;
    margin-right: auto;
    margin-top: 40.133%; */
    --width: 81.6%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 3.326);
    /* position: relative; */
    position: absolute;
    left: 50%;
    /* transform: translate(-50%, -50%);
    top: 50%; */
    transform: translateX(-50%);
    top: 38.34%;
    
    > picture {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  &__background {
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    > picture {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    &--upper {
      top: 0;
      /* padding-bottom: calc(100% / 1.761); */
      padding-bottom: calc(100% / 1.659);
    }
    &--lower {
      bottom: 0;
      /* padding-bottom: calc(100% / 1.337); */
      /* padding-bottom: calc(100% / 1.603); */
      padding-bottom: calc(100% / 1.578);
    }
  }

  /*

  &__text {
    margin-top: 12%;
    width: 100%;
    position: relative;

  }
  &__textSplitted {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 14px;
    color: #062960;

    p {
      line-height: 171%;
    }
  }
  &__textSplittedHalf {
    &--second {
      margin-top: 7.143%;
    }
    text-align: center;
  }

  */

  &__startButton {
    position: absolute;
    --width: 66.667%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 4.545);
    /* bottom: 13.043%; */
    bottom: 14.286%;
    left: 50%;
    transform: translateX(-50%);
    
    > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      background: #346CC4;
      border-radius: 27.5px;
    }
  }
  &__startButtonAsset {
    width: 46.5px;
    height: 69px;
    position: absolute;
    right: -4.2%;
    bottom: 37.273%;
    visibility: hidden;
    opacity: 0;
  }

  &__headerCenter {
    position: absolute;
    
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;

    > picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &--textBlock2 {
      --width: 70.4%;
      width: var(--width);
      padding-bottom: calc(var(--width) / 1.467);
      /* top: 35.63%; */
      top: 31.03%;
    }

    &--textBlock3 {
      
      --width: 57.6%;
      width: var(--width);
      padding-bottom: calc(var(--width) / .96);
      /* top: 32.59%; */
      top: 31.03%;
    }

    &--textBlock4 {
      --width: 57.6%;
      width: var(--width);
      padding-bottom: calc(var(--width) / 1.2);
      top: 31.03%;

    }
  }

  &__subtitle {
    position: absolute;
    --width: 57.73%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 11.102);
    top: 8.37%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.l-footerPreface {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  
}
</style>