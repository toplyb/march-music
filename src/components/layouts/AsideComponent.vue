<template>
  <div class="aside">
    <div class="aside-container">
      <router-link to="/">首页</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable";

.aside {
  width: $aside-width;
  height: 100%;
  overflow-y: scroll;
  padding-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;

  .aside-container {
    padding-left: 10px;
    a {
      cursor: pointer;
      color: $font-color;
      text-decoration: none;

      &:hover {
        color: $font-hover-color;
        text-decoration: none;
      }
    }
  }
}
</style>
