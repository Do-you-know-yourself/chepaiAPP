 // 多个倒计时
// import {InitTime} from "../../../utils/formatDate";
// import {AuctionList} from '../BidModel'

// export default {
//   data () {
//     return {
//       active: 'tab-container1',
//       pinkFont:true,
//       // 上拉刷新、下拉加载
//       allLoaded: false, //如果为true,禁止上拉刷新
//       autoFill: false, //取消自动填充，
//       list: [],
//     }
//   },
//   created() {
//     // var ssss = [-->
//     //   {"title": "小心愿，大梦想","pic":"","count":"34","time":"1652153650000"},-->
//     //   {"title": "杭州国际时装周童模招募","pic":"","count":"36","time":"1652153650000"},-->
//     //   {"title": "怪兽bobo全线代言火爆杭城的联名秀招募童模啦！","pic":"","count":"74","time":"1682153650000"},-->
//     //   {"title": "汉风唐韵 、别","pic":"","count":"266","time":"1662153650000"},-->
//     //   {"title": "听说你们想和明星超模同台“PK”？","pic":"","count":"97","time":"1642153650000"},-->
//     // ];-->
//     AuctionList.map( (obj,index)=>{
//       this.$set(
//           obj,"djs",InitTime(obj.time)
//       );
//     })
//     this.list = AuctionList;
//   },
//   mounted() {
//     setInterval( ()=> {
//       for (var key in this.list) {
//         var aaa = parseInt( this.list[key]["time"] );
//         var bbb = new Date().getTime();
//         var rightTime = aaa - bbb;
//         if (rightTime > 0) {
//           var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
//           var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
//           var mm = Math.floor((rightTime / 1000 / 60) % 60);
//           var ss = Math.floor((rightTime / 1000) % 60);
//         }-->
//         this.list[key]["djs"] =  hh + "小时" + mm + "分" + ss + "秒";
//         // console.log(this.list)-->
//       }-->
//     }, 1000);
//
//  }
//  methods: {
//
//  }
// }
//
//



// 多个定时器第二中写法

 // let bargainGoods = list.data
 //
 // let serverTime = ref(0)
 // let timer = null
 //
 //
 //
 // const Djs_time = ()=>{
 //   timer = setInterval(()=>{
 //     serverTime.value = new Date().getTime()
 //     // console.log(serverTime.value)
 //   },1000)
 // }
 // const Djs_timeList = (i)=>{
 //   console.log(i)
 //   //  此处 itemEnd 的日期是年月日时分秒
 //   var endItem = new Date(i).getTime(); //获取列表传的截止时间，转成时间戳
 //   var nowItem = serverTime.value; //获取当前时间
 //   var rightTime = endItem - nowItem; //截止时间减去当前时间
 //   console.log(endItem)
 //   if (rightTime > 0) {
 //     //判断剩余倒计时时间如果大于0就执行倒计时否则就结束
 //     var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
 //     var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
 //     var mm = Math.floor((rightTime / 1000 / 60) % 60);
 //     var ss = Math.floor((rightTime / 1000) % 60);
 //     var showTime = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
 //   } else {
 //     var showTime = "";
 //   }
 //   console.log(showTime)
 //   return showTime;
 // }
 // Djs_time()// 调用定时器
 // if(bargainGoods.length!=0){
 //   for(let key in bargainGoods){
 //     var hour = 0;
 //     var startime = 0;
 //   }
 // }
 // // 获取服务器时间
 // const findServiceTime = ()=>{
 //   serverTime.value = new Date().getTime()
 //
 // }
