<template>
  <div class="about">
    <h1>v-if & v-else & v-show 实例</h1>
    <hr />
    <div id="app">
      <div v-if="isLogin">你好！if朋友！！</div>
      <div v-else>朋友，我看不到你！！</div>
      <div v-show="isLogin">你好！show朋友！！</div>
      <hr />
      <h3>v-if && v-show 的区别</h3>
      <span>1.v-if：判断是否加载，可以减轻服务器的压力，在需要时加载</span>
      <br />
      <span>2.v-show：调整 css display 属性，可以使客户端操作更加流畅</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>
