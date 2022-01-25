<template>
  <view class="backNavbar">
    <view class="left_back " @click="back">
      <img class="X_icon" src="/static/icon/left.png" alt="">
    </view>
    <view class="content_title">{{props.title}}</view>
    <view class="right" @click="access" v-if="userinfo">{{userinfo?'保存':''}}</view>
    <view class="reset" v-else-if="Reset" @click="Reset">重置</view>
    <view class="right" v-else></view>
  </view>
</template>

<script setup lang="ts">
import {ref,defineProps,defineEmits} from 'vue';


const props = defineProps({
  id:{
    type:Number,
  },
  title:{
    type:String,
  },
  userinfo:{
	  type:Boolean
  },
  Reset:{

  }
})
// 声明事件
const emit = defineEmits(['access','Reset'])
const access = ()=>{
	// 执行
	emit('access')
}
const reset = ()=>{
  emit('Reset')
}
const back = ()=>{
  let navigateBack: any;
  // @ts-ignore

  navigateBack = uni.navigateBack();
}


</script>

<style scoped lang="scss">
.backNavbar{
  padding: .5rem .5rem;
  border-bottom: 1px solid #b8b8b855;
  box-shadow: 1px 1px 7px 0px #b8b8b855;
  height: 2rem;
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left_back{
    width: 1.2rem;
  }
}
</style>