<template>
  <view class="index_container">
    <scroll-view>
      <!-- 搜索框   -->
      <view class="search">
        <view class="left_select" @click="cityScreen">
          <view>{{searchTitle}}</view>
          <image class="top_icon" src="/static/icon/top.png" alt=""/>
        </view>
        <view class="search_input">
          <image class="icon" src="/static/icon/search.png" alt="" />
          搜索您想要的车
        </view>
        <view class="right_QrCode">
          <image class="icon" src="/static/icon/Scan_code.png" alt="" />
        </view>
      </view>
      <!-- 轮播图   -->
      <view class="swiper-index">
        <swiper
            :autoplay="true"
            :duration="1000"
            circular="true"
            :indicator-dots="true"
            :interval="3000"
            indicator-color="#4e4e4e39"
            indicator-active-color="#fff"
            style="height: 100px;margin: .5rem 0"
        >
          <swiper-item v-for="item in bannerList" :key="item.id" >
            <view class="swiper-item"
                  style="width: 383px;height: 100%; background-color: rgba(0,0,0,0);"
            >
              <img :src="item.url" mode=""
                   style="width: 22.6rem;height: 100%;border-radius: .5rem .5rem;"/>
            </view>
          </swiper-item>
        </swiper>
      </view>
      <!-- 热门应用   -->
      <view class="Popular_tools">
        <view class="toolsList" >
          <view :ref="scroll" @change="add" class="icon_list" @click="RoutePush(item)" v-for="item in toolsList">
            <view class="icon_container">
              <image :src="item.icon ||'/static/icon/follow.png'" alt="" />
              <view>{{item.text}}</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 滚动公告   -->
      <view class="newScroll">
        <view class="scroll_Left">
          <image class="image_icon" src="/static/icon/Notice.png"/>
          <text class="text_13">公告:</text>
        </view>
        <view style="width: 70%;line-height: 1rem;overflow: hidden; font-size:12px;">
          <swiper :autoplay="true" circular="true"
                  :duration="1000" :interval="3000" :vertical="true"
                  style="height: 1rem;">
            <swiper-item v-for="item in roll" :key="item.id">
              <view class="swiper-item">
                <text>{{ item.nickname }}{{}},正在竞价中！</text>
              </view>
            </swiper-item>
          </swiper>
        </view>
        <navigator url="./component/Notice?title=竞价公告">
        <view class="scroll_right">
          <view class="text">查看全部</view>
          <view class="img">
            <img src="/static/icon/right_x.png" alt="">
          </view>
        </view>
        </navigator>

      </view>
      <!-- 优选机构    -->
      <view class="Preferred">
        <navigator url="./component/mechanism?title=优选机构">
        <view class="Preferred_container">
          <text>1247辆商家车源</text>
          <view class="img">
            <text>全部车源</text>
            <image src="/static/icon/right_x.png" alt="" class="icon" />
          </view>
        </view>
          <view class="swiper_container">
            <swiper :autoplay="true"
                    :duration="1000"
                    circular="true"
                    :indicator-dots="true"
                    :interval="3000"
                    indicator-color="#4e4e4e"
                    indicator-active-color="#6699FF"
                    style="margin: .5rem 0">
              <swiper-item v-for="i in VehicleSource"
                  >
                <view class="swiper_container_box" >
                  <view class="header">
                    <view class="left_btn">
                      <view class="icon">
                        <image src="/static/icon/ls.png"/>
                      </view>
                      <text>正在报价</text>
                    </view>
                    <view class="right_heat">
                      <view class="icon">

                        <image src="/static/icon/ls.png"/>
                      </view>
                      <text>热度{{i.heat||0}}</text>
                    </view>
                  </view>
                  <view class="Date_day">
                      <text>今日场{{i.Date}}</text>
                      <text>|</text>
                      <text>{{i.city}} {{i.explain}}</text>
                  </view>
                  <view class="img_list" >
                    <view class="img_box" v-for="j in i.images">
                      <view class="img">
                        <image :src="j.url"></image>
                      </view>
                      <view class="name">
                        <text>{{j.NickName}}</text>
                        <text style="color: #ff6700">{{j.price||0}}万起</text>
                      </view>

                    </view>
                  </view>
                </view>


              </swiper-item>
            </swiper>
          </view>
        </navigator>

      </view>
      <!-- 车列表   -->
      <vehiclelist/>
    </scroll-view>
    <uni-popup ref="city">
      <view class="flex-col section flex-display">
       <view class="list" :class="{'isActive':idx==current}" v-for="(i,idx) in cityList" @click="choice(i,idx)">
         {{i}}
       </view>
      </view>
    </uni-popup>

  </view>
</template>

<script setup lang="ts">
import {ref,watch,Ref} from 'vue'
import {bannerList,toolsList,RoutePush,VehicleSource} from './HomeModel'
import {roll,Mechanism} from './indexModel'
 import vehiclelist from '@/components/vehicleList/vehiclelist'
