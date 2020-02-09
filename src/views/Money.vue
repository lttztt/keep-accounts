<template>
  <Layout class-prefix="money">
    <div class="money">
      <Tags :data-source.sync="tags"/>
      <Notes/>
      <Types/>
      <number-pad/>
    </div>
  </Layout>
</template>

<script>
  import Tags from '@/components/Money/Tags.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Types from '@/components/Money/Types.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';

  export default {
    name: 'Money',
    components: {NumberPad, Types, Notes, Tags},
    data() {
      return {
        tags: ['衣', '食', '住', '行']
      }
    }
  };
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