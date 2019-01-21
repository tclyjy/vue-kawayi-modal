<template>
  <div>
    <Bg :data-show="visible" v-if="showMask"></Bg>
    <Container :data-show="visible">
      <Inner :data-show="visible">
        <Close @click="handleMask" v-if="showMask"></Close>
        <LineBack>
          <div></div>
          <div></div>
        </LineBack>
        <Panel>
          <Header>
            <Title>{{title}}</Title>
          </Header>
          <Body>
            <slot></slot>
          </Body>
          <Footer>
            <CLoseBtn @click="close">{{cancelText}}</CLoseBtn>
          </Footer>
        </Panel>
        <LineFront>
          <div></div>
          <div></div>
        </LineFront>
      </Inner>
    </Container>
  </div>
</template>
<script>
import { Bg, Container, Inner, Close, LineBack, LineFront, Panel, Header, Title, Body, Footer, CLoseBtn } from './styles.js'
export default {
  name: 'KawayiModal',
  components: {
    Bg,
    Container,
    Inner,
    Close,
    LineBack,
    LineFront,
    Panel,
    Header,
    Title,
    Body,
    Footer,
    CLoseBtn
  },
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
