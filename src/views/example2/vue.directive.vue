<template>
  <div>
    <h1>vue.directive 自定义指令 实例</h1>
    <hr />
    <div id="app">
      <div v-zx="color">{{ num }}</div>
      <p><button @click="add">add</button></p>
      <p><button>解绑-还未实现</button></p>
      <hr />
      <div>
        <h4>
          自定义指令有五个生命周期（也叫钩子函数），分别是
          bind,inserted,update,componentUpdated,unbind
        </h4>
        <span>
          1、bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。<br />
          2、inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。<br />
          3、update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。<br />
          4、componentUpdated:被绑定元素所在模板完成一次更新周期时调用。<br />
          5、unbind:只调用一次，指令与元素解绑时调用。<br />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import vue from "vue";
// vue.directive("zx", function (el, binding) {
//   // console.log(el);
//   // console.log(binding);
//   // console.log(binding.name);
//   // console.log(binding.value);
//   // console.log(binding.expression);
//   el.style = "color:" + binding.value;
// });
// function函数中一般会传三个值：el，binding，vnode
// el：是div的DOM元素  指令所绑定的元素，可以用来直接操作DOM。
// binding:是个对象，包含指令的很多信息,有很多我们常用的属性：name value expression
// vnode: Vue编译生成的虚拟节点。

vue.directive("zx", {
  bind: function (el, binding) {
    //被绑定
    console.log("1 - bind");
    el.style = "color:" + binding.value;
  },
  inserted: function () {
    //绑定到节点
    console.log("2 - inserted");
  },
  update: function () {
    //组件更新
    console.log("3 - update");
  },
  componentUpdated: function () {
    //组件更新完成
    console.log("4 - componentUpdated");
  },
  unbind: function () {
    //解绑
    console.log("5 - unbind");
  },
});
export default {
  name: "app",
  data() {
    return {
      num: 10,
      color: "green",
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>
