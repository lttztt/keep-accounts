<template>
  <nav>
    <router-link to="/label" class="item" active-class="selected">
      <Icon name="label"/>
      <span>标签</span>
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      <span>记账</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
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
  @import "~@/assets/style/helper.scss";
  nav{
    display: flex;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      /*width: 33.333%;*/
      padding: 5px 0;
      cursor: pointer;
      > .icon{
        width: 25px;
        height: 25px;
      }
      > span{
        font-size: 14px;
      }
      &.selected{
        color: $color-red;
      }
    }
  }
</style>