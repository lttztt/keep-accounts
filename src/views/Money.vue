<template>
  <Layout class-prefix="money">
    <div class="money">
      <Tags :data-source.sync="tags" :value.sync="record.tags" />
      <Notes :value.sync="record.notes" />
      <Types :value.sync="record.type" />
      <number-pad :value.sync="record.amount"/>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import {Component} from "vue-property-decorator";

  type Record = {
    tags: string[],
    notes: string,
    type: string,
    amount: number
  }

  @Component({
    components: {NumberPad, Types, Notes, Tags}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {
      tags: [],
      notes: '',
      type: '-',
      amount: 0
    };
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
