<template>
  <div>
    <h1>v-model 实例--双向数据绑定</h1>
    <hr />
    <div id="app">
      <p>原始文本信息：{{ message }}自知则知之</p>
      <h3>文本框</h3>
      <br />
      <p>1.文本实时发生改变<br /><input type="text" v-model="message" /></p>
      <p>
        2. .lazy 的作用是延迟文本变化，在input失去焦点的时候，文本才发生改变<br /><input
          type="text"
          v-model.lazy="message"
        />
      </p>
      <p>
        3. .number文本必须为数字，非数字时会自动忽略<br />如果最先输入的是字符串
        如：www212，该修饰符无效<input type="text" v-model.number="message" />
      </p>
      <p>4. 去空格修饰符<br /><input type="text" v-model.trim="message" /></p>
      <hr />
      <h3>文本域 数据绑定</h3>
      <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
      <hr />
      <h3>多选框绑定一个值</h3>
      <input type="checkbox" id="isTrue" v-model="isTrue" />
      <label for="isTrue">{{ isTrue }}</label>
      <hr />
      <h3>多选框绑定一个数组</h3>
      <p>
        <input type="checkbox" id="jspang" value="jspang" v-model="web_names" />
        <label for="isTrue">jspang</label>
        <input type="checkbox" id="panan" value="panan" v-model="web_names" />
        <label for="isTrue">panan</label>
        <input type="checkbox" id="aim" value="aim" v-model="web_names" />
        <label for="isTrue">aim</label>
        <input type="checkbox" id="wang" value="wang" v-model="web_names" />
        <label for="isTrue">wang</label>
      </p>
      <p>{{ web_names }}</p>
      <hr />
      <h3>单选按钮绑定数据</h3>
      <p>
        <input type="radio" id="boy" value="男" v-model="sex" />
        <label for="one">男</label>
        <input type="radio" id="girl" value="女" v-model="sex" />
        <label for="one">女</label>
      </p>
      <p>您选择的性别是：{{ sex }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "",
      isTrue: true,
      web_names: [],
      sex: "",
    };
  },
};
</script>
