<template>
  <div class="types">
    <ul>
      <!--   动态绑定类的两种写法   -->
      <li
        :class="value === '-' && 'selected'"
        @click="selectType('-')">支出
      </li>
      <li
        :class="{selected: value === '+'}"
        @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop(Number) xxx: number | undefined;
    // @Prop 告诉 Vue xxx不是data而是prop
    // (Number) 告诉 Vue xxx运行时是个 Number
    // xxx 属性名
    // number | undefined: 告诉 TS xxx 在编译时的类型

    // type = '-';  // '-'表示支出 '+'表示收入
    @Prop() readonly value!: string;
    selectTab(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type)
    }
  }
  // export default {
  //   name: "Types",
  //   data() {
  //     return {
  //       type: '-' // '-'表示支出 '+'表示收入
  //     }
  //   },
  //   methods: {
  //     selectTab(type) {
  //       this.type = type;
  //     }
  //   }
  // };
</script>


<style scoped lang="scss">
  .types {
    ul {
      color: #000;
      background: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        height: 64px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        font-size: 24px;

        &.selected {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: #000;
          }
        }
      }
    }
  }
</style>
