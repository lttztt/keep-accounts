<template>
  <Layout>
    <div class="label">
      <div class="tags">
        <router-link
          :to="`/label/edit/${tag.id}`"
          v-for="tag in tags"
          class="tag"
          :key="tag.id">
          <span>{{tag.name}}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新建标签</button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/models/tagListModel';

  @Component
  export default class Label extends Vue {
    tags = tagListModel.fetch();
    createTag(){
      let tag = window.prompt('请输入标签名');
      if(tag) {
        let message = tagListModel.create(tag)
        if(message === 'duplicated'){
          window.alert('标签名重复')
        }else if(message === 'success') {
          window.alert('创建成功')
        }
      }
    }
  }
</script>


<style scoped lang="scss">
  .label .tags {
    background: #fff;

    > .tag {
      font-size: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 40px;
      border-bottom: 1px solid #e6e6e6;
      margin-left: 16px;
      padding-right: 16px;

      .icon {
        width: 18px;
        height: 18px;
        color: #333;
      }
    }
  }

  .createTag-wrapper {
    text-align: center;
    padding-top: 16px;
    margin-top: 44-16px;

    .createTag {
      background: #767676;
      color: #fff;
      line-height: 40px;
      border: none;
      border-radius: 4px;
      padding: 0 16px;
    }
  }

</style>
