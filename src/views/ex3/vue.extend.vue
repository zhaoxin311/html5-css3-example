<template>
  <div>
    <h1>vue.extend 扩展实例构造器</h1>
    <hr />
    <author></author>
    <div id="app"></div>
  </div>
</template>
<script>
import Vue from "vue";
var authorURL = Vue.extend({
  template: "<p><a href='authorURL'>{{authorName}}</a></p>",
  data() {
    return {
      authorName: "zhaoxin",
      authorURL: "https://github.com/zhaoxin311",
    };
  },
});
new authorURL().$mount("author");
</script>
