<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Tags"
  };
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
        background: #D9D9D9;
        $h: 24px;
        padding: 0 16px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        margin-right: 12px;
        margin-top: 4px;
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