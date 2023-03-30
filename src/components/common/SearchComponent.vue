<template>
  <div class="search">
    <input type="text" placeholder="search" v-model="store.inputValue" @keyup.enter="searchHandler">
  </div>
</template>

<script lang="ts" setup>
import useSearchStore from '@/store/search'
import useSearchHook from '@/hooks/search'

const store = useSearchStore()
const { searchHandler } = useSearchHook()
</script>

<style scoped lang="scss">
.search {
  input {
    display: inline-block;
    width: 500px;
    background-color: $window-bg;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid $font-gray-second-color;
    box-shadow: inset $mid-white-shadow, inset $mid-black-shadow;
  }

  input:focus {
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: rgb(178, 175, 175);
  }

  input:-ms-input-placeholder {
    color: #999;
  }

  input:-moz-placeholder {
    color: #999;
  }

  input::-moz-placeholder {
    color: #999;
  }
}
</style>
