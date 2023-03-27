<template>
  <p class="title">{{ props.song.name }}</p>
  <p class="singer">{{ props.song.song.artists[0]['name'] }}</p>
  <p class="album">{{ props.song.name }}</p>
  <p class="duration">{{ props.song.song.bMusic.playTime }}</p>
  <p class="duration play-icon">
    <i class="iconfont icon-bofangqi-bofangshu"></i>
  </p>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
//
// const props = defineProps({
//   song: {
//     type: Object,
//     default: null
//   }
// })

</script>

<style scoped lang="scss">
@import "@/assets/scss/variable";

li {
  margin-bottom: 30px;
  color: $font-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: $font-hover-color;
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

  .play-icon {
    text-align: center;
    i {
      font-size: 25px;
    }
  }
}
</style>
