<template>
  <div id="app">
    <h1>v-text & v-html 实例</h1>
    <hr />
    <div id="app">
      <span>{{ message }}</span
      >=<span v-text="message"></span>
      <hr />
      <span>{{ dodo }}</span
      >=<span v-html="dodo"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "hi zhaoxin!!",
      dodo: "<h2>hihihihihihi</h2>",
    };
  },
};
</script>
