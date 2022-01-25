<template>
	<view class="container">
    <StatusBar/>
		<BackNav :title="props.title" @access="access" :userinfo="true"></BackNav>
		<navigator class="right_phone" url="./Email">
			<view class="avatar flex-r">
				<view class="left_text">修改账号密码</view>
				<view class="right_icon">
					<img src="/static/icon/right_x.png" alt="">
				</view>
			</view>
		</navigator>
		<navigator class="right_phone " url="./Email">
			<view class="phone flex-r">
				<view class="left_text">修改手机号</view>
				<view class="right_phone">
					<text>132****2905</text>
					<view class="right_icon">
						<img src="/static/icon/right_x.png" alt="">
					</view>
				</view>
			</view>
		</navigator>
		<navigator class="right_phone" url="./Email">
			<!-- 性别 -->
			<view class="phone flex-r">
				<view class="left_text">消息推送设置</view>
				<view class="right_phone">
					<text>去开启</text>
					<view class="right_icon" v-if="index===0">
						<img src="/static/icon/right_x.png" alt="">
					</view>
				</view>
			</view>
		</navigator>
		<navigator class="right_phone" url="./Email">
			<view class="avatar flex-r">
				<view class="left_text">账户注销</view>
				<view class="right_icon">
					<img src="/static/icon/right_x.png" alt="">
				</view>
			</view>
		</navigator>

		<!--  设置   -->
    <!--  清除缓存   -->
		<view class="setup">
			<navigator class="right_phone" url="./Email">
				<view class="avatar flex-r">
					<view class="left_text">清除缓存</view>
					<view> 78.62M
					</view>
				</view>
			</navigator>
      <!--  版本控制   -->
			<navigator class="right_phone " url="./Email">
				<view class="phone flex-r">
					<view class="left_text">当前版本</view>
					<view class="right_phone">
						<text>V8.2.1</text>
						<view class="right_icon">
							<img src="/static/icon/right_x.png" alt="">
						</view>
					</view>
				</view>
			</navigator>
      <!--  检测更新   -->
      <navigator class="right_phone" url="./Email">

				<view class="phone flex-r">
					<view class="left_text">检测更新</view>
					<view class="right_phone">

						<view class="right_icon" v-if="index===0">
							<img src="/static/icon/right_x.png" alt="">
						</view>
					</view>
				</view>
			</navigator>
      <!--  关于我们   -->

      <navigator class="right_phone" url="./Email">
				<view class="avatar flex-r">
					<view class="left_text">关于我们</view>
					<view class="right_icon">
						<img src="/static/icon/right_x.png" alt="">
					</view>
				</view>
			</navigator>
      <!--  帮助   -->
      <navigator class="right_phone" url="./Email">
        <view class="avatar flex-r">
          <view class="left_text">帮助</view>
          <view class="right_icon">
            <img src="/static/icon/right_x.png" alt="">
          </view>
        </view>
      </navigator>

      <button class="LogOut">退出当前账号</button>
    </view>
	</view>

</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'

	import BackNav from '@/components/BackNav/backnav';
	import {
		email
	} from '../userModel'
	import {
		ref,
		defineProps,
		Ref
	} from 'vue';
	import UniPopup from "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.vue";

	let items = ref([{
			text: "江西省",
			value: "1-0",
			children: [{
					text: "赣州市",
					value: "1-1",
					children: [{
						text: '章贡区',
						value: '1-1-1'
					}]
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
			children: [{
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
		}
	])
	const props = defineProps({
		title: {
			type: String
		}
	})

	const onchange = (e) => {

	}
	// const email:Ref<null> = ref(null)
	// const Email = (e)=>{
	//   email.value.open()
	// }
	let index = ref(0);
	let sex = ref(['请选择性别', '男', '女', '畜生'])

	const bindPickerChange = (e) => {
		console.log(e)
		index.value = e.detail.value
	}
	const mailbox = (e) => {
		console.log(e)
	}

	// @ts-ignore
	uni.setNavigationBarTitle({
		title: props.title
	})


	const access = () => {
		console.log(111)
	}
</script>

<style scoped lang="scss">
	.avatar {
		// width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #b8b8b825;
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

	input {
		width: 7rem;
	}
	.EmailPanel {
		width: 100%;
		//padding: 1rem 10rem;
		height: 3rem;
		background: #fff;
		//margin: 0 auto;
		input {
			width: 100%;
		}
	}
  .setup{
    margin-top: 1.5rem;
  }
  .LogOut{
    margin-top: 2rem;
    background: #fff;
    color: #ff6700;
  }
</style>
