<template>
  <div id="app">
    <h1>v-on 实例</h1>
    <hr />
    <div>
      本场比赛得分：{{ score }}
      <p>
        <button v-on:click="add">加分</button>
        <button v-on:click="cut">减分</button><br />
        <input type="text" v-on:keyup.enter="onEnter" v-model="score2" />
      </p>
      <hr />
      <span
        >绑定键盘回车事件v-on:keyup.enter <br />
        此处enter是按键，可以根据键值表来定义键盘事件</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      score: 0,
      score2: 2,
    };
  },
  methods: {
    add() {
      this.score++;
    },
    cut() {
      this.score--;
    },
    onEnter() {
      //this.score = this.score + this.score2; //此处存在小bug  只能实现字符串相加
      this.score = this.score + parseInt(this.score2); //parseInt 能够实现数值型转换
    },
  },
};
</script>
