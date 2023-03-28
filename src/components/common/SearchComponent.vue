<template>
  <div class="search">
    <input type="text" placeholder="search">
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.search {
  input {
    display: inline-block;
    width: 500px;
    border: none;
    background-color: #f4f5f8;
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
