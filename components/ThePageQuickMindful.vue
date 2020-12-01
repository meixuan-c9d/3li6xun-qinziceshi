<template>
  <article class="quickMindful">
    <header 
      class="quickMindful__header"
      v-html="quickMindfulHeaderText"
    ></header>
    <section class="quickMindful__backgroundSymbol">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 594 594"><g stroke="#68B4A5" stroke-width="4" fill="none" fill-rule="evenodd" opacity=".2"><circle cx="297" cy="297" r="295"/><circle cx="297" cy="297" r="277"/><path d="M297 20.472L34.006 211.548l100.455 309.168h325.078l100.455-309.168L297 20.472z"/><path d="M297.5 400.528l-97.985-71.19 37.427-115.19h121.116l37.427 115.19-97.985 71.19z"/><path d="M297 24.535l-60.72 188.892-198.41-.623 160.884 116.118-61.905 188.507L297 400.302l160.15 117.127-61.904-188.507 160.883-116.118-198.41.623L297 24.535z"/><path d="M275.365 326.779l-13.372-41.153L297 260.19l35.007 25.435-13.372 41.153h-43.27z"/><path d="M353.977 218.577L297 260.247l-56.977-41.67 22.024 67.066-57.238 41.312 70.589-.222L297 393.936l21.602-67.203 70.59.222-57.239-41.312 22.024-67.066z"/></g></svg>        
      </figure>
    </section>

    <transition
      @appear="whenStepListAppear"
      :css="false"
    >

    <ul>
      <li class="quickMindful__step quickMindful__step--1">
        <div>
          <section class="quickMindful__bubble" data-bubble>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 300"><path d="M155 3C113.026 3 75.026 20.013 47.52 47.52 20.013 75.026 3 113.026 3 155c0 40.183 20.373 74.411 51.337 99.172C88.15 281.209 134.587 297 181.331 297c42.485 0 73.09-13.07 93.412-35.972C297.115 235.817 307 198.881 307 155c0-41.974-17.013-79.974-44.52-107.48C234.974 20.013 196.974 3 155 3z" fill="#FFF" stroke="#336CC3" stroke-width="6" fill-rule="evenodd"/></svg>
          </section>
          <section class="quickMindful__bubbleText">
            <p v-html="quickMindfulStepText[0]"></p>
          </section>
        </div>
      </li>
      <li class="quickMindful__step quickMindful__step--2">
        <div>
          <section class="quickMindful__bubble" data-bubble>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 272"><path d="M51.528 41.667C20.74 64.867 5.688 91.05 3.471 118.754c-2.441 30.513 10.595 62.704 34.579 94.532 22.942 30.446 56.048 48.713 91.028 53.635 34.978 4.922 71.83-3.5 102.264-26.433 30.434-22.934 48.688-56.037 53.598-91.017 4.91-34.982-3.524-71.84-26.467-102.286-21.956-29.137-55.428-42.82-91.4-43.861-39.314-1.138-81.635 12.79-115.545 38.343z" fill="#FFF" stroke="#336CC3" stroke-width="6" fill-rule="evenodd"/></svg>
          </section>
          <section class="quickMindful__bubbleText">
            <p v-html="quickMindfulStepText[1]"></p>
          </section>
        </div>
      </li>
      <li class="quickMindful__step quickMindful__step--3">
        <div>
          <section class="quickMindful__bubble" data-bubble>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343 332"><path d="M171.5 3C124.97 3 82.845 21.864 52.353 52.362 21.86 82.861 3 124.994 3 171.533c0 44.568 22.584 82.536 56.922 110C97.387 311.497 148.84 329 200.634 329c47.121 0 81.058-14.514 103.595-39.916C329.027 261.133 340 220.187 340 171.534c0-46.54-18.86-88.673-49.353-119.172C260.155 21.864 218.03 3 171.5 3z" fill="#FFF" stroke="#336CC3" stroke-width="6" fill-rule="evenodd"/></svg>
          </section>
          <section class="quickMindful__bubbleText">
            <p v-html="quickMindfulStepText[2]"></p>
          </section>
        </div>
      </li>
    </ul>
    </transition>

    <transition
      @enter="whenButtonProceedEnters"
      :css="false"
    >
      <AppButtonProceed
        v-if="isButtonProceedShown"
        ref="buttonProceed"
        :is-symbol="buttonProceedIsSymbol"
        :is-symbol-custom="buttonProceedIsSymbolCustom"
        @click.native.once="finalizeQuickMindful"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M34.501 23.323c.504.393.92.883 1.521 1.715l.936 1.33c.31.44.562.787.815 1.118 2.175 2.85 3.89 3.767 6.137 2.779l.2-.092 1.849 3.824c-4.548 2.196-8.112.477-11.378-3.692l-.196-.253-1.003-1.399-.003.035c-.254 2.33.533 3.373 2.933 4.862l.825.5c3.23 1.955 4.63 3.51 4.63 6.589 0 2.597-1.579 4.312-4.065 4.947-1.666.426-3.71.398-6.242.05a51.884 51.884 0 01-2.795-.473l-3.09-.625-.672-.124a5.074 5.074 0 00-.64-.082l-.124.006c-.153.012-.394.041-.722.09l-1.053.17c-.688.116-1.83.31-2.254.38l-.984.157c-.951.145-1.808.26-2.644.35-2.63.28-4.76.279-6.467-.117-2.574-.597-4.263-2.19-4.263-4.73 0-2.812 1.42-4.28 4.63-6.068l1.235-.673c3.187-1.744 4.092-2.879 3.519-5.579l-.046-.206-.94 1.306c-.157.214-.3.41-.41.555l-.064.086c-3.271 4.3-6.66 6.131-11.027 4.044l-.253-.125 1.927-3.786c2.069 1.052 3.636.289 5.778-2.456l.19-.247c.373-.49 1.552-2.142 1.628-2.245.71-.964 1.22-1.547 1.83-1.98 1.222-.864 2.74-.868 3.866.267.697.704 1.144 1.747 1.539 3.306 1.325 5.232-.566 8.022-5.223 10.635l-.457.251-.76.413c-2.127 1.158-2.711 1.728-2.711 2.503 0 .27.136.397.973.592 1.138.264 2.858.265 5.053.03.768-.082 1.568-.189 2.463-.326l1.54-.25c.765-.13 1.87-.318 2.142-.362l.68-.106c.615-.09 1.044-.132 1.409-.132.52 0 1.135.09 2.126.284l2.656.54.825.16c.66.123 1.259.225 1.831.31l.34.049c3.88.534 5.475.127 5.475-.79 0-1.09-.479-1.662-2.358-2.818l-.824-.5c-4.244-2.577-5.96-5.2-4.99-10.355.293-1.554.635-2.57 1.227-3.288 1.083-1.315 2.703-1.311 3.93-.354zM24.263 3c5.56 0 10.068 4.538 10.068 10.136 0 5.598-4.508 10.135-10.068 10.135s-10.068-4.537-10.068-10.135S18.703 3 24.263 3zm0 4.054c-3.336 0-6.04 2.723-6.04 6.082 0 3.358 2.704 6.081 6.04 6.081a6.033 6.033 0 005.231-3.04 6.117 6.117 0 000-6.082 6.033 6.033 0 00-5.231-3.04z" fill="#FFF" fill-rule="nonzero"/></g></svg>
      </AppButtonProceed>
    </transition>
    
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
      buttonProceedIsSymbol: true,
      buttonProceedIsSymbolCustom: {
        text: '我已完成',
        iconContainerStyle: {
          width: '24px',
          height: '24px',
          lineHeight: '0'
        }
      },

      isButtonProceedShown: false
    }
  },
  computed: {
    ...mapState([
      'quickMindfulHeaderText',
      'quickMindfulStepText'
    ])
  },
  methods: {
    ...mapMutations([
      'setIsQuickMindfulShown',
      'setIsCardPickingShown',
    ]),
    whenStepListAppear(el, done) {
      const stepTimeline = gsap.timeline()
      const stepTimelineStep1 = gsap.timeline()
      const stepTimelineStep2 = gsap.timeline()
      const stepTimelineStep3 = gsap.timeline()
      
      
      stepTimelineStep1
        .to(el.children[0].querySelector('[data-bubble]'), 10, {
          rotate: 360,
          ease: "linear",
          repeat: -1
        })
        .to(el.children[0], 1, {
          autoAlpha: 1
        }, '<')

      stepTimelineStep2
        .to(el.children[1].querySelector('[data-bubble]'), 12.5, {
          rotate: -360,
          ease: "linear",
          repeat: -1
        })
        .to(el.children[1], 1, {
          autoAlpha: 1
        }, '<')

      stepTimelineStep3
        .to(el.children[2].querySelector('[data-bubble]'), 10, {
          rotate: -360,
          ease: "linear",
          repeat: -1
        })
        .to(el.children[2], 1, {
          autoAlpha: 1,
          onComplete: () => {
            setTimeout(() => {
              this.isButtonProceedShown = true
            }, 1000)
          }
        }, '<')
      
      

      stepTimeline
        .add(stepTimelineStep1)
        .add(stepTimelineStep2, '<1')
        .add(stepTimelineStep3, '<1')

    },

    whenButtonProceedEnters(el, done) {
      const timelineButtonProceed = gsap.timeline()
      timelineButtonProceed
        .fromTo(this.$refs.buttonProceed.$el.querySelector('[data-symbol]'), .75, {
          scale: .5,
        }, {
          scale: 1,
          ease: "elastic.out(1, 0.6)",
        })
    },

    finalizeQuickMindful() {
      this.setIsQuickMindfulShown({ value: false })
      this.setIsCardPickingShown({ value: true })
    }
  }
}
</script>

