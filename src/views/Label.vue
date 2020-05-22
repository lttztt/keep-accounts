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
        <Button @click="createTag">新建标签</Button>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component({
    components: {
      Button
    }
  })
  export default class Label extends mixins(TagHelper) {
    created() {
      this.$store.commit('fetchTags');
    }

    get tags() {
      return this.$store.state.tagList;
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
  }

</style>
