<template>
  <Layout class-prefix="money">
    <div class="money">
      <div class="tags">
        <ul class="current">
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <div class="new">
          <button>新增标签</button>
        </div>
      </div>
      <div class="notes">
        <label>
          <span class="name">备注</span>
          <input type="text" placeholder="在这里添加备注">
        </label>
      </div>
      <div class="type">
        <ul>
          <li class="selected">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">
          <span>100</span>
        </div>
        <div class="calculator">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">ok</button>
          <button class="zero">0</button>
          <button>.</button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: "Money"
  };
</script>

<!--  需要css影响其他地方可以不加scoped 一个vue文件中可以写多个style-->
<style lang="scss">
  .money-wrapper{
    display: flex;
  }
</style>
<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .money {
    background: #E3E3E3;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

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
        &.ok{
          height: 64*2px;
          float: right;
        }
        &.zero{
          width: 50%;
        }
        $bg: #f2f2f2;
        &:nth-child(1){
          background: $bg;
        }
        &:nth-child(2), &:nth-child(5){
          background: darken($bg, 4%);
        }
        &:nth-child(3), &:nth-child(6), &:nth-child(9){
          background: darken($bg, 4*2%);
        }
        &:nth-child(4), &:nth-child(7), &:nth-child(10){
          background: darken($bg, 4*3%);
        }
        &:nth-child(8), &:nth-child(11), &:nth-child(13){
          background: darken($bg, 4*4%);
        }
        &:nth-child(12){
          background: darken($bg, 4*5%);
        }
        &:nth-child(14){
          background: darken($bg, 4*6%);
        }
      }
    }
  }

  .type {
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

  .tags {
    padding: 16px;
    background: #fff;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    > .current {
      flex-grow: 1;
      display: flex;
      color: #484848;
      flex-wrap: wrap;
      > li {
        background: #D9D9D9;
        $h: 24px;
        padding: 0 16px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        margin-right: 12px;
        margin-top: 4px;
      }
    }

    > .new {
      color: #999;

      button {
        border: none;
        background: transparent;
        line-height: 24px;
        padding: 0 4px;
        border-bottom: 1px solid;
      }
    }
  }
</style>