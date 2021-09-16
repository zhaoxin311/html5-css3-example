<template>
  <div>
    <h1>v-bind 指令实例</h1>
    <hr />
    <div id="app">
      <span>v-on ：绑定监听事件</span><br />
      <span>v-model ： 绑定数据源</span><br />
      <span>v-bind ：绑定标签上的属性</span>
      <hr />
      <p><img v-bind:src="imgSrc" width="200px" /></p>
      <p><a v-bind:href="webHref" target="_blank">个人笔记本</a></p>
      <hr />
      <div :class="className">1、绑定class</div>
      <div :class="{ classB: isOk }">2、绑定class中的判断</div>
      <div :class="[classA, classB]">3、绑定class中的数组</div>
      <div :class="isOk ? classA : classB">3、绑定class中的三元运算符</div>
      <hr />
      <div>
        <input type="checkbox" id="isOk" v-model="isOk" />
        <label for="isOk">isOk={{ isOk }}</label>
      </div>
      <hr />
      <div :style="{ color: red, fontSize: font }">5、绑定Style</div>
      <div :style="styleObject">6、对象绑定Style</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "hhhhhhhhhhhh",
      webHref: "https://www.wolai.com/hTCv7hQJ3cDZ4Xr6iZ6qA5",
      imgSrc: "https://es6.ruanyifeng.com/images/cover-3rd.jpg",
      className: "classA",
      isOk: true,
      classA: "classA",
      classB: "classB",
      red: "red",
      font: "20px",
      styleObject: {
        color: "green",
        fontSize: "24px",
      },
    };
  },
};
</script>
<style scoped>
.classA {
  color: red;
}
.classB {
  font-size: 24px;
}
</style>
