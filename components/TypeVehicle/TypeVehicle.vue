<template>
  <scroll-view
      style="height: 100vh"
      @scrolltolower="scrollTop"
      scroll-y
  >
  <view class="flex-col container">

    <view class="flex-col group">

        <view class="VeHicLelList">
          <view class="VeHicLel_container" v-for="item in 10">
            <view class="img">
              <img src="/static/img/1.png" alt="">
            </view>
            <view class="VeHicLel_right">
              <view class="title">
                <text>[周口]奔驰 E级 2020款 2.0T 手自动一体 改款 E 300L 运动时尚型</text>
                <view class="love_icon">
                  <img src="/static/icon/love_h.png" alt="">
                </view>
              </view>
              <view class="data_kilometre">
                <text class="data">2021年05余额上牌</text><span>|</span><text>1.90万公里</text>
              </view>
              <view class="price_pople_num">
                <view class="price">25.58万</view>
                <view class="num">142次围观</view>
              </view>
            </view>
          </view>
        </view>

    </view>

  </view>
  </scroll-view>

</template>

<script setup lang="ts">
import {ref} from 'vue'
const list = ref([])
let page = ref(1)
let height = ref(0)
height.value = document.documentElement.clientHeight - 80;

const scrollTop = ()=>{

  console.log(111)

}
if (height.value>0){
  scrollTop()
}
</script>

<style scoped lang="scss">
.flex-col {
  display: flex;
  flex-direction: column;
}
.container {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100%;
  overflow-y: auto;
}
.VehicleList{
  margin-top: 45px;
  height: 100px;
}
.group {
  overflow-y: auto;
}


.VeHicLelList{
  display: flex;
  overflow-y: auto;

  flex-direction: column;
  padding: .5rem .5rem;
  .VeHicLel_container{
    height: 100%;
    display: flex;
    margin: .5rem 0;
    padding: .5rem;
    background: #fff;
    border-radius: .5rem;
    .img{
      width: 12rem;
      height: 5rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .VeHicLel_right{
      margin-left: .3rem;
      display: flex;
      flex-direction: column;
      .title{
        display: flex;

        text{
          font-size: .1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 3;
          box-orient: vertical;
        }
        .love_icon{
          width: 2.5rem;
          height: 1.5rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .data_kilometre{
        display: flex;
        margin: .5rem 0;
        font-size: .5rem;
      }
      .price_pople_num{
        font-size: .5rem;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
