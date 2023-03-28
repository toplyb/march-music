<template>
  <div id="aplayer" class="audio-player">

  </div>
</template>

<script setup lang='ts'>
import APlayer from 'aplayer-ts'
import 'aplayer-ts/dist/APlayer.min.css'
import { onMounted } from 'vue'

onMounted(() => {
  new APlayer({
    container: document.getElementById('aplayer') as HTMLElement,
    audio: [{
      name: 'name',
      artist: 'artist',
      url: 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3\n',
      cover: 'https://ui-avatars.com/api/?background=0D8ABC&color=fff'
    }]
  });
})
</script>

<style scoped lang='scss'>
.audio-player {
  border-radius: 5px;
  margin: 0;
}
</style>
