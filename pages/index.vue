<template>
  <div class="frame">
    <div 
      v-if="isWeixinTitleBarShown"
      class="frame__weixinTitleBar">
    </div>
    <main class="frame__main">
      <transition
        @leave="whenPrefaceLeaves"
        :css="false"
      >
        <ThePagePreface 
          v-if="isPrefaceShown" 
        />
      </transition>
      
      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isParentGenderShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageParentGender />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isChildGenderShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageChildGender />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isChildAgeRangeShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageChildAgeRange />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isQuickMindfulShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageQuickMindful />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isCardPickingShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageCardPicking />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isSpotPickingShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageSpotPicking />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <AppImageBorderedContent 
          v-if="isAssessingShown"
          full-screen
          :background-color="backgroundColor"
        >
          <ThePageAssessing />
        </AppImageBorderedContent>
      </transition>

      <transition
        @enter="whenPageEnters"
        @leave="whenPageLeaves"
        :css="false"
      >
        <ThePageAssessment 
          v-if="isAssessmentShown"
        /> 
      </transition>
      
    </main>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { mapState } from 'vuex'
export default {
  asyncData(context) {
    
    if (process.server) {
      if (process.env.SHOW_WEIXIN_TITLE_BAR) {
        return {
          isWeixinTitleBarShown: true
        }
      }
    }
  },
  computed: {
    ...mapState([
      'isPrefaceShown',
      'isParentGenderShown',
      'isChildGenderShown',
      'isChildAgeRangeShown',
      'isQuickMindfulShown',
      'isCardPickingShown',
      'isSpotPickingShown',
      'isAssessingShown',
      'isAssessmentShown',

      'backgroundColor'
    ])
  },
  methods: {
    whenPrefaceLeaves(el, done) {
      gsap.to(el, .5, {
        autoAlpha: 0,
        onComplete: done
      })
    },
    whenPageEnters(el, done) {
      gsap.fromTo(el, .5, 
        { autoAlpha: 0 },
        { autoAlpha: 1 }
      )
    },
    whenPageLeaves(el, done) {
      gsap.to(el, .35, 
        { 
          autoAlpha: 0,
          yPercent: 2.5,
          onComplete: done
        }
      )
    }
  }
}
</script>

<style scoped>
.frame {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  &__weixinTitleBar {
    height: 9.5925%;
    background: #000;
    position: relative;
    z-index: 9999;
  }
  &__main {
    flex-grow: 1;
    position: relative;
  }
}
</style>