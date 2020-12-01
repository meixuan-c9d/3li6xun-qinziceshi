<template>
  <button class="buttonProceed">
    <div
      v-if="selectTip" 
      class="buttonProceed__tip">
      <span class="buttonProceed__tipIcon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 36"><g fill="#FFF" fill-rule="nonzero" stroke="#969CA4"><path d="M25.593 14.547L24.509 9.03a2.705 2.705 0 00-3.183-2.14h0a2.716 2.716 0 00-2.138 3.188l-.122-.621a2.705 2.705 0 00-3.183-2.14h0a2.716 2.716 0 00-2.138 3.188 2.705 2.705 0 00-3.184-2.145h0a2.716 2.716 0 00-2.137 3.188L6.8 3.282a2.705 2.705 0 00-3.181-2.14h0A2.716 2.716 0 001.48 4.33l1.92 9.774c-.07.009-.141.017-.212.031a2.716 2.716 0 00-2.137 3.188l.39 1.98.928 4.728.188.96a12.328 12.328 0 005.216 7.856 12.29 12.29 0 009.235 1.86h0c6.67-1.313 11.012-7.794 9.7-14.474l-1.115-5.686h0z"/><path d="M9.622 17.687l-1.206-6.14a2.714 2.714 0 115.326-1.049l1.203 6.146"/><path d="M4.3 18.736L1.47 4.332a2.714 2.714 0 115.326-1.048l2.825 14.403M14.945 16.644l-1.205-6.15a2.714 2.714 0 115.326-1.048l1.207 6.141"/><path d="M20.269 15.59l-1.074-5.47a2.714 2.714 0 115.326-1.048l1.074 5.47"/></g></svg></span>
      <span class="buttonProceed__tipText">{{ selectTipText }}</span>
    </div>

    <div class="buttonProceed__button">
      <div 
        v-if="!isSymbol"
        class="buttonProceed__content buttonProceed__content--text"
      >
        {{ text }}
      </div>
      <div 
        v-else
        class="buttonProceed__content buttonProceed__content--symbol"
        data-symbol
      >
        <template v-if="!isSymbolCustom">
          <span class="buttonProceed__checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 42"><path d="M55.229 1.115a4 4 0 015.696 5.613l-.154.157-35.394 34a4 4 0 01-5.437.097l-.163-.154L1.171 22.213a4 4 0 015.499-5.807l.16.152 15.833 15.84L55.229 1.115z" fill="#FFF" fill-rule="nonzero"/></svg>
          </span>
        </template>
        
        <template v-else>
          <span 
            class="buttonProceed__customSymbolIcon"
            :style="isSymbolCustom.iconContainerStyle"
          >
            <slot></slot>
          </span>
          <span class="buttonProceed__customSymbolText">
            {{ isSymbolCustom.text }}
          </span>
        </template>
        
      </div>
    </div>

  </button>  
</template>

<script>
export default {
  props: {
    selectTip: {
      type: Boolean,
      default: false
    },
    selectTipText: {
      type: String,
      default: '点击人物选择'
    },
    text: {
      type: String
    },
    isSymbol: {
      type: Boolean
    },
    isSymbolCustom: {
      type: Object
    }
  }  
}
</script>

<style scoped>
.buttonProceed {
  display: block;
  position: absolute;
  /* --width: 79.733vw; */
  --width: 84.703%;
  width: var(--width);
  height: 0;
  padding-bottom: calc(var(--width) / 5.436);
  
  left: 50%;
  transform: translateX(-50%);
  bottom: 4.25%;

  /* border-radius: 27.5px;
  background: #346CC4; */

  &__tip {
    position: absolute;
    bottom: 121.818%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  &__tipIcon {
    width: 3.467vw;
    height: 4.533vw;
  }
  &__tipText {
    font-size: 13px;
    color: #fff;
    margin-left: 1.6vw;
  }


  &__button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 27.5px;

    display: flex;
    justify-content: center;
    align-items: center;

    &--text {
      --color: #346CC4;
      background: #fff;
      border: 3px solid var(--color);
      
      font-size: 18px;
      color: var(--color);
      font-weight: 600;
    }

    &--symbol {
      background:#346CC4;
      
    }
  }

  &__checkmark {
    --width: 10.368%;
    width: var(--width);
    height: 0;
    padding-bottom: calc(var(--width) / 1.476);
    position: relative;
  }

  &__customSymbolIcon {
    position: relative;
  }

  &__customSymbolText {
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    margin-left: 2.675%;
  }
}
</style>