<template>
  <view class="container">
    <view class="newsList" v-for="i in 5">
      <view class="img">
        <image src="/static/icon/myFollow.png" alt="" />
      </view>
      <view class="info">
        <text class="title">关注提醒</text>
        <text class="txt">您关注的垃圾车7系 2020款123123123</text>
      </view>
      <view class="Date">
        <text class="day">01月06日</text>
        <view class="info_num">
          <view></view>
          <view class="icon">
            1
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.newsList{
  display: flex;
  //justify-content: space-between;
  align-items: center;
  padding: .5rem;
  background: #fff;
  border-top: 1px solid #b8b8b855;
  .img{
    width: 3rem;
    height: 3rem;
    margin: 0 .5rem;
    image{
      width: 100%;
      height: 100%;
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    flex: 1;
    .title{
      margin-bottom: .3rem;
    }
    .txt{
      width: 10rem;
      font-size: .8rem;
      color: #2e2e2e95;
      overflow:hidden ;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .Date{
    display: flex;
    flex-direction: column;
    //align-items: self-end;
    .icon{
      margin-top: .5rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: red;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: .5rem;
      align-items: center;
      //padding: 1rem;
    }
    .info_num{
      display: flex;
      view:nth-child(1){
        flex: 1;

      }
    }
  }
}
</style>