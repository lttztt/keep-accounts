<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
    <div class="new">
      <button @click="newTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly value!: string[];

    created(){
      this.$store.commit('fetchTags')
    }

    get tagList (){
      return this.$store.state.tagList;
    }

    selectedTags: string[] = this.value;

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

    newTag() {
      let name = window.prompt('请输入标签名?')!;
      if (name && name.trim() === '') {
        return window.alert('标签名不能为空');
      }
      this.$store.commit('createTag', name)
    }
  }
</script>


<style scoped lang="scss">
  .tags {
    padding: 16px;
    background: #fff;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    > .current {
      flex-grow: 1;
      display: flex;
      color: #484848;
      flex-wrap: wrap;

      > li {
        $bg: #D9D9D9;
        background: $bg;
        $h: 24px;
        padding: 0 16px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: darken($bg, 40%);
          color: #eee;
        }
      }
    }

    > .new {
      color: #999;

      button {
        border: none;
        background: transparent;
        line-height: 24px;
        padding: 0 4px;
        border-bottom: 1px solid;
      }
    }
  }
</style>
