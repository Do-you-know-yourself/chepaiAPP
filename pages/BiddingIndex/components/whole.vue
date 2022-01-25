<template>
  <view class="container">
    <view class="typeClass" >
      <view class="brand" v-for="i in Nav" :key="i.id">
        <text>{{i.title}}</text>
        <view class="img">
          <img class="X_icon" :src="i.icon" alt="">
        </view>
      </view>
      <!--        车价-->
      <!--        城市-->
      <!--        筛选-->

    </view>
    <scroll-view
        style="height: 80vh"
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
  </view>



</template>

<script setup lang="ts">
import {ref} from 'vue'
const list = ref([])
let page = ref(1)
let height = ref(0)
height.value = document.documentElement.clientHeight - 80;

let Nav = ref([
  {
    title:'品牌',
    icon:'/static/icon/top_s.png',
    id:1
  },
  {
    title:'车价',
    icon:'/static/icon/top_s.png',
    id:2
  },
  {
    title:'城市',
    icon:'/static/icon/top_s.png',
    id:3
  },
  {
    title:'筛选',
    icon:'/static/icon/screen.png',
    id:4
  },

])


const scrollTop = ()=>{

  console.log(111)

}
if (height.value>0){
  scrollTop()
}
</script>

<style scoped lang="scss">

.typeClass{
  padding: .5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.brand{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .img{
    width: .8rem;
    height: .8rem;
  }
}

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
