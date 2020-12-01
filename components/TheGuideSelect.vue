<template>
  <aside class="guideSelect">
    <span 
      ref="icon"
      class="guideSelect__icon"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 131"><g fill="#FFF" fill-rule="evenodd"><circle opacity=".3" cx="29" cy="29" r="29"/><circle opacity=".7" cx="29" cy="29" r="16"/><g fill-rule="nonzero" stroke="#4A8B7E" stroke-width="2"><path d="M97.615 66.234L94.24 49.037a8.459 8.459 0 00-3.577-5.398 8.421 8.421 0 00-6.34-1.275h0a8.436 8.436 0 00-5.387 3.585 8.474 8.474 0 00-1.273 6.355l-.38-1.936a8.459 8.459 0 00-3.577-5.399 8.421 8.421 0 00-6.34-1.274h0a8.436 8.436 0 00-5.386 3.585 8.474 8.474 0 00-1.273 6.355 8.459 8.459 0 00-3.575-5.408 8.421 8.421 0 00-6.345-1.28h0a8.436 8.436 0 00-5.385 3.587 8.474 8.474 0 00-1.272 6.354l-5.063-25.772a8.459 8.459 0 00-3.575-5.396 8.421 8.421 0 00-6.336-1.277h0a8.436 8.436 0 00-5.387 3.585 8.474 8.474 0 00-1.273 6.355l5.98 30.472c-.22.025-.44.05-.659.096a8.436 8.436 0 00-5.385 3.586 8.474 8.474 0 00-1.272 6.354l1.212 6.174 2.892 14.739.588 2.99a38.435 38.435 0 0016.25 24.495 38.266 38.266 0 0028.77 5.8h0c20.777-4.097 34.307-24.302 30.22-45.129l-3.477-17.726h0z"/><path d="M47.862 76.025L44.105 56.88c-.901-4.593 2.083-9.049 6.665-9.952 4.583-.903 9.028 2.088 9.928 6.682l3.747 19.161"/><path d="M31.28 79.295l-8.812-44.906c-.9-4.594 2.085-9.048 6.667-9.95 4.582-.903 9.027 2.09 9.927 6.682l8.8 44.904M64.445 72.771l-3.755-19.17c-.9-4.593 2.085-9.048 6.667-9.95 4.582-.902 9.027 2.09 9.927 6.683l3.757 19.145"/><path d="M81.03 69.487l-3.347-17.053c-.9-4.593 2.085-9.048 6.667-9.95 4.582-.903 9.027 2.09 9.927 6.683l3.347 17.053"/></g></g></svg>
    </span>
    <span class="guideSelect__text">{{ guideText }}</span>
  </aside>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    guideText: {
      type: String,
      default: '点击人物选择'
    }
  },
  mounted() {
    const timelineIcon = gsap.timeline({
      yoyo: true,
      repeat: -1
    })
    timelineIcon
    .to(this.$refs.icon, .5, {
      autoAlpha: 0
    })
    .to(this.$refs.icon, .35, {
      autoAlpha: 1
    })
    timelineIcon.timeScale(.5)
  }  
}
</script>

<style scoped>
.guideSelect {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  &__icon {
    width: 26px;
    height: 34px;
    line-height: 0;
  }
  &__text {
    font-size: 16px;
    color: #fff;
    margin-left: 12px;
  }

}
</style>