<template>
  <view>
    <view class="backNavbar">
    <view class="left_back " @click="back">
      <img class="X_icon" src="/static/icon/left.png" alt="">
    </view>
    <view class="content_title"></view>

    <view class="right">

      <view class="img">
        <img src="/static/icon/share.png" alt="">
      </view>
    </view>
  </view>
<!--    <scroll-view style="height: 1000px" scroll-y  lower-threshold="50" @scrolltolower="add">-->

<!--    </scroll-view>-->
    <view>
      <!-- 容器     -->
      <view class="MainPage">
        <!--   头部    -->
        <view class="header">
          <view class="img">
            <img src="/static/img/1.png" alt="">
          </view>
          <view class="right_info">
            <text class="title">专场</text>
            <view class="num">
              <text>16辆车</text>
              <text class="line">|</text>
              <text>超级拍</text>
            </view>
            <view class="reputation">
              <text>车商信誉值：</text>
              <uni-rate :size="15" :touchable="false" color="#bbb" active-color="#3296FA"  :readonly="true" :value="5" :is-fill="false"  />
            </view>
            <view class="date">
              <view class="dark">
                <text>暗拍：</text>
                <text class="Date">01月04日</text>
                <text class="time">19:00</text>
              </view>
              <view class="bright">
                <text>明拍：</text>
                <text class="Date">01月05日</text>
                <text class="time">14:00</text>
              </view>
            </view>
          </view>
        </view>
        <!--  筛选    -->
        <view class="screen">
          <text v-for="i in screen">{{i.text}}</text>
        </view>
        <!--  车列表       -->
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
</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'
interface screen {
  text:string,
  id:number
}
import {defineProps,ref,Ref} from 'vue'
import {RollTotal} from './indexModel'

let screen:screen[] = ref([
  {
    text:'品牌',
    id:1,
  },
  {
    text:'车价',
    id:2,
  },
  {
    text:'城市',
    id:3,
  },
  {
    text:'筛选',
    id:4,
  },
])
const props = defineProps({
  title:{
    type:String,
    default:'竞价公告'
  }
})
const add = ()=>{
  console.log(111)
}
const back = ()=>{
  let navigateBack: any;
  // @ts-ignore

  navigateBack = uni.navigateBack();
}
</script>
<script lang="ts">
export default {
  data(){
    return{

    }
  },
  onReachBottom(){
    console.log('vue2 滚动到底部了')
  }
}
</script>
<style scoped lang="scss">
.backNavbar {
  // #ifndef H5
    margin-top: 1rem;
  // #endif
  height: 2rem;
  padding: .5rem 0rem .5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 1px solid #b8b8b855;
  background: #FFFFFF00;
  position: fixed;
  top: 0;

  .left_back {
    width: 1.5rem;
    height: 1.5rem;
  }

  .right {
    display: flex;
    font-size: .8rem;
    align-items: center;
    img {
      //margin: 0 .5rem;
      width: 1.5rem;
    }
  }
}

/* 头部信息 */
.MainPage{
  padding: .5rem .8rem;
  .header{
    display: flex;
    font-size: .8rem;
    .img{
      width: 10rem;
    }
    .right_info{
      margin: 0 .5rem;
      .num{
        margin: .5rem 0;
        .line{
          margin: 0 .3rem;
        }
      }
      .reputation{
        display: flex;
      }
    }
  }
  // 筛选
  .screen{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b8b8b885;
    margin-top: .5rem;
    padding: .5rem;
  }
  // 车列表
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