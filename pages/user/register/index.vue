<template>
	<view class="reg_container">
		<!-- #ifndef H5  -->
		<BackNav :title="props.title"></BackNav>
		<!-- #endif    -->
		<view class="login_container">
			<view class="container">
				<view class="header">
					<text>车拍网欢迎你</text>
				</view>
				<view class="phone_login">
					<!--   手机号         -->
					<view class="phone">
						<view class="phone_icon">
							<img src="/static/icon/search.png" alt="">
						</view>
						<input type="text" value="" placeholder="请输入手机号码">
					</view>
					<!--   验证码         -->
					<view class="pwd">
						<view class="pwd_code">
							<view class="pwd_icon">
								<img src="/static/icon/search.png" alt="">
							</view>
							<input class="obtain_code" type="text" value="" placeholder="请输入验证码">
						</view>

						<button class="code" @click="BtnCode" :disabled="Disable">
							{{Disable?`${TimeNum}秒后可重新获取`:TimeNum}}
						</button>
					</view>
					<!--   密码         -->
					<view class="phone">
						<view class="phone_icon">
							<img src="/static/icon/search.png" alt="">
						</view>
						<input type="text" value="" placeholder="请输入密码">
					</view>

					<!--   城市         -->
					<view class="phone">
						<view class="phone_icon">
							<img src="/static/icon/search.png" alt="">
						</view>
						<input type="text" value="" placeholder="请输入常驻城市">
					</view>



				</view>

				<view class="btn_tis">
					<view class="login_btn" @click="reg">
						注册
					</view>
					<view class="agreement">
						<radio-group style="display: inline" @click="isRadioFn">
							<radio :checked="isRadio"></radio>
						</radio-group>
						<text>
							注册即代表同意《<text class="txt" @click="to({title:'平台规则'})">用户协议</text>》&《<text
								@click="to({title:'平台规则'})" class="txt">隐私权系数</text>》</text>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		BtnCode,
		TimeNum,
		Disable,
		to
	} from '../userModel'
	import BackNav from '@/components/BackNav/backnav'
	import {
		defineProps,
		ref
	} from "vue"
	const props = defineProps({
		title: {
			type: String,
			default: ''
		}
	})
	let isRadio = ref(false)
	const isRadioFn = () => {
		isRadio.value = !isRadio.value
	}


	// @ts-ignore
	uni.setNavigationBarTitle({
		title: props.title
	})

	const reg = () => {
		if (isRadio.value == false) {
			uni.showToast({
				title: '请先同意用户协议和隐私权系数',
				icon: 'error'
			})
		} else {
			console.log('注册成功')
		}
	}
</script>

<style scoped lang="scss">
	.login_container {
		padding: .5rem 0rem;
		.container {
			padding: 1rem .5rem;
			.header {
				width: 100%;
				margin-top: 3rem;
				height: 3rem;
				//background: #ff6700;
			}
			.login {
				display: flex;
				justify-content: space-between;
				.passwordLogin {
					padding: .5rem 1rem;
				}
				.QuickLogon {
					padding: .5rem 1rem;
				}
			}
			// 密码登录
			.password {
				display: flex;
				flex-direction: column;
				.phone_icon,
				.pwd_icon {
					width: 2.5rem;
					height: 2rem;
					margin: 0 .5rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.phone,
				.pwd {
					display: flex;
					margin: .5rem 0;
					//border: 1px solid #8c8c8c;
					border-radius: 5rem;
					border: 1px solid #6a6a6a;
					align-items: center;
					//border-top: 1px solid #6a6a6a;
					border: 1px solid #FBA63B;
					box-shadow: .0rem .5rem 2rem -1rem #ffaf04;
					input {
						width: 100%;
						padding: .5rem .5rem;
						//border-left: 1px solid #6a6a6a;
						border-left: 1px solid #ffaf04;
					}
				}
				.Forget {
					width: 100%;
					text {
						float: right;
					}
				}
			}

			// 验证码登录
			.phone_login {
				display: flex;
				flex-direction: column;
				.pwd_icon,
				.phone_icon,
					{
					width: 2.5rem;
					height: 2rem;
					margin: 0 .5rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.pwd_code {
					display: flex;
					align-items: center;
				}
				.phone,
				.pwd {
					display: flex;
					margin: .5rem 0;
					border-radius: 5rem;
					//border: 1px solid #6a6a6a;
					align-items: center;
					border: 1px solid #FBA63B;
					box-shadow: .0rem .5rem 2rem -1rem #ffaf04;
					//background-image: linear-gradient(#FBA53C,#FBA63B);
					//border-top: 1px solid #6a6a6a;
					.code {
						padding: 0 1rem;
						width: 10rem;
						//width: 10rem;
						font-size: .8rem;
						//width: 100%;
						height: 2rem;
						background: #FFFFFF05;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #ff6700;
						border: none;
					}
					.code:after {
						border: 0;
					}
					input {
						width: 100%;
						padding: .5rem .5rem;
						border-left: 1px solid #ffaf04;
					}
				}
			}
		}
	}

	.isActive {
		color: #ff6700;
	}
	.btn_tis {
		position: relative;
	}
	.login_btn {
		width: 80%;
		height: 3rem;
		background-image: linear-gradient(#FBA53C, #FBA63B);
		box-shadow: #F9A73B;
		border-radius: 1.5rem;
		box-shadow: .0rem .5rem 2rem -1rem #ffaf04;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem auto;
		border-radius: 5rem;
	}
	.agreement {
		width: 90%;
		font-size: .8rem;
		margin: 0 auto;
	}
	.txt {
		color: #089AFF;
	}
</style>
