<template>
  <Layout class-prefix="money">
    <div class="money">
      {{recordList}}
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <FormItem
        label="备注"
        placeholder="请输入备注"
        :value.sync="record.notes" />
      <Types :value.sync="record.type" />
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from '@/components/Money/Tags.vue';
  import FormItem from '@/components/FormItem.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import {Component, Watch} from "vue-property-decorator";
  import recordListModel from "@/models/recordListModel";

  const recordList = recordListModel.fetch();

  @Component({
    components: {NumberPad, Types, FormItem, Tags}
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList: RecordItem[] = recordList
    record: RecordItem = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };
    saveRecord(){
      recordListModel.create(this.record)
    }
    @Watch('recordList')
    onRecordListChange(){
      recordListModel.save();
    }
  }
</script>

<!--  需要css影响其他地方可以不加scoped 一个vue文件中可以写多个style-->
<style lang="scss">
  .money-wrapper {
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


</style>
