<template>
  <view class="input flex-r">
    <input style="width: 100%;" type="text" max="18" v-model="email" placeholder="请输入邮箱" />
  </view>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'
import {email,preserve} from '../userModel'
watch(()=>email.value.length,(newVal,oldVal)=>{
  // console.log(newVal,oldVal)
  if(newVal>=17){
    preserve()
  }
  if(newVal>19){
    // @ts-ignore

    uni.showToast({
      title:'输入有误',
      icon:'error'
    })
  }
},{
  immediate:true,
  deep:true
})

</script>

<style lang="scss" scoped>
.input{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #b8b8b825;
  // border-bottom: 1px solid #b8b8b8;
  padding: 1rem .5rem;
}
.flex-r {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  flex: 1;
}
</style>