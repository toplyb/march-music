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
import IndexHeader from '@/components/layouts/IndexHeaderComponent.vue'
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
    width: 1240px;
    height: 700px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px 3px $window-bg;

    .app-body {
      display: flex;
      height: 615px;
      flex-shrink: 0;
    }
  }
}
</style>
