<template>
  <div class="index">
    <template v-if="songStore.currentSongList.songCount > 0">
      <SongItemComponent v-for="(song, index) in songStore.currentSongList.songs" :key="index" :songItem="song" @play="setPlaySongHandler"></SongItemComponent>
    </template>
  </div>
</template>

<script lang="ts" setup>
import SongItemComponent from '@/components/song/SongItemComponent.vue'
import useSongStore from '@/store/song'
import useSongHook from '@/hooks/song'

const songStore = useSongStore()

const { setPlaySongHandler } = useSongHook()
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";

.index {
  min-width: 900px;
  max-height: 480px;
  min-height: 400px;
  overflow-y: scroll;
}
</style>
