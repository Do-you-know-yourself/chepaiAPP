// @ts-ignore
import {ref,Ref} from "vue"

interface Banner{
	[Array]
}

export let bannerList:Ref<Banner> = ref([
    {
        url:'/static/img/bg1.webp',
        id:1
    },
    {
        url:'/static/img/bg2.webp',
        id:2
    },
    {
        url:'/static/img/bg3.webp',
        id:3
    },
])

export let toolsList = ref([
    {
        text:'我的关注',
        icon:'/static/icon/MyAttention.png',
        uri:'../user/Bidding/index',
        id:4
    },
    {
        text:'过户办证',
        icon:'/static/icon/TransferCertificate.png',
        uri:'../index/component/TransFer',
        id:2
    },
    {
        text:'浏览记录',
        icon:'/static/icon/BrowseRecords.png',
        uri:'../user/Bidding/index',
        id:5
    },
    {
        text:'历史成交',
        icon:'/static/icon/HistoricalTransaction.png',
        uri:'../user/Bidding/index',
        id:3
    },
    {
        text:'代驾',
        icon:'',
        id:7
    },
    {
        text:'代价',
        icon:'',
        id:6
    },
    // {
    //     text:'代价',
    //     icon:'',
    //     id:7
    // },
    // {
    //     text:'代价',
    //     icon:'',
    //     id:8
    // },
    // {
    //     text:'代价',
    //     icon:'',
    //     id:9
    // },
    // {
    //     text:'代价',
    //     icon:'',
    //     id:10
    // },
])

export const RoutePush = (i) =>{
    // if(i.id>)
    // @ts-ignore
    if(i.id>=6){
        // @ts-ignore
        return uni.showToast({
            title:'正在开发中',
            icon:'error'
        })

    }else{
// @ts-ignore
        uni.navigateTo({
            url:`${i.uri}?`+'id='+i.id+'&'+'title='+i.text,
            animationType:'pop-in'
        })
    }

}


interface VehicleList {

}
export const VehicleSource = ref([
    {
        heat:5000,
        Date:'12:00',
        num:30,
        city:"赣州市",
        explain:'按时成交',
        id:1,
        images:[
            {
                url:'/static/img/3.webp',
                id:1,
                NickName:'奥迪 奥迪A4L',
                price:37.7
            },
            {
                url:'/static/img/4.webp',
                id:2,
                NickName:'奥迪 奥迪A6',
                price:37.7
            }
        ]
    },{
        heat:9636,
        Date:'09:00',
        num:74,
        city:"抚州市",
        explain:'按时成交',
        id:2,
        images:[
            {
                url:'/static/img/5.webp',
                id:1,
                NickName:'特斯拉 Model 3',
                price:33.99
            },
            {
                url:'/static/img/6.webp',
                id:2,
                NickName:'特斯拉 Model S',
                price:37.7
            }
        ]
    }
])

