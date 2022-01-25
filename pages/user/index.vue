<template>
	<view class="scroll_my">
    <!--  状态栏   -->
    <StatusBar/>
		<!-- 用户信息      -->
		<view class="info_container">
			<view class="userInfo">
				<view class="info">
					<view class="avatar" @click="info({title:'用户信息编辑'})">
						<img src="" alt="">
					</view>
					<view class="NickName_member">
						<view class="NickName">1555555555555</view>
            <navigator url="./agreement/index?id=1">
						  <view class="member">高级会员</view>
            </navigator>
            <view class="reputation">
              <text>我的信誉值：</text>
              <uni-rate :touchable="false" color="#bbb" active-color="red"  :readonly="true" :value="5" :is-fill="false"  />
            </view>
					</view>

				</view>
        <navigator url="./News/index">
				<view class="news" >消息</view>
        </navigator>
			</view>
      <!-- 优惠卡卷      -->

      <view class="authentication">
        <view class="bond_card">
          <view class="bond mgt">
            <view class="bond_Num">1.00</view>
            <view class="card_text">保障金</view>
          </view>
          <view class="bond mgt">
              <view class="line"></view>
          </view>
          <view class="card mgt">
            <view class="card_Num">1</view>
            <view class="card_text">卡卷</view>
          </view>
        </view>
        <view class="authentication_container" v-if="id===0">
          <view class="left_text">完成认证参与竞拍</view>
          <view class="right_btn">完成认证</view>
        </view>
        <view class="line_container" v-else>

        </view>
      </view>
		</view>

		<!--  我的竞拍     -->
		<view class="my_Auction_container">
			<view class="my_Auction ">
				<view class="title">
          <view class="line"></view>
          <text>我的竞拍</text>
        </view>
				<view class="list_container">
					<view class="list" @click="RouToPush(item)" v-for="item in list" :key="item.id">
						<view class="img_icon">
							<image class="X_icon" :src="item.icon" alt=""/>
						</view>
						<text class="txt">{{item.title}}</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 我的订单 -->
		<view class="my_Auction_container order">
			<view class="my_Auction ">
				<view class="title">
          <view class="line"></view>
          <text>我的订单</text>
        </view>
				<view class="list_container">
					<view class="list" v-for="item in order" @click="OrderFn(item)">
						<view class="img_icon">
							<image class="X_icon" :src="item.icon" alt=""/>
						</view>
						<text class="txt">{{item.title}}</text>
					</view>
				</view>

			</view>
		</view>
		<view class="my_Auction_container order">
			<view class="my_Auction ">
        <view class="title">
          <view class="line"></view>
          <text>我的设置</text>
        </view>
				<view class="list_container ">
					<view class="list" v-for="item in setupList" :key="item.id" @click="goTo(item)">
						<view class="img_icon">
							<image class="X_icon" :src="item.icon" alt=""/>
						</view>
						<text class="txt">{{item.title}}</text>
					</view>
				</view>

			</view>

		</view>

		<!-- 技术支持   -->
		<view class="botoom">
			<text>提供技术支持 √</text>
			<text>江西开创数码科技有限公司</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import StatusBar from '@/components/StatusBar'
	import {
		ref,
		onMouted
	} from 'vue'
	import {
		list,
		order,
		setupList,
		RouToPush,
		info,
    goTo,
    OrderFn
	} from './userModel'
  let id = ref(0)
	const scrollTop = () => {
		console.log(111)
	}
</script>
<script lang="ts">
	export default {
		onPullDownRefresh() {
			console.log('调用了');
			setTimeout(function() {
				// @ts-ignore
				uni.stopPullDownRefresh();
			}, 1000);
		},
    created(){
      console.log('v2初始化')
    }
	}
</script>

