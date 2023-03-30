<template>
  <div class="header">

    <div class="left">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="center">
      <div class="arrow">
          <span>
            <i class="iconfont icon-shangyiyehoutuifanhui"></i>
          </span>
        <span>
             <i class="iconfont icon-xiayiyeqianjinchakangengduo"></i>
          </span>
      </div>
      <search></search>
    </div>

    <div class="header-user">
      <img src="../../assets/images/avatar.jpeg" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '@/components/common/SearchComponent.vue'
</script>

<style scoped lang="scss">
.header {
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid #e7e6e6;
  box-sizing: border-box;

  .left {
    width: $aside-width;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      margin-right: 10px;
      cursor: pointer;

      &:nth-child(1) {
        background-color: #ef8068;
      }

      &:nth-child(2) {
        background-color: #f6d16c;
      }

      &:nth-child(3) {
        background-color: #7cc279;
      }
    }
  }

  .center {
    display: flex;
    align-items: center;
    flex: 1;

    .arrow {
      span {
        display: inline-block;
        color: $font-color;
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 20px;
        }
      }

      margin-right: 50px;
    }
  }

  &-user {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $window-bg;
    box-shadow: inset $mid-white-shadow, inset $mid-black-shadow;
    img {
      width: 50%;
      height: 50%;
      cursor: pointer;
    }
  }
}
</style>
