<template>
  <div id="app">
    <div class="title" @click="show=true">Kawayi Modal</div>
    <div class="btn" @click="show=true">Show Modal</div>
    <KawayiModal v-model="show" title="Hello Kawayi Modal" cancel-text="关闭">
      <div class="table">
        <table>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
          <tr>
            <td>value</td>
            <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>title</td>
            <td>对话框标题</td>
            <td>String</td>
            <td>标题</td>
          </tr>
          <tr>
            <td>cancel-text</td>
            <td>关闭按钮文字内容</td>
            <td>String</td>
            <td>关闭</td>
          </tr>
          <tr>
            <td>show-mask</td>
            <td>是否显示遮罩层</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>mask-closable</td>
            <td>是否允许点击遮罩层关闭</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
        </table>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>返回值</th>
          </tr>
          <tr>
            <td>on-close</td>
            <td>点击关闭的回调</td>
            <td>无</td>
          </tr>
        </table>
      </div>
    </KawayiModal>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbf4f1;
  background-image: url("./assets/bg.png");
  background-size: 15px;
}
#app {
  text-align: center;
  padding-top: 30px;
}
#app > .title {
  font-family: "Georgia";
  font-size: 60px;
  font-weight: bold;
  color: rgb(93, 53, 35);
}
.btn {
  width: 150px;
  margin: 30px auto;
  appearance: none;
  border: none;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.2em;
  background-color: #c2617e;
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
}
.table {
  padding: 0px 15px;
}
.table > table {
  font-size: 12px;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
  width: 100%;
  margin-bottom: 24px;
}
.table tr th {
  background: #f7f7f7;
  white-space: nowrap;
  color: #5c6b77;
  font-weight: 600;
  border: 1px solid #e9e9e9;
  padding: 3px 8px;
  text-align: left;
}
.table tr td {
  border: 1px solid #e9e9e9;
  padding: 3px 8px;
  text-align: left;
}
</style>
