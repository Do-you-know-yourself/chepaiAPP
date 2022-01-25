<template>
	<view class="container">
    <StatusBar/>
    <BackNav :title="props.title" @access="access" :userinfo="true"></BackNav>
		<view class="avatar flex-r">
			<view class="left_text">头像</view>
			<view class="right_avatar" @click="UpLoadAvatar">
				<img src="" alt="">
			</view>
		</view>
		<!-- 手机号 -->
		<view class="phone flex-r">
			<view class="left_text">手机号</view>
			<view class="right_phone">
				{{13207080905}}
			</view>
		</view>
		<!-- 姓名 -->
		<view class="phone flex-r">
			<view class="left_text">姓名</view>
			<view class="right_phone">
				{{'十号'}}
			</view>
		</view>
		<!-- 性别 -->
		<view class="phone flex-r" >
			<view class="left_text">性别</view>
			<view class="right_phone">
				<view class="uni-list-cell-db" >
					<picker  @change="bindPickerChange" :value="index" :range="sex">
						<view class="uni-input" :style="{color:index==0?'#bfbfbf':'#2e2e2e'}">{{sex[index]}}</view>
					</picker>
				</view>
				<view class="right_icon" v-if="index===0">
					<img src="/static/icon/right_x.png" alt="">
				</view>
			</view>
		</view>
		<!-- 邮箱 -->
		<view class="phone flex-r">
			<view class="left_text">邮箱</view>
      <navigator class="right_phone" url="./Email">
        <view v-if="email">{{email}}</view>
        <view v-else>请先绑定邮箱</view>
        <view class="right_icon" v-if="email===0">
          <img src="/static/icon/right_x.png" alt="">
        </view>
      </navigator>


		</view>
    <view class="phone flex-r">
      <view class="left_text">经营城市</view>

<!--      <uni-data-picker placeholder="请选择地址" popup-title="请选择城市" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"-->
<!--                       @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>-->
      <uni-data-picker :localdata="items" popup-title="请选择所在的地区"  ></uni-data-picker>
    </view>
    <view></view>
    <uni-popup ref="popup" type="bottom">
      <view class="flex-col section">
<!--        &lt;!&ndash; #ifndef H5 &ndash;&gt;-->
<!--        <text class="text" @click="changeAvatar('camera')">拍摄</text>-->
<!--        <view class="divider"> </view>-->
<!--        &lt;!&ndash; #endif &ndash;&gt;-->
        <text class="text" @click="changeAvatar('album')">从相册选择</text>
        <view class="flex-col items-center button" @click="CloseAvatar">
          <text>取消</text>
        </view>
      </view>
    </uni-popup>

	</view>
	
</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'

	import BackNav from '@/components/BackNav/backnav';
  import {email} from '../userModel'
	import {
		ref,
		defineProps,
      Ref
	} from 'vue';
  import {uploadImageOne} from '@/utils/PublicMethod'
  // import UniPopup from "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.vue";

let items = ref([{
    text: "江西省",
    value: "1-0",
    children: [
      {
        text: "赣州市",
        value: "1-1",
        children:[
          {
            text:'章贡区',
            value:'1-1-1'
          }
        ]
      },
      {
        text: "南昌市",
        value: "1-2"
      }
    ]
  },
    {
      text: "北京市",
      value: "2-0",
      children: [
        {
          text: "东城区",
          value: "2-1"

        },
        {
          text: "西城区",
          value: "2-2"

        },
        {
          text: "崇文区",
          value: "2-3"

        },
      ]
    },
    {
      text: "天津市",
      value: "3-0"
    }]
)
	const props = defineProps({
		title: {
			type: String
		}
	})
const popup = ref(null);
  const UpLoadAvatar = ()=>{
    popup.value.open()
  }
  const CloseAvatar = ()=>{
    popup.value.close()
  }
	let index = ref(0);
	let sex = ref(['请选择性别','男','女','嬲'])
	
	const bindPickerChange = (e)=>{
		console.log(e)
		index.value = e.detail.value
	}
	const mailbox = (e)=>{
		console.log(e)
	}
	
	// @ts-ignore
	uni.setNavigationBarTitle({
		title: props.title
	})
	

	const access = () => {
		console.log(111)
	}
// 上传头像
  const changeAvatar = async (type) => {
    console.log(type);
    await uploadImageOne({
      url: 'upload/image',
      sourceType: [type]
    }, (res) => {
      console.log(res)
      if (res.status !== 200) return uni.showToast({
        title: data.msg,
        icon: 'none'
      })
      userEdit({ // 获取昵称和头像
        avatar: res.data.url,
        nickname: userInfo.value.nickname
      }).then(async (data) => {
        console.log(data)
        if (data.status !== 200) return uni.showToast({
          title: data.msg,
          icon: 'none'
        })
        CloseAvatar()
        await upDataUser('userInfo') // 更新数据
      })
    })
  }
</script>

<style scoped lang="scss">
	.avatar {
		// width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #b8b8b8;
		// border-bottom: 1px solid #b8b8b8;
		padding: 1rem .5rem;
		.right_avatar {
			width: 3rem;
			height: 3rem;
			border-radius: 5rem;
			border: 1px solid #303133;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.phone {
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
	.right_phone {
		display: flex;
		// color: #bbb;
	}
	.right_icon {
		display: flex;
		width: 1rem;
		img {
			width: 100%;
			height: 100%;
		}
	}
	input{
		width: 7rem;
	}
  .EmailPanel{
    width: 100%;
    //padding: 1rem 10rem;
    height: 3rem;
    background: #fff;
    //margin: 0 auto;
    input{
      width: 100%;
    }
  }
  .flex-col{
    display: flex;
    flex-direction: column;
  }
  .section {
    padding: 0.94rem 0.69rem 0.9rem 0.91rem;
    background-color: rgb(255, 255, 255);
  }
  .text {
    margin:0.91rem 0.91rem ;
    align-self: center;
    color: rgb(51, 51, 51);
    font-size: 14px;
    //
    line-height: 1.03rem;
    letter-spacing: -0.021rem;
    white-space: nowrap;
  }
  .items-center {   
    display: flex;
    align-items: center;
  } 
  .button { 
    padding: 0.63rem 0 0.56rem;
    color: rgb(255, 255, 255);
    font-size: 14px;
    //
    line-height: 1.13rem;
    letter-spacing: -0.022rem;
    white-space: nowrap;
    //background-color: ;
    border: 1px solid #b8b8b8;
    color: #b8b8b8;
    //border-radius: 0.56rem;
  }

</style>
