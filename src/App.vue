<template>
  <div id="app">
    <div id="nav">
      <router-link to="/money">money</router-link>
      <router-link to="/label">label</router-link>
      <router-link to="/statistics">statistics</router-link>
      <router-link to="/404">other</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
