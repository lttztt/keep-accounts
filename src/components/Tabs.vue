<template>
  <ul class="tabs">
    <li
      v-for="item in dataSource"
      :key="item.value"
      :class="liClass(item)"
      :style="liStyle"
      class="tabs-item"
      @click="selectTab(item)">{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceType = { text: string, value: string }

  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceType[];
    @Prop(String) readonly value!: string;
    @Prop(String) classPrefix?: string;
    @Prop({type: String, default: '64px'}) height?: string;

    get liStyle(){
      if(!this.height) return null
      return ({
        height: this.height
      })
    }

    liClass(tab: DataSourceType) {
      return {
        [this.classPrefix + '-tabs-item']: this.classPrefix,
        selected: tab.value === this.value
      };
    }

    selectTab(tab: DataSourceType) {
      this.$emit('update:value', tab.value);
    }
  }
</script>


<style  lang="scss">
  .tabs {
    color: #000;
    background: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;

    &-item {
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
</style>
