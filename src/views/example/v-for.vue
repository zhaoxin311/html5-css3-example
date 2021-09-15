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
        <hr>
        <ul>
            <li v-for="(student ,index) in students" :key="index">
               {{index+1}}. 姓名：{{student.name}}---年龄：{{student.age}}

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
     items:[25,52,41,69,53,47,55,84,55],
     students :[
         {name:'西还会',age:11},
         {name:'找找找',age:12},
         {name:'赵化通',age:12},
         {name:'赵欣欣',age:51},
         {name:'赵小溪',age:43},
         {name:'小花花',age:21},
     ]
    };
  },
  computed:{
    // sortItems:function(){
    //       return this.items.sort();
    // }
}
};
</script>
