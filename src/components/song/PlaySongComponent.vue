<template>
  <div id="aplayer" class="audio-player">

  </div>
</template>

<script setup lang='ts'>
import APlayer from 'aplayer-ts'
import 'aplayer-ts/dist/APlayer.min.css'
import { onMounted, watch } from 'vue'

const props = defineProps({
  song: {
    type: Object,
    default() {
      return {}
    },
    required: false
  }
})

let player: any = null
onMounted(() => {
  player = new APlayer({
    container: document.getElementById('aplayer') as HTMLElement,
  })
})

watch(() => props.song, (newValue) => {
  player.list.clear()
  player.list.add({
    name: newValue.name,
    url: newValue.url,
  })
  player.play()
})
</script>

<style scoped lang='scss'>
.audio-player {
  border-radius: 5px;
  margin: 0;
  border: 1px solid $font-gray-second-color;
  background-color: $window-bg;
  box-shadow: inset $mid-black-shadow, inset $mid-white-shadow;
}
</style>

<style lang="scss">
.aplayer-body {
  .aplayer-pic {
    height: 80px;
    width: 80px;
    border-right: 1px solid $font-gray-second-color;
  }

  .aplayer-info {
    margin-left: 80px;
    padding: 14px 7px 14px 10px;
    height: auto;
  }
}
</style>
