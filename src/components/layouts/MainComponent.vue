<template>
  <suspense>
    <div class="main">
      <router-view></router-view>
      <PlaySongComponent :song="store.currentSong"></PlaySongComponent>
    </div>
  </suspense>
</template>

<script lang="ts" setup>
import PlaySongComponent from '@/components/song/PlaySongComponent.vue'
import useSongStore from '@/store/song'

const store = useSongStore()
</script>

<style scoped lang="scss">
.main {
  flex: 1;
}
</style>
