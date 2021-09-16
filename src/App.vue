<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/v-if">v-if 实例</router-link> |
      <router-link to="/v-for">v-for 实例</router-link> |
      <router-link to="/v-text">v-text 实例</router-link> |
      <router-link to="/v-on">v-on 实例</router-link> |
      <router-link to="/v-model">v-model 指令 实例</router-link> |
      <router-link to="/v-bind">v-bind 指令 实例</router-link> |
      <router-link to="/v-pre">其他指令 实例</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
