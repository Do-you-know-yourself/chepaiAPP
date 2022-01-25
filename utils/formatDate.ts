// @ts-ignore
import {ref,reactive} from 'vue'
import {AuctionList} from "../pages/BiddingIndex/BidModel";
export let timeDom = ref()

export let list = reactive({
    data:[]
})
export let tim = null;

export const countTime=(value)=> {
    // clearInterval(timer)
    // timer = null
    //获取当前时间
    let date = new Date();
    let now = date.getTime();
    //设置截止时间
    let endDate = new Date(value);
    let end = endDate.getTime();
    //时间差
    let differTime = end - now;
    //定义变量,h,m,s保存倒计时的时间
    let h, m, s;
    if (differTime >= 0) {
        h = Math.floor(differTime / 1000 / 60 / 60);
        m = Math.floor(differTime / 1000 / 60 % 60);
        s = Math.floor(differTime / 1000 % 60);
        h = h < 10 ? ("0" + h) : h;
        m = m < 10 ? ("0" + m) : m;
        s = s < 10 ? ("0" + s) : s;
        timeDom.value =  h + "小时" + m + "分" + s + "秒";
        //递归调用函数所以是延时器不是定时器

        setInterval(()=>{
            countTime(value)
        },1000)
        // timer = setInterval(function () {
        //     countTime(value)
        //     clearInterval(timer)
        //
        // }, 1000);
        // console.log(h+m+s)

        return h + "小时" + m + "分" + s + "秒";

        // console.log(`${h} + "小时" +${ m }+ "分" +${ s} + "秒";}`)

    } else {
        timeDom.value ="00小时 00分 00秒";
    }}
// export function countDownFun(time) {
//     time--
//     let nowTime = new Date().getTime(); //现在时间
//     if(nowTime<=time){
// //获取时间差
//         let timediff=Math.round((time-nowTime)/1000);
// //获取还剩多少天
//         let day=parseInt(timediff/3600/24);
// //获取还剩多少小时
//         let hour=parseInt(timediff/3600%24);
// //获取还剩多少分钟
//         let minute=parseInt(timediff/60%60);
// //获取还剩多少秒
//         let second=timediff%60;
//         return day +'天'+hour+'小时'+minute+'分'+second+'秒'
//     }else{
//
//         return '00天00小时00分00秒';
//     }
// }
export const CountDown = ()=>{
    let arr:string[]|number[] = []
    AuctionList.value.forEach((i,index)=>{
        AuctionList.value[index]['djs'] =AuctionList.value[index]['time']
        console.log()

        arr=AuctionList.value.length<14?AuctionList.value:'00' + "小时" + '00' + "分" + '00' + "秒";
        console.log(list.data)
    })
    tim = setInterval(()=>{
        for (let i in arr){
            let a = parseInt(arr[i]['time'])
            let t = new Date().getTime()
            let ti = a - t;
            if(ti>0){
                // @ts-ignore
                var dd = Math.floor(ti / 1000 / 60 / 60 / 24);
                var hh = Math.floor((ti / 1000 / 60 / 60) % 24);
                var mm = Math.floor((ti / 1000 / 60) % 60);
                var ss = Math.floor((ti / 1000) % 60);
            }
            arr[i]['djs'] = hh + "小时" + mm + "分" + ss + "秒";
            list.data = arr
        }


    },1000)
}











//在pc端浏览器可以这样写
// let endDate = new Date("2022-1-30 00:00:00");
//移动端必须这样写，因为ios不支持日期中间是-链接，会报错