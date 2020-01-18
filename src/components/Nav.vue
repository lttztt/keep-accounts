<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"/>
      <span>记账</span>
    </router-link>
    <router-link to="/label" class="item">
      <Icon name="label"/>
      <span>标签</span>
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="statistics"/>
      <span>统计</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
  export default {
    name: "Nav"
  };
</script>


<style scoped lang="scss">
  nav{
    display: flex;
    font-size: 12px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      /*width: 33.333%;*/
      padding: 2px 0;
    }
  }
</style>