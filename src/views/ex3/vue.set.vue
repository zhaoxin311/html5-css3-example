<template>
  <div>
    <h1>实例</h1>
    <hr />
    <div id="app">{{ count }}</div>
  </div>
</template>
<script>
var outData = {
  count: 1,
  goods: "car",
};
export default {
  name: "app",
  data() {
    return {
      data: outData,
    };
  },
};
</script>
