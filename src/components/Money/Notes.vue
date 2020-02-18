<template>
  <div class="notes">
    <label>
      <span class="name">备注{{value}}</span>
      <input type="text"
             @input="onInput"
             :value="value"
             placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';
    onInput(event:KeyboardEvent){
      let input = event.target as HTMLInputElement;
      this.value = input.value;
    }
  }
</script>


<style scoped lang="scss">
  .notes {
    background: #E5E5E5;

    > label {
      display: flex;
      align-items: center;

      .name {
        margin: 0 12px;
      }

      > input {
        height: 64px;
        border: none;
        background: transparent;
        flex-grow: 1;
      }
    }
  }
</style>