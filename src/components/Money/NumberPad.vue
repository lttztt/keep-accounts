<template>
  <div class="numberPad">
    <div class="output">
      <span>{{output}}</span>
    </div>
    <div class="calculator">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">ok</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {

    @Prop() readonly value!: number;
    output = this.value.toString();

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.output.length === 16) {
        return;
      }
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
          return;
        } else {
          this.output += input;
          return;
        }
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {
        return;
      }
      this.output += input;
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
        return;
      }
      this.output = this.output.slice(0, -1);
    }

    clear() {
      this.output = '0';
    }

    ok() {
      this.$emit('update:value', Number(this.output))
      this.$emit('submit', Number(this.output))
      this.output = '0'
    }
  }
</script>


<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      background: #fff;
      text-align: right;
      padding: 16px;
      @extend %insetShadow;

      > span {
        font-size: 36px;
        line-height: 40px;
      }
    }

    .calculator {
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 50%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*6%);
        }
      }
    }
  }
</style>
