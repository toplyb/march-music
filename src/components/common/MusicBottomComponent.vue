<template>
  <div v-if="currentSong" class="music-bottom">
    <div class="left">
      <img class="song-img" :src="currentSong.picUrl" alt="">
      <p class="info">
        <span>{{ currentSong.name }}</span>
        <span>{{ currentSong.song.artists[0]['name'] }}</span>
      </p>
    </div>
    <div class="right">
      <audio id="audio" ref="audio" class="audio" controls :src="currentSong['url']" @ended="overAudio"></audio>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineExpose, ref } from 'vue'
import { useStore } from 'vuex'

const audio = ref()
defineExpose({ audio })

const store = useStore()
const currentSong = computed(() => {
  return store.state.musicModel.currentPlaySong
})

const overAudio = () => {
  console.log('歌曲播放结束')
}

</script>

<style scoped lang="less">
@import "../../assets/css/variable";

.music-bottom {
  width: 100%;
  height: 60px;
  border-top: 1px solid #e7e6e6;
  background-color: #fff;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;

  div {
    height: 100%;
  }

  .left {
    display: flex;
    .song-img {
      width: 60px;
    }

    .info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span:first-child {
        color: @font-color;
      }

      span:last-child {
        color: #b5b7bd;
        font-size: 15px;
      }
    }
  }

  .right {
    flex: 1;
    .audio {
      width: 400px;
    }
  }
}
</style>
