<template>
  <div>
    <div class="bg" :data-show="visible" v-if="showMask"></div>
    <div class="container" :data-show="visible">
      <div class="inner" :data-show="visible">
        <div class="close" @click="handleMask" v-if="showMask"></div>
        <div class="line-back">
          <div></div>
          <div></div>
        </div>
        <div class="panel">
          <div class="header">
            <div class="title">{{title}}</div>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <div class="close-btn" @click="close">{{cancelText}}</div>
          </div>
        </div>
        <div class="line-front">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './style/index.less';
export default {
  name: 'KawayiModal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      defalut: '标题'
    },
    cancelText: {
      type: String,
      default: '关闭'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val;
    }
  },
  methods: {
    close () {
      this.visible = false;
      this.$emit('input', false);
      this.$emit('on-close');
    },
    handleMask () {
      if (this.maskClosable && this.showMask) {
        this.close();
      }
    }
  }
}
</script>
