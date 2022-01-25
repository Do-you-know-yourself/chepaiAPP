// @ts-ignore
import {ref,Ref} from 'vue'

// type arr = {title:String,icon:String,id:number}
class arr {
    title:String;
    icon:String;
    id:number;
	class:String
}
interface orderTitle {
    title:string,
    id:number
}
export let list:arr[] = ref([
    {
        title:'竞价中',
        icon:'/static/icon/jp.png',
        id:1
    },
    {
        title:'结标中',
        icon:'/static/icon/jb.png',
        id:2
    },
    {
        title:'竞价历史',
        icon:'/static/icon/ls.png',
        id:3
    },
    {
        title:'我的关注',
        icon:'/static/icon/gz.png',
        id:4
    },
    {
        title:'浏览记录',
        icon:'/static/icon/jl.png',
        id:5
    },
])
export let order:arr[] = ref([
    {
        title:'待提车',
        icon:'/static/icon/love.png',
        id:1
    },
    {
        title:'待付款',
        icon:'/static/icon/love.png',
        id:2
    },
    {
        title:'待过户',
        icon:'/static/icon/love.png',
        id:3
    },
    {
        title:'仲裁中',
        icon:'/static/icon/love.png',
        id:4
    },
    {
        title:'全部订单',
        icon:'/static/icon/love.png',
        id:5
    },
])
export let setupList:arr[] = ref([
    {
        title:'投诉建议',
        icon:'/static/icon/love.png',
        uri:'./opinion/index',
        id:1
    },
    {
        title:'平台规则',
        icon:'/static/icon/love.png',
        uri:'./rule/index',
        id:2
    },
    {
        title:'联系客服',
        icon:'/static/icon/love.png',
        uri:'./SetUp/index',
        id:3
    },
    {
        title:'设置',
        icon:'/static/icon/love.png',
        uri:'./SetUp/index',
        id:4
    },

])
export let login:arr[] = ref([
    {
        title:'密码登录',
        class:'passwordLogin',
        id:1
    },
    {
        title:'快捷登录',
        class:'QuickLogon',
        id:2
    },
])


// 获取验证码按钮倒计时
let timer;
export let Disable:Ref<boolean> = ref(false)
export let TimeNum:Ref< String| Number> = ref('获取验证码')
export const BtnCode = ()=>{
    Disable.value =true // 禁用按钮
    clearInterval(timer) // 清除定时器
    TimeNum.value = 60
     timer = setInterval(()=>{
        if(TimeNum.value===0){
            TimeNum.value='重新获取验证码'
            Disable.value=false
            clearInterval(timer)
        }else{
            TimeNum.value--
        }
    },1000)
}
export const RouToPush = (i)=>{ // 跳转
    // @ts-ignore
    uni.navigateTo({
        url:'./Bidding/index?'+'id='+i.id+'&'+'title='+i.title,
        animationType:'pop-in'
    })
}
export const RegPush = (i)=>{ // 注册页跳转
  
    // @ts-ignore
    uni.navigateTo({
        url:'../register/index?' +'title='+i.title,
        animationType:'pop-in'
    })
}
export const to = (i)=>{ // 规则页面
    // @ts-ignore
    uni.navigateTo({
        url:'../rule/index?' +'title='+i.title,
        animationType:'pop-in'
    })
}
// 用户信息
export const info = (i)=>{
	// @ts-ignore
	uni.navigateTo({
	    url:'./UserInfo/index?' +'title='+i.title,
	    animationType:'pop-in'
	})
}
export const OrderFn = (i)=>{
    // @ts-ignore

    uni.navigateTo({
        url:'./order/index?'+'id='+i.id+'&'+'title='+i.title,
        animationType:'pop-in'
    })

}
// 邮箱输入校验

export let email = ref('')
export const preserve = ()=>{

    // @ts-ignore
    uni.showToast({
        title:'保存成功',
        icon:'success'
    });
    // @ts-ignore

    uni.navigateTo({
        url:'./index'
    })
}

export const goTo = (i)=>{
    if(i.id===3){
        // @ts-ignore
        uni.showToast({
            title:'正在开发中',
            icon:'error'
        })
        return false;
    }
    // @ts-ignore
    uni.navigateTo({
        url:`${i.uri}?` +'id='+i.id+'&'+'title='+i.title,
        animationType:'pop-in'
    })
}



export let orderList:orderTitle[] = ref([
    {
        title:'全部',
        id:1
    },
    {
        title:'未结标',
        id:2
    },
    {
        title:'已中标',
        id:3
    },
    {
        title:'已成交',
        id:4
    },
    {
        title:'已取消',
        id:5
    },
])


