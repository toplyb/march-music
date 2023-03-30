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
  cursor: pointer;
  border-radius: 5px;
  padding: 0 10px;

  &:hover {
    background-color: $hover-bg;
    box-shadow: inset 0 0 10px 10px rgba(234, 234, 237, 0.09);
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
    i {
      font-size: 30px;
      border-radius: 50%;
      color: $font-gray-second-color;

      &:hover {
        box-shadow: 0 0 3px 3px $font-gray-second-color;
        color: $font-color;
      }
    }
  }
}
</style>
