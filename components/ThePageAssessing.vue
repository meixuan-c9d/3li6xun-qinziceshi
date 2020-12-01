<template>
  <article class="assessing">
    <header class="assessing__header">
      <picture>
        <img 
          :data-src="require('~/assets/assessing/title.png')"
          :src="require('~/assets/assessing/title.low.png')"
          class="lazyload"
        />
      </picture>
    </header>
    <section class="assessing__loadingText">
      <p v-html="loadingText"></p>
    </section>
    <section class="assessing__asset">
      <picture>
        <source 
          type="image/webp" 
          :data-srcset="require('~/assets/assessing/leaves.webp')" 
        />
        <img 
          :data-src="require('~/assets/assessing/leaves.png')"
          :src="require('~/assets/assessing/leaves.low.png')"
          class="lazyload"
        />
      </picture>
    </section>
    <section class="assessing__loadingAsset">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 594 594"><g ref="indicator" stroke="#68B4A5" stroke-width="4" fill="none" fill-rule="evenodd" opacity=".5"><circle cx="297" cy="297" r="295"/><circle cx="297" cy="297" r="277"/><path d="M297 20.472L34.006 211.548l100.455 309.168h325.078l100.455-309.168L297 20.472z"/><path d="M297.5 400.528l-97.985-71.19 37.427-115.19h121.116l37.427 115.19-97.985 71.19z"/><path d="M297 24.535l-60.72 188.892-198.41-.623 160.884 116.118-61.905 188.507L297 400.302l160.15 117.127-61.904-188.507 160.883-116.118-198.41.623L297 24.535z"/><path d="M275.365 326.779l-13.372-41.153L297 260.19l35.007 25.435-13.372 41.153h-43.27z"/><path d="M353.977 218.577L297 260.247l-56.977-41.67 22.024 67.066-57.238 41.312 70.589-.222L297 393.936l21.602-67.203 70.59.222-57.239-41.312 22.024-67.066z"/></g></svg>
      </figure>
      
    </section>

    <TheFooter class="l-footerAssessing" />
    
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
      loadingText: '缘分鉴定中...',
      loadingTextAlt: '鉴定完毕<br>正在解析'
    }
  },
  mounted() {
    const timelineIndicator = gsap.timeline({
      onComplete: () => {
        this.setIsAssessingShown({ value: false })
        this.setIsAssessmentShown({ value: true })
      }
    })
    timelineIndicator
      .fromTo(this.$refs.indicator, .75, {
        stroke: '#68B4A5'
      }, {
        stroke: '#346CC4',
        repeat: 6,
        yoyo: true
      })
      .to({}, 0, {
        onComplete: () => {
          this.loadingText = this.loadingTextAlt
        }
      }, '<' + .75*6*.8)
  },

  methods: {
    ...mapMutations([
      'setIsAssessingShown',
      'setIsAssessmentShown'
    ])
  }
}
</script>

<style scoped>
.assessing {
  &__asset {
    --width: 59.348%;
    height: 0;
    padding-bottom: calc(var(--width) / 2.106);
    width: var(--width);
    position: absolute;
    /* left: -5.25%; */
    top: 0;
    left: 0;
    transform: translate(-5.25%, -11.055%);
    
  }
  &__header {
    --width: 45.892%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 4.5);
    line-height: 0;
    margin: 11.331% auto 0;
  }
  &__loadingText {
    font-size: 30px;
    
    color: #fff;
    text-align: center;
    /* margin: 3.966% auto 0; */
    position: absolute;
    top: 56.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 1;
    > p {
      line-height: 1.5;
    }
    
  }
  &__loadingAsset {
    --width: 84.136%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -39%);
    > figure {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 0;
    }
    
  }
}

.l-footerAssessing {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3%;
}
</style>