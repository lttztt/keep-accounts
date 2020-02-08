<template>
  <div class="types">
    <ul>
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Types"
  };
</script>


<style scoped lang="scss">
  .types {
    ul {
      color: #000;
      background: #c4c4c4;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        height: 64px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        font-size: 24px;

        &.selected {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
            width: 100%;
            background: #000;
          }
        }
      }
    }
  }
</style>