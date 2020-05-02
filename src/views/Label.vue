<template>
  <Layout>
    <div class="label">
      <ol>
        <li>
          <span>衣</span>
          <Icon name="right" />
        </li>
        <li>
          <span>食</span>
          <Icon name="right" />
        </li>
        <li>
          <span>住</span>
          <Icon name="right" />
        </li>
        <li>
          <span>行</span>
          <Icon name="right" />
        </li>
      </ol>

      <div class="createLabel-wrapper">
        <button class="createLabel">新建标签</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

  import Vue from 'vue'
  import {Component} from "vue-property-decorator";

  @Component
  export default class Label extends Vue {

  }
</script>


<style scoped lang="scss">
  .label ol{
    background: #fff;
    > li{
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 40px;
      border-bottom: 1px solid #7d7d7d;
      margin-left: 16px;
      padding-right: 16px;
      .icon {
        width: 18px;
        height: 18px;
        color: #333;
      }
    }
  }
  .createLabel-wrapper {
    text-align: center;
    padding-top: 16px;
    margin-top: 44-16px;
    .createLabel {
      background: #767676;
      color: #fff;
      line-height: 40px;
      border: none;
      border-radius: 4px;
      padding: 0 16px;
    }
  }

</style>
