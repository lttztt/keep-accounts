<template>
  <div class="types">
    <ul>
<!--   动态绑定类的两种写法   -->
      <li
        :class="type === '-' && 'selected'"
        @click="selectType('-')">支出</li>
      <li
        :class="{selected: type === '+'}"
        @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="js">
  export default {
    name: "Types",
    data() {
      return {
        type: '-' // '-'表示支出 '+'表示收入
      }
    },
    methods: {
      selectType(type) {
        this.type = type;
      }
    }
  };
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