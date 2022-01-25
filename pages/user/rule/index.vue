<template>
  <view >
    <view class="Business_rules ">
      <view class="box">
      <view class="left_text">《平台服务协议》</view>
      <view class="right_text"><img  src="/static/icon/right_x.png" alt=""></view>
      </view>
    </view>
    <view class="Business_rules ">
      <view class="box">
      <view class="left_text">《平台隐私协议》</view>
      <view class="right_text"><img  src="/static/icon/right_x.png" alt=""></view>
    </view>
  </view>
    <view class="Business_rules ">
      <view class="box">
        <view class="left_text">《拍拍拍业务规则》</view>
        <view class="right_text"><img  src="/static/icon/right_x.png" alt=""></view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {defineProps,ref} from "vue"

const props = defineProps({
  id:{
    type:String,
    default:''
  },
  title:{
    type:String,
    default: ''
  }
})
// @ts-ignore
uni.setNavigationBarTitle({
  title: props.title
})
</script>

<style scoped lang="scss">
.Business_rules{
border-bottom: 1px solid #DEE1E6;
  .box{
    padding: 1rem .7rem;
    display: flex;
    justify-content: space-between;
    .left_text{
      flex: 1;
    }
    .right_text{
      width: 1rem;
      height: 1rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>