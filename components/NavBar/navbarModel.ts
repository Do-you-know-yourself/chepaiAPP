// @ts-ignore
import {reactive,ref} from "vue"

export let NavList = ref([
    {
        title:'首页',
        id:1
    },
    {
        title:'豪华车',
        id:2
    },
    {
        title:'新能源车',
        id:3
    },
    {
        title:'准新车',
        id:4
    },

])
export let currentIndex = ref(1);

export const Toggle = (i:number)=>{
	try{
		currentIndex.value = i
		console.log(currentIndex.value)
	}catch(err){
		console.log(err)
	}
    



}

