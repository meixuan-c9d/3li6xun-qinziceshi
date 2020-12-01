<template>
  <article 
    :style="{backgroundColor}"
    class="assessment"
  >
    <section 
      class="assessment__radiation"
      v-set-radiation-size
      ref="radiation"
    ></section>

    <transition
      @appear="whenReportAppears"
      :css="false"
    >
      <section class="assessment__report">
        <picture>
          <source 
            type="image/webp" 
            :data-srcset="require(`~/assets/assessment/${cardPicked}.webp`)" 
          />
          <img 
            :data-src="require(`~/assets/assessment/${cardPicked}.png`)"
            :src="require(`~/assets/assessment/${cardPicked}.low.png`)"
            class="lazyload"
          />
        </picture>
      </section>
    </transition>
    
    <section class="assessment__reportUsage">
      <!-- <button 
        class="assessment__reportSave"
        @click="saveImage"
      >
        <div>保存鉴定报告</div>
      </button> -->
      <button 
        class="assessment__reportShare"
        @click="shareImage"
      >
        <!-- <div>生成分享海报</div> -->
        <div>分享朋友圈</div>
      </button>
    </section>

    <section 
      v-show="isLayerReportImageShown"
      class="assessment__layerReportImage"
      @click.self="isLayerReportImageShown=false"
    >
      <!-- <figure 
        v-show="isImageSaveShown"
        class="assessment__reportImage"
      >
        <picture>
          <source 
            type="image/webp" 
            :data-srcset="require(`~/assets/assessment/${cardPicked}-save.webp`)" 
          />
          <img 
            :data-src="require(`~/assets/assessment/${cardPicked}-save.jpg`)"
            class="lazyload"
          />
        </picture>
      </figure> -->

      <figure 
        v-show="isImageShareShown"
        class="assessment__reportImage"
      >
        <picture>
          <source 
            type="image/webp" 
            :data-srcset="require(`~/assets/assessment/${cardPicked}-share.webp`)" 
          />
          <img 
            :data-src="require(`~/assets/assessment/${cardPicked}-share.jpg`)"
            class="lazyload"
          />
        </picture>
      </figure>

      <footer class="assessment__tipSave">
        <span class="assessment__tipSaveIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 36"><g fill="#FFF" fill-rule="nonzero" stroke="#969CA4"><path d="M25.593 14.547L24.509 9.03a2.705 2.705 0 00-3.183-2.14h0a2.716 2.716 0 00-2.138 3.188l-.122-.621a2.705 2.705 0 00-3.183-2.14h0a2.716 2.716 0 00-2.138 3.188 2.705 2.705 0 00-3.184-2.145h0a2.716 2.716 0 00-2.137 3.188L6.8 3.282a2.705 2.705 0 00-3.181-2.14h0A2.716 2.716 0 001.48 4.33l1.92 9.774c-.07.009-.141.017-.212.031a2.716 2.716 0 00-2.137 3.188l.39 1.98.928 4.728.188.96a12.328 12.328 0 005.216 7.856 12.29 12.29 0 009.235 1.86h0c6.67-1.313 11.012-7.794 9.7-14.474l-1.115-5.686h0z"/><path d="M9.622 17.687l-1.206-6.14a2.714 2.714 0 115.326-1.049l1.203 6.146"/><path d="M4.3 18.736L1.47 4.332a2.714 2.714 0 115.326-1.048l2.825 14.403M14.945 16.644l-1.205-6.15a2.714 2.714 0 115.326-1.048l1.207 6.141"/><path d="M20.269 15.59l-1.074-5.47a2.714 2.714 0 115.326-1.048l1.074 5.47"/></g></svg>
        </span>
        <span>长按保存图片哦～</span>  
      </footer>
    </section>

    <TheFooter class="l-footerAssessment" />
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
      isLayerReportImageShown: false,

      isImageSaveShown: false,
      isImageShareShown: false,
    }
  },
  computed: {
    ...mapState([
      'cardPicked'
    ]),
    backgroundColor() {
      return ({
        0: '#F3D34C',
        1: '#7E6EBA',
        2: '#F0B057',
        3: '#DC6666'
      })[this.cardPicked]
    }
  },
  methods: {
    ...mapMutations([
      
    ]),
    whenReportAppears(el, done) {
      const timelineReport = gsap.timeline()
      const timelineReportRadiation = gsap.timeline()
      const timelineReportBody = gsap.timeline()

      timelineReportRadiation
        .to(this.$refs.radiation, 30, {
          repeat: -1,
          rotate: 360,
          ease: "linear"
        })
        .to(this.$refs.radiation, .5, {
          autoAlpha: 1
        }, '<.5')

      timelineReportBody
        .fromTo(el, .75, {
          scale: .5,
          autoAlpha: 0,
        }, {
          delay: .5,
          scale: 1,
          autoAlpha: 1,
          ease: "expo.out"
        })

      timelineReport
        .add(timelineReportBody)
        .add(timelineReportRadiation, '<')
        
    },

    saveImage() {
      this.isImageShareShown = false
      this.isImageSaveShown = true
      this.isLayerReportImageShown = true
    },

    shareImage() {
      this.isImageSaveShown = false
      this.isImageShareShown = true
      this.isLayerReportImageShown = true
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
        })
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.assessment {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color .3s;

  &__report {
    --width: 91.467%;
    width: var(--width);
    height: 0;
    /* padding-bottom: calc(var(--width) / .671); */
    padding-bottom: calc(var(--width) / .6757);
    position: absolute;
    /* top: 1.703%; */
    top: 0;
    
    left: 50%;
    transform: translateX(-50%);
    > picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    @media screen and (min-device-height: 737px) {
      top: 10%;
    }

    visibility: hidden;
    opacity: 0;
  }


  &__radiation {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:url('~assets/assessment/radiation.svg') no-repeat center;
    visibility: hidden;
    opacity: 0;
  }

  &__reportUsage {
    width: 87.2%;
    position: absolute;
    /* bottom: 3.875%; */
    bottom: 5.747%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    

  }

  &__reportSave,
  &__reportShare {
    /* --width: 45.26%; */
    --width: 63.031%;
    width: var(--width);
    height: 0;
    /* padding-bottom: calc(var(--width) / 3.288); */
    padding-bottom: calc(var(--width) / 4.944);
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

      font-size: 18px;
      font-weight: 600;
      color: #fff;
      background: #346CC4;
      border-radius: 27.5px;
    }
  }

  &__layerReportImage {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0, .7);
  }

  &__reportImage {
    position: absolute;
    --width: 78.133%;
    width: var(--width);
    height: 0;
    /* padding-bottom: calc(var(--width) / .5722); */
    padding-bottom: calc(var(--width) / .5623);
    /* top: 4.6%; */
    top: 3.9%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
  }

  &__tipSave {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 3.694%;
    font-size: 13px;
    color: #fff;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
  }

  &__tipSaveIcon {
    width: 13px;
    height: 17px;
    line-height: 0;
    margin-right: 5px;
  }
}

.l-footerAssessment {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5%;
}
</style>