interface List{  readonly
  [Array]
}
let cityList:List[] = ref(["北京市", "上海市", "天津市", "重庆市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "江苏省",
  "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "四川省",
  "贵省", "云南省", "西藏自治区", "陕西省", "甘肃省", "宁夏回族自治区", "青海省", "新疆维吾尔族自治区", "香港特别行政区", "澳门特别行政区",
  "台湾省", "其它"
])
let current:Ref<Number> = ref(0)
let searchTitle:Ref<String> = ref('赣州市')
let scroll = ref()

const add =(i)=>{
  console.log(i)
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

// watch(()=>{
//
// })
</script>

<style scoped lang="scss">

.index_container{

  padding: 0 .5rem 1rem .5rem;
  background: #b8b8b805;
  //background-image: linear-gradient(rgba(148, 110, 78, 0.2),#F4F5F7);

}
.search{
  display: flex;
  background: #fff;
  border-radius: 5rem;
  padding: .3rem .5rem;
  .left_select{
    width: 4rem;
    border-right: 1px solid #f5f5f5;
    margin-right: .5rem;
    display: flex;
    align-items: center;
    view{
      //width: 4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
    }
    .top_icon{
      width: 1rem;
      height: 1rem;
      margin-left: .3rem;

    }
  }
  .search_input{
    display: flex;
    color: #9b9a9a;
    align-items: center;
    flex: 1;
    font-size: .8rem;
    image{
      width: 1rem;
      height: 1rem;
      margin-right: .5rem;

    }
  }
  .right_QrCode{
    display: flex;
    align-items: center;
    width: 1rem;
    image{
      width: 1rem;
      height: 1rem;
    }

  }
}


.swiper-item>img{
  background-size: 100%;
}
.Popular_tools{
  //width: 100%;
  height: 5rem;
  background: #fff;
  border-radius: .3rem;
  padding: .5rem 0rem;
  overflow-y: hidden;
  display: flex;
}
.toolsList{
  display: flex;

}
.icon_list{
  display: flex;
  align-items: center;
  .icon_container{
    //margin: 0 .2rem ;
    //width: 4.5rem; // 5个
    width: 5.5rem; // 4个
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    transition: 1s;
    image{
      width: 1.5rem;
      height: 1.5rem;
      margin-bottom: .5rem;
    }
    view{


      //display: flex;
    }

  }
}
.isActive{
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
/* 滚动公告*/
.newScroll{
  margin: .5rem 0;
  border-radius: .5rem;
  display: flex;
  //justify-content: center;
  align-items: center;
  height: 2rem;
  background: #fff;
}
.scroll_Left{
  width: 5rem;
  display: flex;
  align-items: center;
  image{
    margin: 0 .3rem;
  }
}
.scroll_right{
  width: 5.5rem;
  display: flex;
  font-size:.5rem;
  .text{
    color: #6a6a6a;
    margin-right: .5rem;
  }
  .img{
    width: 1rem;
    height: 1rem;
    background-size: 50%;
    img{
      width: 100%;
      height: 100%;
    }
  }

}
.image_icon {
  width: 1.41rem;
  height: 1.59rem;
}
/* 优选机构 */
.Preferred {
  padding: .5rem .5rem;
  //width: 100%;
  //height: 100rem;
  //background: url("/static/icon/jigouBG.png") no-repeat center center;
  background: #fff;
  border-radius: .3rem;

  .Preferred_container {
    padding: 0 .5rem;
    display: flex;
    justify-content: space-between;
    .img{
      border: 1px solid #b8b8b8;
      padding:.2rem .5rem;
      border-radius: 5rem;
      font-size: .8rem;
      color: #b8b8b8;

      text:nth-child(1){
        margin-right: .5rem;
      }
    }
  }
}
.section {
  padding: 0.94rem 0.69rem 0.9rem 0.91rem;
  background-color: rgb(255, 255, 255);
}
.flex-display{
  //width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  .list{
    padding:.5rem .5rem;
    border: 1px solid #b8b8b855;
    border-radius: 5rem;
    margin: .5rem;
  }
}

.swiper_container{
  background: #fff;
  padding: .3rem;
  swiper{
    //padding: 3rem 0;
    //height: 180px;
    //height: ;
    height:13rem;

    swiper-item{

      //padding: 1rem 0;
    }
  }
}
/* 机构 模块重构*/
.swiper_container_box{
  //border: 1px solid #b8b8b8;
  padding: .5rem;
  background: #fff;

  .header{
    display: flex;
    justify-content: space-between;
    .left_btn{
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5rem;
      border: 1px solid #b8b8b8;
      //padding:.3rem .5rem;
      padding: 0 .5rem;
      .icon{
        width: 1.5rem;
        height: 1.5rem;
        image{
          width: 100%;
          height: 100%;
        }
      }

    }
    .right_heat{
      display: flex;
      align-items: center;
      justify-content: center;
      .icon{
        width: 1.5rem;
        height: 1.5rem;
        image{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .img_list{
    display: flex;
    .img_box{
      //height: 5rem;
      margin: .5rem 0;
      padding-right:.5rem ;
      .img{
        width: 10rem;
        height: 5rem;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .name{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }


  }
}



/// 隐藏滚动条 /
 ::-webkit-scrollbar { display: none;
            width: 0 !important;
            height: 0 !important;
            -webkit-appearance: none;
            background: transparent;
          }

</style>