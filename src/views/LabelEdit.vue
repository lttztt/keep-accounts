<template>
  <layout>
    <div class="header">
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <div>
      <FormItem
        label="标签名"
        placeholder="请输入标签名"
      />
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/FormItem.vue';
  @Component({
    components: {FormItem}
  })
  export default class LabelEdit extends Vue {
    created(){
      console.log(this.$route.params);
    }
  }
</script>


<style scoped lang="scss">
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    .icon {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 16px;
    }
  }
</style>