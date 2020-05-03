<template>
  <button class="button" @click="$emit('click', $event)">
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>


<style scoped lang="scss">
  .button {
    background: #767676;
    color: #fff;
    line-height: 40px;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
  }
</style>