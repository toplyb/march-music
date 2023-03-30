<template>
  <div class="app">
    <div class="container">
      <IndexHeader></IndexHeader>
      <div class="app-body">
        <Aside></Aside>
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IndexHeader from '@/components/layouts/HeaderComponent.vue'
import Aside from '@/components/layouts/AsideComponent.vue'
import Main from '@/components/layouts/MainComponent.vue'
</script>

<style scoped lang="scss">
.app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid $font-gray-second-color;
    background-color: $window-bg;
    box-shadow: $big-white-shadow, $big-black-shadow;

    .app-body {
      display: flex;
      padding-top: 10px;
    }
  }
}
</style>
