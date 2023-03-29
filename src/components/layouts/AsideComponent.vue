<template>
  <div class="aside">
    <div class="aside-container">
      <!--<router-link v-for="side in sideList" :key="side.id" :to="side.path">{{ side.label }}</router-link>-->
    </div>
  </div>
</template>

<script lang="ts" setup>

// const sideList = [
//   {
//     id: 1,
//     label: '首页',
//     path: '/'
//   },
//   {
//     id: 2,
//     label: '歌手列表',
//     path: 'singer'
//   }
// ]
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable";

.aside {
  width: $aside-width;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  flex-shrink: 0;

  .aside-container {
    display: flex;
    flex-direction: column;

    a {
      cursor: pointer;
      color: $font-color;
      height: 20px;
      line-height: 20px;
      text-decoration: none;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        color: $font-hover-color;
        text-decoration: none;
        background-color: $hover-bg;
      }
    }
  }
}
</style>