<style scoped>
.quickMindful {
  &__header {
    font-size: 30px;
    text-align: center;
    color: #fff;
    margin-top: 6.232%;
    line-height: 1.5;
  }
  &__backgroundSymbol {
    --width: 84.136%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > figure {
      line-height: 0;
    }
  }
  &__step {
    position: absolute;    
    height: 0;
    --size: 40px;
    visibility: hidden;
    opacity: 0;

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
    }
    &::before {
      position: absolute;
      width: var(--size);
      height: var(--size);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      background: #346CC4;
      z-index: 1;
      border-radius: 50%;
    }
    
    &--1 {
      --width: 43.909%;
      width: var(--width);
      padding-bottom: calc(var(--width) / 1.033);
      top: 22.743%;
      left: 8.924%;
      &::before {
        content: '1';
        left: 6.129%;
        top: -1.667%;
      }
      
    }
    &--2 {
      --width: 40.95%;
      width: var(--width);
      padding-bottom: calc(var(--width) / 1.067);
      top: 34.753%;
      right: -1.416%;
      &::before {
        content: '2';
        left: 38.393%;
        top: -12.176%;
      }
    }
    &--3 {
      --width: 48.584%;
      width: var(--width);
      padding-bottom: calc(var(--width) / 1.033);
      left: 12.9%;
      top: 52.726%;
      &::before {
        content: '3';
        left: 24.323%;
        top: -9.639%;
      }
    }
  }
  &__bubble {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    line-height: 0;
  }
  &__bubbleText {
    position: relative;
    z-index: 2;
    align-self: center;
    margin: 0 auto;
    > p {
      text-align: center;
      color: #346CC4;
      font-size: 18px;
      line-height: 1.389;
      font-weight: 600;
    }
  }
}
</style>