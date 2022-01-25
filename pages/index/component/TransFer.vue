<template>
 <view class="TransFer">
   <BackNav :title="props.title"></BackNav>
   <view class="title">
     <view class="city">
       <text>您的城市：</text>
       <text>赣州</text>
     </view>
     <view class="Order_record">
       <text>下单记录</text>
     </view>
   </view>
<!--   <scroll-view style="height: 50vh" scroll-y>-->
      <view class="list_container" v-for="item in TransFerList">
          <view class="img_header">
            <view class="img">
              <img :src="item.src" alt="">
            </view>
            <view class="header_title">
              <text>{{item.title}}</text>
              <text>{{item.city}}</text>
            </view>
          </view>
        <view class="profile">
          公司简介：{{item.profile}}
        </view>
        <view class="cost">
          <view class="transfer_cost flex-column">
            <text>{{item.closing_cost}}</text>
            <text>本市过户费</text>
          </view>
          <view class="line">
            <view class="line_box"></view>
          </view>
          <view class="FileUp_cost flex-column">
            <text>{{item.Transfer_fee}}</text>
            <text>专籍提档费</text>
          </view>
        </view>

      </view>
<!--   </scroll-view>-->


 </view>
</template>

<script setup lang="ts">
import {ref, defineProps} from 'vue'
import BackNav from '@/components/BackNav/backnav'
import {TransFerList} from './indexModel'

const props = defineProps({
  title: {
    type: String,
  }
})
</script>

<style scoped lang="scss">
.TransFer{
  padding: .5rem .5rem;
  //height: 100vh;
  .title{
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: .5rem;
  }
}

.list_container{
  padding: .5rem .8rem;
  border: 1px solid #b8b8b855;
  margin-top: 1rem;
  background: #fff;
  border-radius: .5rem;
  box-shadow: 0 3px 7px 3px #b8b8b820;
  .img_header{
    display: flex;
    .img{
      width: 8rem;
      height: 5rem;

    }
    .header_title{
      display: flex;
      flex-direction: column;
      margin-left: .5rem;
    }
  }
  .profile{
    font-size: .8rem;
    margin: .5rem 0;

  }
  .cost{
    display: flex;
    justify-content: space-between;
    padding: 1rem ;
    .line{
      .line_box{
        //width: 1px;
        height: 100%;
        border-left: 1px solid #b8b8b8;
      }
    }
  }
}
</style>