<style scoped lang="scss">
  .container{
    background: #F5F5F5;
  }
	.scroll_my {
		//height: 100vh;
		overflow-y: auto;
		//background: rgba(234, 233, 233, 0.51);
		background-image: linear-gradient(#EBDAD155, #E2E3E5, #F4F5F7);

	}

	.info_container {
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    background-color: #e493d0;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;

    background-image:
        radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
        radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
        radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
        radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
        radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
    background-size:
        130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        110vmax 110vmax,
        90vmax 90vmax;
    background-position:
        -80vmax -80vmax,
        60vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
      background-repeat: no-repeat;
      animation: 10s movement linear infinite;
      padding: .3rem .5rem 0rem .5rem;

		.userInfo {
			padding: .5rem;
			//width: 100%;

			//height: 3rem;
			border-radius: .5rem;
			display: flex;

			.info {
				display: flex;
				flex: 1;
        .reputation{
          font-size: $uni-font-size-sm;

          display: flex;
          justify-content: center;
          align-items: center;
          margin: .5rem 0;
        }
				.avatar {
					width: 3.5rem;
					height: 3.5rem;
					border-radius: 5rem;
					border: 1px solid #2e2e2e;
          overflow: hidden;
				}

				.NickName_member {
					margin: 0 .5rem;

					.member {
						margin-top: .8rem;
						width: 5rem;
						padding: .1rem .1rem;
						font-size: .6rem;
						border-radius: 3rem;
						text-align: center;
						background: #d5b7a5;
					}
				}

			}

			.news {}

		}
	}
  @keyframes movement {
    0%, 100% {
      background-size:
          130vmax 130vmax,
          80vmax 80vmax,
          90vmax 90vmax,
          110vmax 110vmax,
          90vmax 90vmax;
      background-position:
          -80vmax -80vmax,
          60vmax -30vmax,
          10vmax 10vmax,
          -30vmax -10vmax,
          50vmax 50vmax;
    }
    25% {
      background-size:
          100vmax 100vmax,
          90vmax 90vmax,
          100vmax 100vmax,
          90vmax 90vmax,
          60vmax 60vmax;
      background-position:
          -60vmax -90vmax,
          50vmax -40vmax,
          0vmax -20vmax,
          -40vmax -20vmax,
          40vmax 60vmax;
    }
    50% {
      background-size:
          80vmax 80vmax,
          110vmax 110vmax,
          80vmax 80vmax,
          60vmax 60vmax,
          80vmax 80vmax;
      background-position:
          -50vmax -70vmax,
          40vmax -30vmax,
          10vmax 0vmax,
          20vmax 10vmax,
          30vmax 70vmax;
    }
    75% {
      background-size:
          90vmax 90vmax,
          90vmax 90vmax,
          100vmax 100vmax,
          90vmax 90vmax,
          70vmax 70vmax;
      background-position:
          -50vmax -40vmax,
          50vmax -30vmax,
          20vmax 0vmax,
          -10vmax 10vmax,
          40vmax 60vmax;
    }
  }

	/* 卡卷 保障金*/


	.authentication {
		padding: .5rem 1rem 0rem 1rem;
    background: #FFFFFF;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;

    .bond_card {
      padding: 0 4.5rem;
      display: flex;
      justify-content: space-between;

      .mgt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
          .line{
            //width: 0px;
            border: 1px solid #b8b8b8;
            //height: 100%;
            height: 2rem;
        }

      }

      .bond_Num {
        margin: .3rem 0;
      }

      .card_Num {
        margin: .3rem 0;
      }

    }
    .line_container{
      border-top: .5rem;
      padding: .5rem 1rem .5rem .5rem;

    }
		//height: 5rem;
		.authentication_container {
      margin-top: .5rem;
			padding: .5rem 1rem .5rem .5rem;
			height: 3rem;
			//background-image:linear-gradient(to right,#eac8b0,#ff670055);
			//background-color: #fff;
      border-top: 1px solid #b8b8b855;
			display: flex;
			justify-content: space-between;
			font-size: .6rem;
			align-items: center;
		}
	}

	/* 我的竞拍 */
	.my_Auction_container {
		padding: .2rem .5rem;
    background: #fff;
		box-shadow: 0px 3px 25px 1px rgb(215 215 215 / 89%);
	}

	.my_Auction {
		padding: .6rem .5rem;
		background: #fff;
		//height: 3rem;
		border-radius: .5rem;

		.title {
			margin-left: .5rem;
			font-size: 1rem;
			color: #3f3838;
      display: flex;
      align-items: center;
      .line{
        width: 1px;
        padding: .1rem;
        height: 1rem;
        margin-right: .5rem;
        border-radius: 5rem;
        //background: #ff6700;
        background-color: #e493d0;
        background-image:
            radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
            radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
            radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
            radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
            radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
        background-size:
            130vmax 130vmax,
            80vmax 80vmax,
            90vmax 90vmax,
            110vmax 110vmax,
            90vmax 90vmax;
        background-position:
            -80vmax -80vmax,
            60vmax -30vmax,
            10vmax 10vmax,
            -30vmax -10vmax,
            50vmax 50vmax;
        background-repeat: no-repeat;
        animation: 10s movement linear infinite;
      }
      text{
        font-size: $uni-font-size-lg;
        //font-weight: bolder;
      }
		}

		.list_container {
			display: flex;
			justify-content: space-around;
      color: #707070;

			.list {
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				margin: .5rem auto;
				align-items: center;

				.img_icon {
					width: 2rem;
          height: 2rem;
          margin: .2rem 0;

				}
			}
		}
	}

	.order {
		margin: .5rem 0;
	}

	.br {
		display: flex;
		flex-wrap: wrap;
		//padding: 0 2rem;
		align-items: center;

		.list {
			flex: 0 0 17%;
			//text-align: center;
			margin: 0 auto;
			//display: flex;
			//justify-content: space-around;

			//justify-content: center;

		}
	}

	.botoom {
		display: flex;
		flex-direction: column;
		align-items: center;
		//justify-content: center;
		margin: 3rem 0;
		color: #6a6a6a35;

		text {
			font-weight: 600;
			font-size: 14px;
			margin-bottom: 0px;
			cursor: pointer;
			background-image: -webkit-linear-gradient(right, red, #ff5f6085, #f0c41b45);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-style: oblique;
		}
	}
</style>
