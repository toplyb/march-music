<template>
  <div class="song-item" @dblclick="playMusic">
    <h3>{{props.songItem.name}}</h3>
    <p v-for="singer in props.songItem.artists" :key="singer.id">{{singer.name}}</p>
    <span>{{timeBySong(props.songItem.duration)}}</span>
    <div class="handler-icon">
      <i @click="playMusic" class="iconfont icon-bofangqi-bofangshu"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import moment from 'moment'
const props = defineProps({
  songItem: {
    type: Object,
    default() {
      return {}
    }
  }
})

const timeBySong = (data: string) => {
  return moment.utc(data).format('HH:mm:ss')
}

const emits = defineEmits(['play'])

const playMusic = () => {
  emits('play', props.songItem)
}
</script>

<style scoped lang='scss'>
.song-item {
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: $window-bg;
  box-shadow: $mid-black-shadow, $mid-white-shadow;
  margin: 30px 15px;
  border: 1px solid $font-gray-second-color;

  &:hover {
    box-shadow: inset $mid-white-shadow, inset $mid-black-shadow;
  }

  h3, p, span {
    flex: 1;
  }

  h3 {
    color: $font-color;
  }

  p {
    color: $font-gray-color;
  }

  span {
    color: $font-gray-second-color;
  }

  .handler-icon {
    width: 50px;
    cursor: pointer;
    i {
      font-size: 40px;
      border-radius: 50%;
      color: $font-gray-second-color;

      &:hover {
        background-color: $window-bg;
        box-shadow: inset $mid-black-shadow, inset $mid-white-shadow;
        color: $font-color;
      }
    }
  }
}
</style>
