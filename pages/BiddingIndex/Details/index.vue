<template>
  <view>
    <view class="backNavbar">
      <view class="left_back " @click="back">
        <img class="X_icon" src="/static/icon/left.png" alt="">
      </view>
      <view class="content_title"></view>
      <view class="right">
        <view class="img">
<!--          <img src="/static/icon/share.png" alt="">-->
        </view>
      </view>
    </view>
    <view>
    <!-- 轮播图     -->
    <Swiper></Swiper>
    <view class="countdown">
      <view class="left">
        <view class="img">
          <img src="/static/icon/search.png" alt="">
        </view>
        <text>正在投标</text>
      </view>
      <view class="content">
        剩余
        {{timeDom}}
      </view>
    </view>
    <view class="container">
      <view class="title">暗拍 【赣州】 福特 提克斯 2012款 1.6L 双离合三厢 风尚型</view>
      <view class="price">
        <view class="StartingPrice box">
          <text class="left">起拍价:</text>
          <text>100万</text>
        </view>
        <view class="PlatformCommission box">
          <text class="left">平台佣金:</text>
          <text>--</text>
        </view>
        <view class="MyPrice box">
          <text class="left">我的出价:</text>
          <text>--</text>
        </view> 
        <view class="My_TotalPrice box">
          <text class="left">我的合计价:</text>
          <text>--</text>
        </view>
      </view>
      <!--  竞价说明    --> 
      <view class="explain">
        <text class="txt">竞价说明</text>
        <text class="rule">查看费用/仲裁/过户规则</text>
        <view class="right_icon">
          <img src="/static/icon/right_x.png" alt="">
        </view>
      </view>
      <!--  车辆配置信息   -->
      <view class="Years">
        <view class="trip" v-for="i in VehicleInfo">
          <text v-if="i.status!==1">{{i.info}}</text>
          <uni-rate v-if="i.status==1" :size="15" :touchable="false" color="#bbb" active-color="#3296FA"  :readonly="true" :value="i.value" :is-fill="false"  />

          <text>{{i.type}}</text>
        </view>

      </view>
      <!--  车辆配置    -->
      <view class="to_configure">
        <text class="title">车辆配置</text>
        <view class="right">
          <text>查看全部配置</text>
          <view class="right_icon">
            <img src="/static/icon/right_x.png" alt="">
          </view>
        </view>
      </view>
    </view>
      <!--  车况信息     -->
    <view class="Vehicle_info">
        <view class="title">
          <text>车况信息</text>
          <view class="right">
            <text>查看完整报告</text>
            <view class="right_icon">
              <img src="/static/icon/right_x.png" alt="">
            </view>
          </view>
        </view>
        <view class="score_box">
          <view class="score" v-for="i in score" :key="i.id">
            <text v-if="i.status!==1">{{i.value}}</text>
            <text>{{i.type}}</text>
          </view>
        </view>
      </view>
    <!-- 说明   -->
    <view class="explain">
      <view class="header">
        问题说明
      </view>
      <view class="explain_text">
        外观轻微色差，前叶子板拆卸喷漆，内饰污渍磨损，顶棚污渍，需要处理，水箱框架拆卸，骨架正常，发动机漏油，尾气有点重，变速箱换挡冲击，转向松旷，电器正常，注：此车保号自成交之日起，一日内必须过户，过户后需回传过户手续（登记证1~6页、过户发票，身份证正反面，行驶证）以上都要原件照片。买方如不能及时回传过户手续，店内产生的损失由买方负责。车辆过户后才能报保险。
      </view>
    </view>
    <view class="Car_viewing_information">
      <view class="header">看车信息</view>
      <text>联系人：155555555555</text>
      <view class="address">
        <text>看车地址：江西省赣州市万象城</text>
        <view class="icon">
          <img src="/static/icon/Navigation.png" alt="">
        </view>
      </view>
      <view class="img_list">
        <img src="/static/img/3.webp" alt="">
      </view>
    </view>
   </view>
  </view>
</template>

