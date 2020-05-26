<template>
  <Layout>
    <div class="statistics">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" height="48px" class-prefix="interval"/>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  ::v-deep {
    .type-tabs-item {
      background: white;
      &.selected {
        background: #C4C4C4;
        &::after {
          display: none;
        }
      }
    }
    /*.interval-tabs-item {*/
    /*  height: 48px;*/
    /*}*/
  }
</style>
<script lang="ts">
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';
  import intervalList from '@/constants/intervalList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = '-';
    interval = 'day';
    recordTypeList = recordTypeList;
    intervalList = intervalList;
  }
</script>


<style scoped lang="scss">

</style>