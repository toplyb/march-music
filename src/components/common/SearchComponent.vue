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
    border: none;
    background-color: $hover-bg;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 20px;
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
