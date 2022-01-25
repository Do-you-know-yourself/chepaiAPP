<template>
    <view class="VeHicLelList">

      <view class="VeHicLel_container" v-for="item in 10">
          <view class="img">
            <img src="/static/img/1.png" alt="">
          </view>
          <view class="VeHicLel_right">
            <view class="title">
              <text class="text">奔驰 E级 2020款 2.0T 手自动一体 改款 E 300L 运动时尚型
              </text>
<!--              <view class="city">-->
<!--              </view>-->
            </view>
            <view class="data_kilometre">
              <text class="data">2021年05余额上牌</text><span>|</span><text>1.90万公里</text><image src="/static/icon/dz.png" />
              <text>赣州</text>
            </view>
            <view class="price">25.58万</view>
            <view class="price_pople_num">
              <view class="time_city">
                <text>11:00</text>
                <text>赣州市</text>
                <text>即时成交</text>
              </view>
              <view class="num">142次围观</view>
              <view class="love_icon">
                <image src="/static/icon/love_h.png" alt="" />
              </view>
            </view>
          </view>
        </view>
      <view class="Tis">
        <text>查看更多车源</text>
        <view class="Tis_icon_img">
          <img src="/static/icon/right_x.png" alt="">
        </view>
      </view>
    </view>
</template>

<script setup lang="ts">
import {ScrollTop} from './vehicleListModel'

</script>

<style scoped lang="scss">
.VeHicLelList{
  display: flex;
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
        .text{
          font-size: .8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-clamp: 3;
          box-orient: vertical;
          //display: flex;
          .city{
            display: flex;
            image{
              width: 1rem;
              height: 1rem;
            }
          }
          image{
            width: 1rem;
            height: 1rem;
          }
        }

      }
      .data_kilometre{
        display: flex;
        margin: .5rem 0;
        font-size: .5rem;
        image{
          width: 1rem;
          height: 1rem;
        }
      }
      .price_pople_num{
        font-size: .5rem;
        display: flex;
        justify-content: space-between;
        .love_icon{
          width: 1.5rem;
          height: 1.5rem;
          image{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.Tis{
  margin: 1rem auto;
  display: flex;
  padding: .5rem;
  border-radius: 5rem;
  align-items: center;
  font-size: .8rem;
  border: 1px solid #6a6a6a;
  .Tis_icon_img{
    width: 1rem;
    height: 1rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

</style>