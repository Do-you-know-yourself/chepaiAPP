<template>
  <view>
    <swiper :autoplay="true"
            :duration="1000"
            circular="true"
            :indicator-dots="true"
            :interval="3000"
            indicator-color="#4e4e4e39"
            indicator-active-color="#fff">
      <swiper-item v-for="i in 10"

                   >
        <img src="/static/img/bg1.webp" alt="">
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: "swiper"
}
</script>

<style scoped>

</style>