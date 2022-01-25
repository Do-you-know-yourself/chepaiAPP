<template>
  <view class="container">
    <StatusBar/>
    <BackNav class="navbar" :title="'添加私人订阅'" :Reset="Reset"></BackNav>
    <view class="scroll" >
      <scroll-view style="height: 100%" scroll-y>
        <!--   整个容器     -->
        <view class="Model_container">
          <view class="vehicle_type" > <!-----车辆类型容器 ------>
            <view class="header">车辆类型</view>
            <view class="vehicle_container" >

              <view class="type" :class="[{'isActive':arr.includes(index)},{'isActive':i.bon}]" @click="Select(index)" v-for="(i,index) of vehicle_list">
                {{i.title}}
              </view>
            </view>
          </view>
          <view class="brand">
            <text>品牌</text>
            <view class="choice" v-if="!brand.length">
              <view class="icon">
                <img src="/static/icon/add.png" alt="">
              </view>
              <text>点击添加品牌</text>
            </view>
            <view class="add_brand" v-if="brand.length" v-for="i in brand">
              <text>{{i}}</text>
            </view>
          </view>
          <!--   车信息       -->
          <view class="price_info">
            <view class="price">
              <view class="txt">
                <text>价格</text>
                <text>(万元)</text>
              </view>
              <slider-range :value="subscribeInfo.rangeValue"
                            v-model="subscribeInfo.rangeValue"
                            :min="0"
                            :max="subscribeInfo.rangeMax"
                            :step="1"
                            :bar-height="3"
                            :block-size="26"
                            background-color="#EEEEF6"
                            active-color="#FF6B00"
                            :format="format"
                            :decorationVisible="true"
                            style="width: 100%;"
                            @change="handleRangeChange"></slider-range>
            </view>
            <view class="price">
              <view class="txt">
                <text>车龄</text>
                <text>(年)</text>
              </view>
              <slider-range :value="subscribeInfo.VeHiCleAge"
                            :min="0"
                            :max="subscribeInfo.VeHiCleMax"
                            :step="1"
                            :bar-height="3"
                            :block-size="26"
                            background-color="#EEEEF6"
                            active-color="#FF6B00"
                            :format="Vehicle_age"
                            :decorationVisible="true"
                            style="width: 100%;"
                            @change="VehicleFn"></slider-range>
            </view>
            <view class="price">
              <view class="txt">
                <text>里程</text>
                <text>(万公里)</text>
              </view>
              <slider-range :value="subscribeInfo.kilometre"
                            :min="0"
                            :max="subscribeInfo.KiLomeMax"
                            :step="1"
                            :bar-height="3"
                            :block-size="26"
                            background-color="#EEEEF6"
                            active-color="#FF6B00"
                            :format="KiLomeFn"
                            :decorationVisible="true"
                            style="width: 100%;"
                            @change="KiLome_Tre"></slider-range>
            </view>

          </view>
          <!--   排放标准       -->
        <view class="standard">
          <view class="header">
            排放标准
          </view>
          <view class="standard_container">
            <view class="standardList"
                  :class="[{'isActive':subscribeInfo.evaluateArr.includes(index)},{'isActive':i.bon}]"
                  v-for="(i,index) in subscribeInfo.evaluate"
                  @click="Standard_Selection(index)"
            >
              {{i}}
            </view>
          </view>
        </view>
        </view>
      </scroll-view>
    </view>
    <view class="btn">
      <button>确定</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
import StatusBar from '@/components/StatusBar'
import SliderRange from '@/components/slider-range/index.vue'
import BackNav from '@/components/BackNav/backnav'
import {ref} from 'vue'
let num = ref(0.11)
let brand =ref([])
let subscribeInfo = ref({
  rangeValue:[0,60], // 价格
  rangeMax:60,
  VeHiCleAge:[0,8], // 车龄
  VeHiCleMax:8,
  kilometre:[0,15], // 里程
  KiLomeMax:15,
  evaluate:['国一','国二','国三','国四','国五','国六'],
  evaluateArr:[]

})

const Standard_Selection = (i)=>{
  if(subscribeInfo.value.evaluateArr.includes(i)){
    subscribeInfo.value.evaluateArr = subscribeInfo.value.evaluateArr.filter(function (e){
      return e != i;
    })
  }else{
    subscribeInfo.value.evaluateArr.push(i)
    // console.log(arr.value)
  }
}

