<template>
  <div class="notes">
    <label>
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Notes"
  };
</script>


<style scoped lang="scss">
  .notes {
    background: #E5E5E5;

    > label {
      display: flex;
      align-items: center;

      .name {
        margin: 0 12px;
      }

      > input {
        height: 64px;
        border: none;
        background: transparent;
        flex-grow: 1;
      }
    }
  }
</style>