<script setup lang="ts">
// @ts-ignore
import Swiper from '@/components/Swiper/swiper'
// @ts-ignore
import {ref} from 'vue'
// @ts-ignore
import {countTime,timeDom} from '@/utils/formatDate'
let value = ref("2022/1/22 00:00:00")
import {VehicleInfo,score} from '../BidModel'
countTime(value.value)

const back = ()=>{
  let navigateBack: any;
  // @ts-ignore

  navigateBack = uni.navigateBack();
}
</script>

<style scoped lang="scss">
.backNavbar {
  padding: .5rem 0 .5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //border-bottom: 1px solid #b8b8b855;
  background: #FFFFFF05;
  position: fixed;
  //background: #ff6700;
  z-index: 999;
  top: 0;
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



.countdown{
  display: flex;
  align-items: center;
  font-size: .8rem;
  padding: .5rem;
  background: #b8b8b815;
  text{
    color: #ff6700;
  }
  .left{
    display: flex;
    align-items: center;

    .img{
      width: 1.5rem;
      height: 1.5rem;margin: 0 .5rem;
    }

  }
  .content{
    margin:0 .5rem;
  }
}
.container{
  padding: .5rem;
  background: #fff;
  .title{
    font-size: .8rem;
    text-overflow: ellipsis;
    font-weight: bolder;
    background: #fff;
  }
  .price{
    //padding-right: 7rem;
    padding: .5rem 0;
    display: flex;
    flex-wrap: wrap;
    flex: 2;
    flex-grow: 2;
    border-bottom: 1px solid #b8b8b855;
    .box{
      margin-right: 5rem;
      margin-top: .5rem;
    }
    .StartingPrice>text:nth-child(2){
      color: #ff6700;
    }
    .left{
      margin-right: .3rem;
      font-size: .8rem;
      color: #b8b8b8;
    }
    //flex-direction: row-reverse;
  }
  .explain{
    padding: .5rem;
    display: flex;
    align-items: center;
    font-size: .8rem;
    .rule{
      flex: 1;
    }
    .txt{
      margin-right: .5rem;
    }
  }
  .Years{
    margin-top: .5rem;
    display: flex;
    padding: .5rem;
    align-content: center;
    flex-wrap: wrap;
    background: #fff;
    flex-direction: row;
    background: #fff;

    .trip{
      //width: 10%;
      //width: 5rem;

      display: flex;
      flex: 0 0 28.33%;
      flex-direction: column;
      justify-content: center;
      //align-items: center;
      margin: .5rem;
      text:nth-child(2){
        margin-top: .5rem;
        font-size: .8rem;
        color: #b8b8b8;
      }
    }
  }
  .to_configure{
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    text:nth-child(1){
      font-size: $uni-font-size-lg;
    }
    .right{
      display: flex;
      align-items: center;
      text{
        font-size: $uni-font-size-sm;
      }
    }

  }
}

.Vehicle_info{
  padding: .5rem 1rem;
  margin-top: .5rem;
  background: #fff;
  .title{
    display: flex;
    justify-content: space-between;
    .right{
      display: flex;
      align-items: center;
      text{
        font-size: $uni-font-size-sm;
      }
    }
  }
  .score_box{
    display: flex;
    justify-content: space-between;
    .score{
      margin: .5rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text:nth-child(1){
        color: #ff6700;
      }
      text:nth-child(2){
        margin-top: 1px;

      }
    }
  }
}


/* 说明 */
.explain{
  padding: .5rem;
  background: #fff;
  margin: .5rem 0;
  .header{
    font-weight: bolder;
    padding: 0 .5rem;
  }
  .explain_text{ 
    padding: 0 .5rem;
    font-size: $uni-font-size-sm;
    margin: .5rem 0;
    line-height: 1.3rem;
  }
}

/* 看车信息*/
.Car_viewing_information{
  padding: 1rem;
  background: #fff;
  font-size:$uni-font-size-sm;
  .header{
    font-size: $uni-font-size-lg;
    font-weight: bolder;
    margin-bottom: .5rem;

  }
  .address{
    margin: .5rem 0;
    display: flex;
    justify-content: space-between;
    .icon{
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>