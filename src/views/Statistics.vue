<template>
  <Layout>
    <div class="statistics">
      <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"/>
      <Tabs :data-source="intervalList" :value.sync="interval" height="48px" class-prefix="interval"/>
      <ol>
        <li
          v-for="(group, index) in result"
          :key="index"
        >
          <h3 class="title">{{group.title}}</h3>
          <ol>
            <li
              class="record"
              v-for="item in group.items" :key="item.id">
              <span>{{tagString(item.tags)}}</span>
              <span class="notes">{{item.notes}}</span>
              <span>￥{{item.amount}} </span>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>
<script lang="ts">
  import Vue from 'vue';
  import Tabs from '@/components/Tabs.vue';
  import {Component} from 'vue-property-decorator';
  import recordTypeList from '@/constants/recordTypeList';
  import intervalList from '@/constants/intervalList';
  import dayjs from 'dayjs'

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    beforeCreate(){
      this.$store.commit('fetchRecords')
    }
    get recordList(){
      return (this.$store.state as RootState).recordList;
    }
    get result(){
      const {recordList} = this;

      type HashTableValue = {title: string, items: RecordItem[]};
      const hashTable: {[key: string]: HashTableValue} = {};
      for(let i = 0; i < recordList.length; i++){
        const [date, time ] = recordList[i].createAt!.split('T')
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      console.log(hashTable);
      return hashTable;
    }

    tagString(tags: Tag[]){
      if(tags.length === 0) return '无'
      let tagTextArray = tags.map(tag=> tag.name);
      return tagTextArray.join(',')
    }
    type = '-';
    interval = 'day';
    recordTypeList = recordTypeList;
    intervalList = intervalList;
  }
</script>


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