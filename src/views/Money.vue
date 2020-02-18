<template>
  <Layout class-prefix="money">
    <div class="money">
      <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
      <Notes @update:value="onUpdateNotes"/>
      <Types :value.sync="record.type"/>
      <number-pad :value.sync="record.amount" @submit="saveRecord"/>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import {Component, Watch} from 'vue-property-decorator';

  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createAt?: Date // 除了数据类型 还可以是 类 (构造函数)
  }

  @Component({
    components: {NumberPad, Types, Notes, Tags},
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0
    };

    onUpdateTags(value: string[]) {
      console.log('onUpdateTags', value);
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      let record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createAt = new Date();
      this.recordList.push(record2);
      console.log('this.record:', this.recordList);
    }
    @Watch('recordList')
    onRecordListChange(){
      let recordList = JSON.stringify(this.recordList);
      window.localStorage.setItem('recordList', recordList);
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