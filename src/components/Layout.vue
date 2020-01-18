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
    height: 100vh;

    .content {
      flex-grow: 1;
      overflow: auto;
    }
    nav{
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
    }
  }
</style>