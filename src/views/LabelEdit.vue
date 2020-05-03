<template>
  <layout>
    <div class="header">
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <div>
      <FormItem
        :value="tag.name"
        @update:value="update"
        label="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="remove">
      <Button>删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/FormItem.vue';
  import Button from '@/components/Button.vue';
  import tagListModel from '@/models/tagListModel';

  type Tag = {
    id: string
    name: string
  }

  @Component({
    components: {Button, FormItem}
  })
  export default class LabelEdit extends Vue {
    tag?: Tag = {
      id: '',
      name: ''
    }
    created(){
      console.log(this.$route.params);
      let tagId = this.$route.params.id;
      if(tagId){
        const ids = tagListModel.data.map(item => item.id);
        const index = ids.indexOf(tagId)
        console.log(index);
        if(index >= 0){
          this.tag = tagListModel.data[index]
          console.log(this.tag);
        }
      }
    }

    update(name: string){

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
  .remove{
    margin-top: 16px;
    text-align: center;
  }
</style>