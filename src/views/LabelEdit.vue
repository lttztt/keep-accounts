<template>
  <layout>
    <div class="header">
      <Icon name="left" @click="goBack"/>
      <span>编辑标签</span>
    </div>
    <div>
      <FormItem
        :value="currentTag.name"
        @update:value="update"
        label="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="remove">
      <Button @click="remove">删除标签</Button>
    </div>
  </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import FormItem from '@/components/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FormItem}
  })
  export default class LabelEdit extends Vue {
    get currentTag() {
      return this.$store.state.currentTag;
    }

    created() {
      console.log(this.$route.params);
      this.$store.commit('fetchTags');
      this.$store.commit('findTag', this.$route.params.id);
      if (!this.currentTag) {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.currentTag) {
        this.$store.commit('updateTag', {
          id: this.currentTag.id, name
        });
      }
    }

    remove() {
      if (this.currentTag) {
        this.$store.commit('removeTag', this.currentTag.id)
      }
    }

    goBack() {
      console.log('back');
      this.$router.back();
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
    background: #fff;

    .icon {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 16px;
    }
  }

  .remove {
    margin-top: 16px;
    text-align: center;
  }
</style>