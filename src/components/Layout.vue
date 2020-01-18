<template>
  <div class="layout">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
  export default {
    name: "Layout"
  };
</script>


<style scoped lang="scss">
  .layout{
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    height: 100vh;

    .content {
      flex-grow: 1;
      overflow: auto;
      border: 1px solid blue;
    }
    nav{
      box-shadow: 0 0 10px red;
    }
  }
</style>