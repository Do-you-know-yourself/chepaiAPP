<template>
  <view>
    <StatusBar/>
    <rich-text :nodes="info"></rich-text>
  </view>
</template>

<script setup lang="ts">
import {ref,defineProps} from 'vue'
import {onReady} from '@dcloudio/uni-app'
import StatusBar from '@/components/StatusBar'

let xy = ref(['用户协议','会员等级说明'])

let info = ref('富文本信息')
const {id} = defineProps()
console.log(id)
onReady(()=>{
  // @ts-ignore
  uni.setNavigationBarTitle({
    title: xy.value[id]
  })
  console.log(xy.value[id])

})
</script>

<style scoped>

</style>