// 价格-提示
const format = (val)=>{
  if (val>=60){
    return val+'万元以上'
  }
  return val + '万元'
}
// 价格
const handleRangeChange=(e)=>{

  subscribeInfo.value.rangeValue = e
}
// 车龄-提示
const Vehicle_age = (e)=>{
  if (e>=8){
    return e+'年以上'
  }
  return e + '年'
}
// 车龄
const VehicleFn = (e)=>{
  subscribeInfo.value.VeHiCleAge = e
}
// 里程
const KiLome_Tre = (e)=>{
  subscribeInfo.value.kilometre = e
}
const KiLomeFn = (e)=>{
  if (e>=15){
    return e+'万公里以上'
  }
  return e + '万公里'

}




// let brand =ref(['阿斯顿马丁','宝马一系','宝马二系'])
let arr =ref([])

const Select = (i)=>{
  //includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
  //filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
  // console.log(i)
  if(arr.value.includes(i)){
    arr.value = arr.value.filter(function (e){
      return e != i;
    })
  }else{
    arr.value.push(i)
    // console.log(arr.value)
  }

  // 第二种方法
  // 布尔值取反就行了
  // vehicle_list.value[i].bon =!vehicle_list.value[i].bon
}
const Reset = ()=>{
  console.log('重置')
  arr.value = []
}
let vehicle_list = ref([
  {
    title:'轿车',
    id:1,
    bon:false
  },
  {
    title:'SUV',
    id:2,
    bon:false

  },
  {
    title:'客车',
    id:3,
    bon:false

  }



])
</script>

<style scoped lang="scss"> 
.scroll{
  height: 85vh;
  background: #ffffff55;
}

.btn{
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: .5rem 0rem;
  background: #fff;
  box-shadow: 0px -1px 7px 0px #ffffff55;


  button{
    width: 95vw;
    margin: 0 auto;
    border-radius: 5rem;
    background: #ff6700;
    color: #fff;
    //padding: .5rem 0;
    //width: ;
  }
}
.Model_container{
  padding: .5rem;
  .vehicle_type{
    margin: .5rem 0;
    background: #fff;
    padding: .5rem .2rem;
    .vehicle_container{
      margin-top: 0.5rem;
      display: flex;
      padding: 0.5rem;
      align-content: center;
      flex-wrap: wrap;
      flex-direction: row;
      .type{
        padding:.5rem 0rem;
        background: #b8b8b855;
        border-radius: 5rem;
        //margin: .5rem;
        display: flex;
        flex: 0 0 28.33%;
        flex-direction: column;
        justify-content: center;
        margin: 0.5rem;
        align-items: center;


      }
      .isActive{
        background: #ff6700;
        color: #fff;
      }
    }
  }
}
.brand{
  padding: .5rem;
  background: #fff;
  display: flex;
  text:nth-child(1){
    padding: .5rem;
  }
  .add_brand{
    padding: .5rem;
    border-radius: 5rem;
    background: #ff670055;
    color: #fff;
  }
  .choice{
    display: flex;
    align-items: center;
    margin: 0 auto;
    .icon{
      margin:0 .5rem;
    }
  }
}
.price_info{
  padding: .5rem;
  //border: 1px solid #b8b8b855;
  background: #FFFFFF;
  margin: .5rem 0;
}
.price{
  display: flex;
  align-items: center;
  font-size: .6rem;
  .txt{
    //width: 5rem;
    margin: 0 .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text{
      width: 100%;

    }
    text:nth-child(1){
      padding:0 .1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    text:nth-child(2){
      justify-content: center;


      padding:0 .5rem;
      display: flex;
      align-items: center;
    }
  }
}

.standard{
  margin: .5rem 0;
  background: #fff;
  padding: .5rem;


  .header{

    font-weight: bolder;
    margin-bottom: .5rem;
  }
  .standard_container{
    margin-top: 0.5rem;
    display: flex;
    padding: 0.5rem;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    .standardList{
      padding:.5rem 0rem;
      background: #b8b8b855;
      border-radius: 5rem;
      //margin: .5rem;
      display: flex;
      flex: 0 0 28.33%;
      flex-direction: column;
      justify-content: center;
      margin: 0.5rem;
      align-items: center;
    }
    .isActive{
      background: #ff6700;
      color: #fff;
    }
  }
}
</style>