// @ts-ignore
import {ref,reactive} from 'vue'

interface VehicleList {
    type:string,
    info:string,
    id:number,
    value:string
}

export let VehicleInfo:VehicleList[] = ref([
    {
        type:'行驶里程',
        info:'5.65万公里',
        id:1
    },
    {
        type:'2017-06上牌',
        info:'4年7个月',
        id:2
    },

    {
        type:'排放标准',
        info:'国五',
        id:3
    },
    {
        type:'所属机构',
        info:'xx机构',
        id:4
    },
    {
        type:'机构信誉值',
        value:4.5,
        id:5,
        status:1
    },
    {
        type:'车辆所在地',
        info:'江西省赣州市',
        id:6
    },
    {
        type:'燃油类型',
        info:'汽油',
        id:7
    },
    {
        type:'使用性质',
        info:'非运营',
        id:8
    },
    {
        type:'车身颜色',
        info:'白色',
        id:9
    },
    {
        type:'车辆钥匙',
        info:'一把',
        id:9
    },
    {
        type:'年检有效期',
        info:'2022/08/04',
        id:10
    },
    {
        type:'交强险有效期',
        info:'2022/08/01',
        id:11
    },
    {
        type:'购置税',
        info:'完税',
        id:12
    },
    {
        type:'违章罚款',
        info:'0元',
        id:13
    },
    {
        type:'违章扣分',
        info:'0分',
        id:14
    },
    {
        type:'车主类型',
        info:'私车',
        id:15
    },
    {
        type:'产证变更记录',
        info:'无',
        id:16
    },
    {
        type:'过户次数',
        info:'0次',
        id:17
    },

])


export let score:VehicleList[] = ref([
    {
        type:'外观评分',
        value:85,
        id:1
    },
    {
        type:'骨架评级',
        value:'A',
        id:2
    },
    {
        type:'内饰评分',
        value:95,
        id:3
    },
])

export let AuctionList = ref([
        {
            Logo:'/static/img/ilogo.jpg',
            title:'万达集团拍专场',
            num:10,
            type:'开始暗拍',
            Date:'2022-1-15',
            time:'1652153650000',
            djs:'',
            children:[
                {
                    img:'/static/img/1.png',
                    id:1
                },
                {
                    img:'/static/img/2.jpg',
                    id:2
                },
                {
                    img:'/static/img/3.webp',
                    id:3
                },
            ]
        },
        {
            Logo:'/static/img/ilogo.jpg',
            title:'黑暗集团拍专场',
            num:10,
            type:'开始明拍',
            djs:'',
            time:'1652953660000',
            Date:'2022-1-16',
            children:[
                {
                    img:'/static/img/1.png',
                    id:1
                },
                {
                    img:'/static/img/2.jpg',
                    id:2
                },
                {
                    img:'/static/img/3.webp',
                    id:3
                },
            ]
        },
        // {
        //     Logo:'/static/img/ilogo.jpg',
        //     title:'光明集团dasd拍专场',
        //     num:11,
        //     type:'开始暗拍',
        //     Date:'2022-1-17',
        //     children:[
        //         {
        //             img:'/static/img/1.png',
        //             id:1
        //         },
        //         {
        //             img:'/static/img/2.jpg',
        //             id:2
        //         },
        //         {
        //             img:'/static/img/3.webp',
        //             id:3
        //         },
        //     ]
        // },
        // {
        //     Logo:'/static/img/ilogo.jpg',
        //     title:'光明集团拍专场',
        //     num:11,
        //     type:'开始暗拍',
        //     Date:'2022-1-18',
        //     children:[
        //         {
        //             img:'/static/img/1.png',
        //             id:1
        //         },
        //         {
        //             img:'/static/img/2.jpg',
        //             id:2
        //         },
        //         {
        //             img:'/static/img/3.webp',
        //             id:3
        //         },
        //     ]
        // },
        // {
        //     Logo:'/static/img/ilogo.jpg',
        //     title:'光明dasd集团拍专场',
        //     num:11,
        //     type:'开始暗拍',
        //     Date:'2022-1-19',
        //     children:[
        //         {
        //             img:'/static/img/1.png',
        //             id:1
        //         },
        //         {
        //             img:'/static/img/2.jpg',
        //             id:2
        //         },
        //         {
        //             img:'/static/img/3.webp',
        //             id:3
        //         },
        //     ]
        // },
    ])