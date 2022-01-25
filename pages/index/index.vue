<template>
	<view class="container">
    <Navbar/>
    <transition>
    <Home v-show="currentIndex===1" class="topMz" />
    </transition>
    <transition>
    <TypeVehicle v-show="currentIndex==2"/>
    </transition>
    <transition>
    <view v-show="currentIndex==3">扯2</view>
    </transition>
    <transition>
    <view v-show="currentIndex==4">扯4</view>
    </transition>

  </view>
</template>

<script setup lang="ts">
import {ref, watch,nextTick,Ref} from 'vue'
import {currentIndex} from '@/components/NavBar/navbarModel'
import Navbar from "../../components/NavBar/navbar";
import TypeVehicle from '@/components/TypeVehicle/TypeVehicle'
// import {Home, VehicleList} from 'component'
import Home from './component/Home'
import VehicleList from './component/VehicleList'
let userInfo = ref()
if(userInfo.value !== null){
  // @ts-ignore
  uni.showModal({
    title:'登录',
    content:'未登录，请先登录',
    success(res){
      if(res.confirm){
        // @ts-ignore
        uni.navigateTo({
          url:'../user/login/index'
        })
      }else{
        return false
      }

    },
    fail(){
      return false
    }

  })


}
</script>

<style>
.v-enter,.v-leave-to{
  opacity: 0;
  /*transform: translateX(80px);*/
}
/*进入和离开的动画时间段*/
.v-enter-active,.v-leave-active{
  opacity: 0;
  /*transform: translateX(80px);*/
  transition: all 0.3S ease;
  /*transform: translateX(160px);*/

}

	.container {
		font-size: 14px;
    /*overflow: hidden;*/
	}
  .topMz{
    padding-top: 1rem;
  }
</style>
