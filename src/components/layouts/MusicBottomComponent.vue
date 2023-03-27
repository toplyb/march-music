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
      <audio ref="audio" class="audio" controls :src="currentSong['url']" @ended="overAudio"></audio>
      <div class="audio-box">
        <div class="lyrics">
          <p>{{lyrics[0]['content']}}</p>
        </div>
        <div class="audio-icon">
          <i class="iconfont icon-bofangqi-bofangshu"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { computed, defineExpose, watch, ref, toRaw, reactive } from 'vue'
// import { useStore } from 'vuex'
// import api from '@/http/api'
//
// const audio = ref()
// defineExpose({ audio })
//
// const store = useStore()
// const currentSong = computed(() => {
//   return store.state.musicModel.currentPlaySong
// })
//
// const lyrics = reactive([])
// const currentLyrics = ref('')
// watch(currentSong, async (newValue) => {
//   console.log(newValue, 'newValue')
//   const lyricsResult = await api.get({
//     url: `/lyric?id=${newValue.id}`
//   })
//
//   store.commit('changeCurrentLyrics', lyricsResult)
//
//   const lyricsList = lyricsResult.lrc.lyric.split(/[\n]/)
//   lyricsList.forEach(item => {
//     const itemList = item.split(/\[(.+?)\]/)
//     const temp = {
//       time: itemList[1],
//       content: itemList[2]
//     }
//     lyrics.push(temp)
//   })
// })
//
// const overAudio = () => {
//   console.log('歌曲播放结束')
// }

</script>

<style scoped lang="scss">
@import "@/assets/scss/variable";

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
        color: $font-color;
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
      display: none;
    }

    .audio-box {
      display: flex;
      align-items: center;

      .lyrics {
        flex: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
      }

      .audio-icon {
        flex: 1;
        display: flex;
        align-items: center;

        i {
          font-size: 40px!important;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
