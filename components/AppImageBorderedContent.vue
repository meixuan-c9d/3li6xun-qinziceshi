<template>
  <div 
    class="imageBorderedContent"
    :style="{
      width,
      height,
      backgroundColor
    }"
    :class="{'imageBorderedContent--fullScreen': fullScreen}"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    fullScreen: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
.imageBorderedContent {

  transition: background-color .35s;

  border: solid 11px;
  border-image-source: url('~assets/border-image.svg');
  border-image-slice: 25%;
  border-image-repeat: repeat;
  border-image-width: 45px;

  &--fullScreen {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  
}
</style>