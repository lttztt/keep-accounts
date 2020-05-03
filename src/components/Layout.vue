<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-wrapper`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
  export default {
    name: "Layout",
    props: ['classPrefix']
  };
</script>


<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";
  .layout-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;

    .content {
      flex-grow: 1;
      overflow: auto;
      background: #f8f8f8;
    }
  }
</style>