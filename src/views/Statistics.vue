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
          <h3 class="title">{{beautify(group.title)}}<span>{{group.total}}</span></h3>
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
  import clone from '@/lib/clone';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    beforeCreate(){
      this.$store.commit('fetchRecords')
    }

    beautify(string:string){
      const day = dayjs(string)
      const now = dayjs();
      if(day.isSame(now, 'day')){
        return '今天'
      }else if(day.isSame(now.subtract(1, 'day'), 'day')){
        return '昨天'
      }else if(day.isSame(now.subtract(2, 'day'), 'day')){
        return '前天'
      }else if(day.isSame(now, 'year')){
        return day.format('M月D日')
      }else {
        return day.format('YYYY年M月D日')
      }
    }
    get recordList(){
      return (this.$store.state as RootState).recordList;
    }
    get result(){
      const {recordList} = this;

      if(recordList.length === 0) {return [];}

      // 赋值一个recordList并按照日期排序
      const newList = clone(recordList).sort((a,b)=> dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
      type Result = {
        title: string,
        total?: number,
        items: RecordItem[]
      }[]

      const result: Result = [{
          title: dayjs(newList[0].createAt).format('YYYY-MM-DD'),
          items: [newList[0]]
        }]
      // 因为数组已经安装createAt的日期降序排列， 所有确保循环的当前项 和数组当前最后一项比较即可
      for(let i = 1; i < newList.length; i++){
        const current = newList[i];
        const last = result[result.length-1];
        if(dayjs(last.title).isSame(dayjs(current.createAt), 'day')){
          last.items.push(current)
        }else {
          result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]})
        }
      }

      result.map(group => {
        group.total = group.items.reduce((sum, item)=>{
          return sum += item.amount
        },0)
      })

      return result;
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