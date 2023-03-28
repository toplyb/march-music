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
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 3px 3px $window-bg;

    .app-body {
      display: flex;
      padding-top: 10px;
    }
  }
}
</style>
