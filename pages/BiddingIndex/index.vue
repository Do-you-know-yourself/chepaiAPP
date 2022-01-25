<template>
  <view>
    <StatusBar/>
    <view class="header">
      <view class="left_city" @click="cityScreen">
        <view class="city" >{{searchTitle}}</view>
        <view class="icon">
          <image src="/static/icon/top.png" alt="" />
        </view>
      </view>
      <view class="list">
        <view
            class="Auction"
            v-for="i in head"
            :key="i.id"
            @click="toggle(i)"
            :class="{'isActive':Index==i.id}"
        >
          <text>{{i.title}}</text>
          <view class="line" :class="{'isLine':i.id===Index}"
          ></view>
        </view>

        </view>
    </view>
    <transition>
    <Auction v-show="Index==1" />
    </transition>
    <transition>
    <whole v-show="Index==2" />
    </transition>
    <!-- 弹出面板   -->
    <uni-popup ref="city">
      <view class="flex-col section flex-display">
        <view class="list" :class="{'isActive':idx==current}" v-for="(i,idx) in cityList" @click="choice(i,idx)">
          {{i}}
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script lang="ts" setup>
import StatusBar from '@/components/StatusBar'

import {ref} from 'vue'
import Auction from './components/Auction'
import whole from './components/whole'
let Index = ref(1);
let head = ref([{title:"竞拍场次",id:1},{title:'全部车源',id:2}])

let current = ref(0)
let searchTitle = ref('赣州市')
interface List{
  [Array]
}
let cityList:List[] = ref(["北京市", "上海市", "天津市", "重庆市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "江苏省",
  "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "四川省",
  "贵省", "云南省", "西藏自治区", "陕西省", "甘肃省", "宁夏回族自治区", "青海省", "新疆维吾尔族自治区", "香港特别行政区", "澳门特别行政区",
  "台湾省", "其它"
])

const toggle = async (i)=>{
  Index.value =  i.id;
}
const city = ref()
const cityScreen = ()=>{
  city.value.open()
}
const choice = (i,idx)=>{
  current.value = idx
  searchTitle.value = i
  city.value.close()
  return i
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  border-bottom: 1px solid #b8b8b855;
  box-shadow: 1px 1px 7px 0px #b8b8b855;
  height: 3rem;
  .left_city{
    width: 6rem;
    padding: .5rem;
    display: flex;
    align-items: center;
    .city{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
    }
    .icon{
      width: 1.5rem;
      height: 1.5rem;
      margin-left: .5rem;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
  .list{
    z-index: 999;
    padding: .5rem .5rem;
    display: flex;
    //background-image: linear-gradient(#E1DDDC95,#E1E2E595);
    .Auction{
      margin: 0 1.5rem;
      transition: .5s;
      font-size:1rem;
    }
    .isActive{
      display: inline;
      font-size:1.05rem;
      font-weight: bold;
      transition: 0.5s;
    }
    .line{
      transition: 0.5s;
      width: 0;
      height: 3px;
      background-image: linear-gradient(to right, #ff6700, #c5b403);
      margin-top: .4rem;

    }
    .isLine{
      width: 100%;
    }

  }
}
</style>