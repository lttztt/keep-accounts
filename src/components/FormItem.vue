<template>
  <div class="form-item">
    <label>
      <span class="form-label">{{label}}</span>
      <input type="text" :value="value" @input="onValueChange" :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop() readonly value!: string;
    @Prop({required: true}) label!: string;
    @Prop({default: '请输入'}) placeholder!: string;

    onValueChange(e: KeyboardEvent) {
      let input = e.target as HTMLInputElement;
      this.$emit('update:value', input.value);
    }
  }
</script>


<style scoped lang="scss">
  .form-item {

    > label {
      display: flex;
      align-items: center;

      .form-label {
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
