<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper) {
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
