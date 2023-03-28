<template>
  <suspense>
    <div>
      <router-view></router-view>
      <MusicBottomComponent></MusicBottomComponent>
    </div>
  </suspense>
</template>

<script lang="ts" setup>
import MusicBottomComponent from '@/components/music/MusicBottomComponent.vue'
</script>

<style scoped lang="scss">

</style>
