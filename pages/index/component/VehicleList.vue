<template>
	<view>

	
	</view>
</template>

<script setup lang="ts">
try{
	
}catch(err){
	console.log(err)
}
// import {currentIndex} from '@/components/NavBar/navbarModel'
	import TypeVehicle from '@/components/TypeVehicle/TypeVehicle'
	import {reactive,ref,defineProps} from "vue"
const props = defineProps({
  currentIndex:{
    type:Number,
    default:''
  }
})

</script>

<style scoped>

</style>