<template>
  <div class="index">
    <ul class="song-list">
      <li class="song-header">
        <p class="title">歌曲名</p>
        <p class="singer">歌手</p>
        <p class="album">专辑</p>
        <p class="duration">时间</p>
        <p class="duration"></p>
      </li>
      <li v-for="item in songList" :key="item.id" @dblclick="changeCurrentMusic(item)" :class="{'current-song-item': item.id === currentPlaySong.id}">
        <music-item-component :song="item"></music-item-component>
      </li>
    </ul>
    <MusicBottom ref="childAudio"></MusicBottom>
  </div>
</template>

<script lang="ts" setup>
// import { onMounted, reactive, ref } from 'vue'
// import { useStore } from 'vuex'
//
// import { NewSongList } from '@/types/Index/music'
//
import MusicBottom from '@/components/layouts/MusicBottomComponent.vue'
import MusicItemComponent from '@/components/Index/MusicItemComponent.vue'
// import { url } from '@/http/url'
// import api from '@/http/api'
//
// const store = useStore()
// const currentPlaySong = ref({})
//
// // 拿到首页的歌曲列表
// let songList = reactive(store.state.musicModel.indexHotSong)
// if (!songList) {
//   const data = await api.get<NewSongList>({
//     url: url.newSong
//   })
//   songList = data.result.map((item: any) => {
//     item.song.bMusic.playTime = `${(item.song.bMusic.playTime / 1000 / 60).toFixed(2)}s`
//     return item
//   })
//
//   store.commit('changeIndexHotSong', songList)
// }
//
// // 获取子组件中的 audio dom
// const childAudio = ref()
// let audioDom:HTMLAudioElement
// onMounted(() => {
//   audioDom = childAudio.value.audio
// })
//
// // 拿到首页播放歌曲的详情
// const getPlaySongDetail = async (song: object, dbClick?: boolean) => {
//   const { data } = await api.get({
//     url: `song/url?id=${song.id}`
//   })
//   currentPlaySong.value = {
//     ...song,
//     url: data[0].url
//   }
//   store.commit('changeCurrentPlaySong', currentPlaySong)
//   if (dbClick) {
//     setTimeout(() => {
//       audioDom.play()
//     }, 100)
//   }
// }
//
// // 初始化播放歌曲
// if (!store.state.musicModel.currentPlaySong) {
//   getPlaySongDetail(songList[0])
// }
//
// // 歌曲的点击切换事件
// const changeCurrentMusic = (song: any) => {
//   getPlaySongDetail(song, true)
// }
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable";

.index {
  flex: 1;
  flex-shrink: 0;
  padding-top: 50px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;

  .song-list {
    height: 500px;
    overflow-y: scroll;
    box-sizing: border-box;

    .song-header {
      cursor: default;

      &:hover {
        color: $font-color;
      }
    }

    li {
      margin-bottom: 30px;
      margin-right: 10px;
      color: $font-color;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;

      &:hover:not(.current-song-item):not(:first-child) {
        color: $font-hover-color;
        background-color: rgba(107,94,187, 0.3);
      }

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .title {
        width: 300px;
      }

      .singer {
        width: 150px;
      }

      .album {
        width: 200px;
        flex-shrink: 0;
      }

      .duration {
        width: 50px;
      }
    }

    .current-song-item {
      color: $white;
      background-color: rgba(107,94,144, 0.5);
    }
  }

}
</style>
