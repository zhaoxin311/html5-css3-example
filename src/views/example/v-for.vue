<template>
  <div class="about">
    <h1>v-for 实例</h1>
    <hr />
    <div id="app">
        <ul>
            <li v-for="item in items" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
     items:[25,52,41,69,53,47,55,84,55]
    };
  },
};
</script>
