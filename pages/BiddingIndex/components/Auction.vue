<template>
  <view>
    <view class="header">
      <view class="header_list" v-for="i in 3" :key="i">
        <view>今日场(<text>{{10}}</text>)</view>
      </view>
    </view>
    <view class="container">
      <scroll-view style="height: 100%" scroll-y>
        <view class="Special_session" v-for="item in list.data" @click="to">
          <view class="Special_header">
            <view class="exhibition">
              <img :src="item.Logo" alt="">
            </view>
            <view class="Y_info">
              <view class="title">
                <view class="ident">优选</view>
                <text>{{item.title}}</text>
              </view>
              <view class="num">
                <text>{{item.num||0}} 辆车</text>
                <text>|</text>
                <text>超级拍</text>
              </view>
              <view class="reputation">
                <text>车上信誉值：</text>
                <uni-rate :touchable="false" color="#bbb" active-color="#1487F5"  :readonly="true" :value="xx" :is-fill="false"  />
              </view>

            </view>
          </view>
          <view class="Date">
            <text class="Tb">投标中</text>
<!--            {{|| '00:00:00'}}-->
<!--            <text class="h" >{{countTime(item.Date)}}</text>-->
            <text class="h" >{{item.djs|| "小时" + '00' + "分" + '00' + "秒"}}</text>

            <text class="h">开始明拍</text>
          </view>
          <view class="vehicle_img">
            <view class="img" v-for="i in item.children">
              <img :src="i.img" alt="">
              <view class="mask" v-if="i.id===3">
                <text>+13</text>
              </view>
            </view>
          </view>
        </view>

      </scroll-view>

    </view>



  </view>
</template>

<script setup lang="ts">
// @ts-ignore
import {ref,computed,onMounted,reactive,onUnmounted,onErrorCaptured} from 'vue'
// @ts-ignore
import {countTime} from '@/utils/formatDate'
import {timeDom,CountDown,list,tim} from "../../../utils/formatDate";
let time = ref()
let temp = ref(null);
// 计算属性
// const titc = computed(()=>{
//     return function (val){
//       console.log(val)
//      let a =countTime(val)
//       return a
//     }
// })
// 多个倒计时列表
onMounted(()=>{
  CountDown()
})

let xx = ref(0)
setInterval(()=>{
  if (xx.value>=5){
    xx.value = 0
  }
  xx.value+=0.1
},500)
onUnmounted(()=>{
  clearInterval(tim)
  console.log('zzz')
})

onErrorCaptured(()=>{
  clearInterval(tim)

})


const to = ()=>{
  // @ts-ignore
  uni.navigateTo({
    url:'./Details/index'
  })
}
</script>
<style scoped lang="scss">
.hone{
  height: 200px;
}

.header{
  padding: .5rem;
  display: flex;
  .header_list{
    margin-right: .5rem;
    border: 1px solid #b8b8b855;
    font-size: $uni-font-size-sm;
    padding: .4rem .8rem;
    border-radius:5rem;
  }
}
.container{
  padding: .5rem .5rem;
  height: 80vh;
  .Special_session{
    margin: .5rem;
    background: #fff;
    box-shadow:1px 1px 7px 1px #b8b8b855;
    padding: .5rem;
    border: 1px solid #b8b8b855;
    border-radius: .5rem;
    .Special_header{
      display: flex;
      .exhibition{
        width: 4rem;
        height: 4rem;
        margin-right: .5rem;
        border: 1px solid #b8b8b855;
        border-radius: .5rem;
      }
      .Y_info{
        //display: flex;
        margin-bottom: .5rem;
        .title{
          display: flex;
          margin-bottom: .5rem;
          .ident{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .2rem .3rem;
            font-size: $uni-font-size-sm;
            color: #fff;
            margin-right: .5rem;
            border-radius: .2rem;
            background: #ff6700;
          }
          text{
            font-size: $uni-font-size-lg;
            font-weight: bolder;
          }
        }
        .reputation{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .num{
        text{
          margin-right: .3rem;
          font-size: $uni-font-size-sm;
        }
      }
    }
    .Date{
      width: 12rem;
      margin: .5rem auto;
      padding: .4rem .5rem;
      border-radius: 5rem;
      border: 1px solid #b8b8b855;
      .Tb{
        color: #ff6700;
      }
      .h{
        color: #2e2e2e95;
      }
      text{
        margin-right: .3rem;
        font-size: $uni-font-size-sm;
        text-align: center;
      }
    }
    .vehicle_img{
      display: flex;
      .img{
        width: 10rem;
        height: 5rem;
        margin-right: .5rem;
        border-radius: .3rem;
        overflow: hidden;
        position: relative;
        .mask{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #00000095;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;

        }
      }

    }
  }
}
</style>