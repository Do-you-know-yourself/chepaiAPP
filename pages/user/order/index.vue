<template>
  <view class="container">
    <StatusBar/>
    <BackNav :id="id"
             :title="props.title"
    ></BackNav>
    <view class="search_header">
      <view class="search"  v-if="id===5">
        <input type="text" placeholder="搜索品牌车系" />
        <view class="icon_search">
          <img class="icon" src="/static/icon/search.png" alt="">
        </view>
      </view>
      <view class="title" v-if="id===5">
        <view class="timeContainer" v-for="i in orderList" :key="i.id">
          {{i.title}}
        </view>
      </view>
    </view>
    <!--  待提车   -->
    <view class="VeHicLe_container" v-if="id===1">
      <view class="VeHicLelList" v-for="item in 2">
        <view class="VeHicLel_container" >
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
              <text class="data">2021年05月上牌</text><span>|</span><text>1.90万公里</text>
            </view>
            <view class="price_pople_num">
              <view class="price">成交价：75.58万</view>

            </view>
          </view>
        </view>
        <view class="list_info">
          <view class="top_text">
            <view class="left_price">车主联系方式:13207082805</view>
            <view class="right_price">提车地址:赣州市章贡区万象城</view>
          </view>
          <view class="history_time">

            <view class="history_btn">
              联系客服
            </view>

          </view>
        </view>
      </view>
    </view>
    <!-- 待付款   -->
    <view class="VeHicLe_container" v-if="id===2">
      <view class="VeHicLelList" v-for="item in 2">
        <view class="VeHicLel_container" >
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
              <view class="price">成交价：25.58万</view>
<!--              <view class="num">142次围观</view>-->
            </view>
          </view>
        </view>
        <view class="list_info">
          <view class="top_text">
            <view class="left_price">车主联系方式:132rexx0005</view>
            <view class="right_price">提车地址:赣州市章贡区万象城</view>
          </view>
          <view class="history_time">

            <view class="history_btn">
              联系客服户口获取车主信息
            </view>

          </view>
        </view>
      </view>
    </view>

    <!-- 待过户-->
    <view class="VeHicLe_container" v-if="id===3">
      <view class="VeHicLelList" v-for="item in 2">
        <view class="VeHicLel_container" >
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
        <view class="list_info_transfer">
          <view class="left_text">
              <text>已完成交易,待过户</text>
          </view>
          <view class="right_tis">
            <text>立刻过户</text>
            <view class="img">
              <img src="/static/icon/right_x.png" alt="">
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 仲裁中 -->
    <view class="VeHicLe_container" v-if="id===4">
      <view class="VeHicLelList" v-for="item in 2">
        <view class="VeHicLel_container" >
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
              <view class="price">成交价：25.58万</view>
              <!--              <view class="num">142次围观</view>-->
            </view>
          </view>
        </view>
        <view class="list_info_flex">
          <view class="history_time">
            <view class="history_btn">
              提交仲裁资料
            </view>

          </view>
          <view class="history_time">
            <view class="history_btn">
              查看仲裁进度
            </view>

          </view>
        </view>
      </view>
    </view>

    <!-- 全部订单-->
    <view class="VeHicLe_container" v-if="id===5">
      <view class="VeHicLelList" v-for="item in 2">
        <view class="VeHicLel_container" >
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
          </view>
        </view>
        <view class="list_info_flex">
          <view class="history_time">
            <text>当前价:25.85万</text>

          </view>
          <view class="history_time">
            <text>我的出价:105.85万</text>
          </view>
        </view>
        <view class="list_info_flex">
          <!-- 占位标签         -->
          <view></view>
          <view class="history_time">
            <view class="history_btn">
              历史出价
            </view>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'

import BackNav from '@/components/BackNav/backnav'
import UniListItem from "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.vue";
import {getDate} from '@/common/Time'
import {defineProps,ref} from "vue"
import {orderList} from '../userModel'

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
let currentDate = getDate();
let date = ref(currentDate);
const bindDateChange = (e)=>{
  date.value = e.detail.value
}
let id = parseInt(props.id)

const Refresh = ()=>{
  console.log(1111)
}



</script>


<style scoped lang="scss">
.list_container{
  padding: 0.5rem;
  border-radius: .5rem;
  border: 1px solid #2e2e2e;
  //overflow:hidden;
  .list{
    padding: .5rem;
    height: 5rem;
    border: 1px solid #2e2e2e;
  }
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.container {
  background:#B9B9B905;
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
  margin: .5rem 0;
  flex-direction: column;
  padding: .5rem .5rem;
  background: #fff;
  border-radius: .5rem;
  .VeHicLel_container{
    height: 100%;
    display: flex;
    margin: .5rem 0;
    padding: .5rem;
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
.list_info{
  display: flex;
  flex-direction: column;
  padding: .5rem .7rem;
  .top_text{
    display: flex;
    //justify-content: space-between;
    flex-direction: column;
    font-size: .8rem;
    color: #B9B9B9;
    .left_price{
      margin-bottom: .3rem;
    }
  }
  .bottom_time{
    margin: .5rem .1rem;
    font-size: .8rem;
    font-weight: bolder;
  }
  /*历史出价按钮*/
  .history_time{
    float: right;
    //padding:.5rem;\
    margin-top: .5rem;
    //background: #6a6a6a;
    .history_btn{
      float: right;
      padding:.3rem 2rem;
      background: #ffffff;
      border-radius: 5rem;
      border: 1px solid #B9B9B9;
      font-size: .5rem;
      color: #807f7f;
    }
  }

}
.list_info_transfer{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  .right_tis{
    display: flex;
    align-items: center;
    .img{
      width: 1rem;
      height: 1rem;
    }
  }
}
.list_info_flex{
  display: flex;
  justify-content: space-between;
  .history_time{
    float: right;
    //padding:.5rem;\
    margin-top: .5rem;
    //background: #6a6a6a;
    .history_btn{
      float: right;
      padding:.3rem 2rem;
      background: #ffffff;
      border-radius: 5rem;
      border: 1px solid #B9B9B9;
      font-size: .5rem;
      color: #807f7f;
    }
  }
}
/* 关注按钮*/
.Concerned{
  //margin: .3rem .5rem;
  //width: 7.5rem;
  padding: .5rem .1rem;
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5rem;
  font-size: .8rem;
  border: 1px solid #ff000055;
  text{
    //padding: .3rem .5rem;
    color: #ff0000;
  }
}

/*  搜索 */
.search{
  padding: .5rem 0;
  width: 100%;
  background: #EEEDEE;
  z-index: 9;

  input{
    background: #fff;
    border-radius: 5rem;
    padding: .3rem 1rem;
    font-size: .8rem;
    position: relative;
  }
  .icon_search{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0.6rem;
    right: .5rem;
    .icon{
      width: 100%;
    }
  }
}
.search_header{
  .title{
    display: flex;
    padding: .5rem 1rem;
  }
}


.timeContainer{
  display: flex;
  padding: 0 .5rem;
  align-items: center;
  margin: 0 auto;
}
</style>