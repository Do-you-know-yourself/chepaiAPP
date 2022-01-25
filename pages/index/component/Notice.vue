<template>
  <view>
    <StatusBar/>
    <view class="backNavbar">
      <view class="left_back " @click="back">
        <img class="X_icon" src="/static/icon/left.png" alt="">
      </view>
      <view class="content_title">{{props.title}}</view>

      <view class="right">
        <text>全省</text>
        <view class="img">
          <img src="/static/icon/top.png" alt="">
        </view>
      </view>
    </view>
     <view class="site_second_container" v-for="i in RollTotal">
       <view class="site_list" >
         <view class="site_second_date">
           <text class="today">{{i.title}}</text>
           <text class="Date">({{i.Date}})</text>
         </view>
         <view class="Bidding_list" v-for="item in i.children">
           <view class="left_type">
             <text>{{item.status || item.status ===1?'竞价中':item.time}}</text>
             <text>|</text>
             <text>{{item.nickname}}</text>
           </view>
           <view class="right_num">
             <text>{{item.quantity||0}}辆车</text>
             <view class="img">
               <img src="/static/icon/right_x.png" alt="">
             </view>
           </view>
         </view>
       </view>

       
     </view>
  </view>
</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'
import {defineProps} from 'vue'
import {RollTotal} from './indexModel'
const props = defineProps({
  title:{
    type:String,
    default:'竞价公告'
  }
})
const back = ()=>{
  let navigateBack: any;
  // @ts-ignore

  navigateBack = uni.navigateBack();
}
</script>

<style scoped lang="scss">
.backNavbar {
  padding: .5rem 0 .5rem 0;
  //width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b8b8b855;

  .left_back {
    width: 1.5rem;
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
.site_second_container{
  margin-top: .8rem;

  .site_list{
    //width: 100%;
    //padding: .5rem .1rem;
    .site_second_date{
      border-bottom: 1px solid #b8b8b855;
      display: flex;
      background: #fff;
      align-items: center;
      text{
        margin: .5rem;
        color: #b8b8b8;

      }
    }
  }
  .Bidding_list{
    display: flex;
    background: #fff;
    padding: .5rem .3rem;
    .left_type{
      flex: 1;
      text{
        margin: .5rem .3rem;
      }
    }
    .right_num{
      display: flex;
      align-items: center;
      color: #b8b8b8;
      font-size: .8rem;
      .img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}



</style>