// @ts-ignore
import {ref,Ref} from "vue";
class arr {
    title:String;
    city:String
    src:String
    profile:String
    id:Number
    closing_cost:Number
    Transfer_fee:Number
}
// 过户办证
export let TransFerList:arr[] = ref([
    {
        title:'赣州代办',
        city:'赣州市',
        src:'/static/img/1.png',
        profile:'黑化肥会发挥黑化肥会发黑',
        id:1,
        closing_cost:300,
        Transfer_fee:400
    },
    {
        title:'南昌代办',
        city:'南昌市',
        src:'/static/img/1.png',
        profile:'黑化肥会发挥黑化肥会发黑',
        id:2,
        closing_cost:900,
        Transfer_fee:1400
    },
])


class rollType{
    nickname:string
    data:string
    quantity:number
    status:number
    time:string
    id:number

}
// 公告列表
export let roll:rollType[] = ref([
    {
        nickname:'一行拍专场',
        status:1,
        id:1
    },
    {
        nickname:'庞大拍卖会 (下午场) 专场',
        status:1,
        id:2
    },
    {
        nickname:'换车亦专场',
        status:1,
        id:3
    },

])
export let RollTotal = ref([
    {
        title:'今天场',
        Date:'01月12日',
        week:'星期三',
        id:1,

        children:[
            {
                nickname:'庞大拍卖会 (下午场) 专场',
                status:1,
                quantity:24,
                id:1
            },
            {
                nickname:'换车亦专场',
                quantity:8,
                status:1,
                id:2
            },
            {
                nickname:'庞大拍卖会 (下午场) 专场',
                quantity:11,
                status:1,
                time:'19:00',
                id:3
            },
            {
                nickname:'飞度 全国拍卖场',
                quantity:15,
                time:'17:00',
                id:4
            },
            {
                nickname:'长城 全国拍卖场',
                quantity:1,
                time:'18:00',
                id:5
            },
        ]
    },
    {
        title:'明天场',
        Date:'01月13日',
        week:'星期四',
        id:2,
        children:[
            {
                nickname:'正统集团拍专场',
                quantity:11,
                time:'14:00',
                id:1
            },
            {
                nickname:'友好拍专场',
                quantity:15,
                time:'17:00',
                id:2
            },
            {
                nickname:'长城 全国拍卖场',
                quantity:1,
                time:'18:00',
                id:4
            },
        ]
    }

])

class MechanismType {
    title:string
    type:string
    num:number
}
// 优选机构
export let Mechanism:MechanismType[] = ref([
    {
        title:'股机构',
        type:'',
        num:50
    },
    {
        title:'AA机构',
        type:'',
        num:10
    },


])