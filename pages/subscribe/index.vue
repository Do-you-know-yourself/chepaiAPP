<template>
  <view class="container">
    <StatusBar/>

    <scroll-view style="height: 100%" scroll-y>
      <view class="header">
        <text>我的订阅</text>
        <navigator url="./Add/index">
          <view>添加订阅</view>
        </navigator>
      </view>
      <view class="Subscription_list" v-for="ii in 10">
        <view class="header">
          <text>订阅1</text>
          <text>编辑订阅</text>
        </view>
        <view class="info_container">
          <view class="info" v-for="i in arr">
            <text v-if="i.id">|</text>
            <text>{{i.title}}</text>
          </view>
        </view>
        <view class="img_container">
          <view class="img_box" v-for="z in 3">
            <view class="img">
              <img src="/static/img/4.webp" alt="">
            </view>
            <text>0.05万起</text>
          </view>
        </view>
        <view class="num">
          <text>共有35辆车符合订阅</text>
          <view class="right_icon">
            <img src="/static/icon/right_x.png" alt="">
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import StatusBar from '@/components/StatusBar'

import {ref} from 'vue'

let arr = ref([
  {
    title:'宝马五系',
    id:0
  },
  {
    title:'20万-30万',
    id:1
  },
  {
    title:'吃饭',
    id:2
  },
])
</script>

<style scoped lang="scss">
.container{
  padding: .5rem;
  height: 90vh;
  .header{
    display: flex;
    justify-content: space-between;
    text:nth-child(1){
      font-weight: bolder;
    }
    view{
      font-size: $uni-font-size-sm;
    }
  }
  .Subscription_list{
    margin: .5rem 0;
    padding: .5rem;
    background: #fff;
    border: 1px solid #b8b8b855;
    border-radius: .5rem;
    .info_container{
      margin: 1rem 0;
      display: flex;
      .info{
        font-size: $uni-font-size-sm;
        text:nth-child(1){
          margin:0 .15rem;
        }
      }
    }
    .img_container{
      display: flex;
      border-bottom: 1px solid #b8b8b855;
      .img_box{
        padding: .5rem;
      }
      text{
        font-size: $uni-font-size-sm;
      }
    }
    .num{
      display: flex;
      justify-content: space-between;
      padding: .5rem 0;
      font-size: $uni-font-size-sm;
      align-items: center;
    }

  }
}
</style> 