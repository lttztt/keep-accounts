<template>
  <svg class="icon" @click="$emit('click', $event)">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script lang="ts">
  let importAll = (requireContent:__WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent)
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    name: "Icon",
    props: ['name']
  };
</script>


<style scoped lang="scss">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>