
<script>
</script>
<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
  @import 'uni.scss';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
    -webkit-overflow-scrolling: touch;
    //filter: grayscale(1);
	}
  .v-enter,.v-leave-to{
    opacity: 0;

  }
  .uni-swiper-dot{
    width: 1.5rem !important;
    height: .3rem !important;
    border-radius: 5rem;
  }

  /*进入和离开的动画时间段*/
  .v-enter-active{
    transition: all 0.3S ease;
  }
  .v-leave-active{
    opacity: 0.5;
    transition: all 0.3S ease;
    /*transform: translateX(160px);*/

  }

  .right_icon{
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
  }
  .icon{
    width: .7rem;
    height: .7rem;
  }
  .icon_right{
    width: 1rem;
    height: 1rem;
  }
  page {
    margin: 0;
    font: 14
    px
/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    //font-weight: 1000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;

	}
  .X_icon{
    width: 100%;
    height: 100%;
    //margin: 0 .5rem;
  } 
  .TopCiCuLar{
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
  }
  .flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  image{
    width: 100%;
    height: 100%;
  }
  img{ 
    width: 100%;
    height: 100%;
  }
  .flex-column{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .flex-col{
    display: flex;
    flex-direction: column;
  }
  // 弹出面板
  .section {
    padding: 0.94rem 0.69rem 0.9rem 0.91rem;
    background-color: rgb(255, 255, 255);
  }
  // 弹出面板
  .flex-display{
    //width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .list{
      padding:.5rem .5rem;
      border: 1px solid #b8b8b855;
      border-radius: 5rem;
      margin: .5rem;
    }
  }

</style>
