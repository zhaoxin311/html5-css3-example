<template>
  <div>
    <h1>其他指令（v-pre | v-clock |v-once ） 实例</h1>
    <hr />
    <div id="app">
      <div v-pre>{{ message }}</div>
      <span> v-pre ：内容原样输出 不进行渲染</span>
      <hr />
      <div v-clock>页面加载时，渲染完成时才进行内容显示</div>
      <hr />
      <div v-once>{{ message }}</div>
      <div><input type="text" v-model="message" /></div>
      <div>{{ message }}</div>
      <span>v-once : 只进行一次渲染，数据绑定对上边的message无关</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "hhhhh",
    };
  },
};
</script>
