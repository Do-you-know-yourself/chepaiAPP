<template>
      <StatusBar/>
      <view class="navbar">
        <view class="list"
         v-for="item in NavList"
        :class="{'isActive':currentIndex==item.id}"
        :key="item.id"
        @click="Toggle(item.id)"
        >
          <text :class="{'isActive':currentIndex==item.id}">{{item.title}}</text>
          <view class="bottom-line"
                :class="{'isLine':currentIndex==item.id}"
          ></view>
        </view>
      </view>
      <view class="search"  v-if="currentIndex!==1">
        <input type="text" placeholder="搜索您想要的车" />
        <view class="icon_search">
          <img class="icon" src="/static/icon/search.png" alt="">
        </view>
      </view>
      <view class="typeClass" v-if="currentIndex!==1">
        <view class="brand">
          <text>品牌</text>
          <view class="img">
            <img class="X_icon" src="/static/icon/top_s.png" alt="">
          </view>
        </view>
        <view class="brand" >
          <text>车价</text>
          <view class="img">
            <img class="X_icon" src="/static/icon/top_s.png" alt="">
          </view>
        </view>
        <view class="brand">
          <text>城市</text>
          <view class="img">
            <img class="X_icon" src="/static/icon/top_s.png" alt="">
          </view>
        </view>
        <view class="brand">
          <text>筛选</text>
          <view class="img">
            <img class="X_icon" src="/static/icon/screen.png" alt="">
          </view>
        </view>



<!--        车价-->
<!--        城市-->
<!--        筛选-->
      </view>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import StatusBar from '@/components/StatusBar'
import {NavList,currentIndex,Toggle} from './navbarModel';
</script>

<style scoped lang="scss">
  .navbar{

    height: 2rem;
    //width: 100%;
    //position: fixed;
    z-index: 999;
    padding: .5rem .5rem;
    display: flex;
    background: #DDD8D8;
    border-bottom: 1px solid #b8b8b855;
    box-shadow: 1px 1px 7px 0px #b8b8b855;
    //background-image: linear-gradient(#E1DDDC95,#E1E2E595);
    filter: blur(0.5);
    .list{
      margin: 0 .5rem;

      transition: .5s;
      font-size:1rem;

      .isLine{
        width: 100%;
      }
    }
    .isActive{
      display: inline;
      font-size:1.05rem;
      font-weight: bold;
      transition: 0.5s;
    }
    .bottom-line{
      transition: 0.5s;
      width: 0;
      height: 3px;
      background-image: linear-gradient(to right, #ff6700, #c5b403);
      margin-top: .4rem;
    }
  }
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
      top: 3.6rem;
      right: .5rem;
      .icon{
        width: 100%;
      }
    }

  }
  .typeClass{
    padding: .5rem;
    display: flex;
    justify-content: space-around
  }
  .brand{
    display: flex;
    justify-content: center;
    //align-items: center;
    .img{
      width: .8rem;
      height: .8rem;
    }
  }




</style>