<template>
  <Layout class-prefix="money">
    <div class="money">
      {{recordList}}
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <Notes :value.sync="record.notes" />
      <Types :value.sync="record.type" />
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import {Component, Watch} from "vue-property-decorator";
  import model from "@/model";

  const recordList = model.fetch();

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: RecordItem[] = recordList
    record: RecordItem = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };
    saveRecord(){
      let record2:RecordItem = JSON.parse(JSON.stringify(this.record))
      record2.createAt = new Date()
      this.recordList.push(record2)
    }
    @Watch('recordList')
    onRecordListChange(value: RecordItem){
      window.localStorage.setItem('recordList', JSON.stringify(value))
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
