<template>
  <Layout>
    <div class="statistics">
      <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
      <Tabs :data-source="yyy" />
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  ::v-deep .type-tabs-item {
    background: white;
    &.selected{
      background: #C4C4C4;
      &::after{
        display: none;
      }
    }
  }
</style>
<script lang="ts">
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    typeList = [
      { text: '支出', value: '-' },
      { text: '收入', value: '+' },
    ]
    type = '-'
    yyy = [
      { text: '按日', value: 'day' },
      { text: '按周', value: 'week' },
      { text: '按月', value: 'month' },
    ]
  }
</script>


<style scoped lang="scss">

</style>