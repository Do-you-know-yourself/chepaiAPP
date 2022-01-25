<template>
  <view class="login_container">
    <view class="container">
      <view class="header">
        <text>HI 等你很久了</text>
      </view>
      <view class="login">
        <view class="flex-center"
              :class="[item.class,{'isActive':Index==item.id}]"
              v-for="item in login"
              :key="item.id"
              @click="toggle(item)"
        >
          {{item.title}}
        </view>
      </view>
      <view class="password" v-if="Index==1">
        <view class="phone">
          <view class="phone_icon">
            <image  src="/static/icon/search.png" alt="" />
          </view>
          <input type="text" value="" placeholder="请输入手机号码">
        </view>
        <view class="pwd">
          <view class="pwd_icon">
            <img c src="/static/icon/search.png" alt="">
          </view>
          <input type="text" value="" placeholder="请输入密码">
        </view>
        <view class="Forget">
          <text>忘记密码？</text>
        </view>
      </view>
      <view class="phone_login" v-if="Index==2">
        <view class="phone">
          <view class="phone_icon">
            <img  src="/static/icon/search.png" alt="">
          </view>
          <input type="text" value="" placeholder="请输入手机号码">
        </view>
        <view class="pwd">
          <view class="pwd_code">
            <view class="pwd_icon">
              <image  src="/static/icon/search.png" alt="" />
            </view>
            <input class="obtain_code" type="text" value="" placeholder="请输入验证码">
          </view>

          <button class="code" @click="BtnCode" :disabled="Disable">
          {{Disable?`${TimeNum}秒后可重新获取`:TimeNum}}
          </button>
        </view>
      </view>

      <view class="btn_tis">
        <view class="login_btn">
          登录
        </view>
        <view class="Tis">
          <text>还没有账号？</text>

          <text style="color: #FBA63C" @click="RegPush({title:'注册'})">马上注册</text>
        </view>
      </view>

    </view>
  </view>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {login,BtnCode,TimeNum,Disable,RegPush} from '../userModel'
let Index = ref(1)
const toggle = (i)=>{
  Index.value = i.id
}
</script>

<style scoped lang="scss">
.login_container{
  padding: .5rem 0rem;
  .container{
    padding: 1rem .5rem;
    .header{
      width: 100%;
      margin-top: 3rem;
      height: 3rem;
      //background: #ff6700;
    }
    .login{
      display: flex;
      justify-content: space-between;
      .passwordLogin{
        padding: .5rem 1rem;
      }
      .QuickLogon{
        padding: .5rem 1rem;
      }
      .flex-center{
        color: #646464;
      }
      .isActive{
        color: #FAA53B;

      }
    }
    // 密码登录
    .password{
      display: flex;
      flex-direction: column;
      .phone_icon,.pwd_icon{
        width: 1.5rem;
        height: 1.5rem;
        margin:0 .5rem 0 1rem;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .phone,.pwd{
        display: flex;
        margin: .5rem 0;
        //border: 1px solid #8c8c8c;
        border-radius: 5rem;
        //border: 1px solid #6a6a6a;
        align-items: center;
        //border-top: 1px solid #6a6a6a;
        border: 1px solid #FBA63B;
        box-shadow: .0rem .5rem 1rem -1rem #ffaf04;
        input{
          width: 100%;
          padding: .5rem .5rem;
          //border-left: 1px solid #6a6a6a;
          //border-left: 1px solid #ffaf04;
        }
      }
      .Forget{
        width: 100%;
        color: #FAA53B;
        text{
          float: right;
        }
      }
    }
    // 验证码登录
    .phone_login{
      display: flex;
      flex-direction: column;
      .pwd_icon,.phone_icon,{
        width: 1.5rem;
        height: 1.5rem;
        margin:0 .5rem 0 1rem;
        image{
          width: 100%;
          height: 100%;
        }
      }
      .pwd_code{
        display: flex;
        align-items: center;
      }
      .phone,.pwd{
        display: flex;
        margin: .5rem 0;
        border-radius: 5rem;
        align-items: center;
        border: 1px solid #FBA63B;
        box-shadow: .0rem 0rem 1rem -1rem #ffaf04;

        .code{
          padding: 0 1rem;
          width: 13rem;
          font-size: .8rem;
          height: 2rem;
          background: #FFFFFF05;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FBA63C;
          border: none;
        }
        .code:after{
          border: 0;
        }
        input{
          width: 100%;
          padding: .5rem .5rem;
          //border-left: 1px solid #ffaf04;
        }
      }
    }
  }
}


.btn_tis{
  position: relative;

}
.login_btn{
  width: 80%;
  height: 3rem;
  background-image: linear-gradient(#FBA53C,#FBA63B);
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
.Tis{
  //position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  text-align: center;
  text{
    margin: 0 3rem;
  }
}
</style>