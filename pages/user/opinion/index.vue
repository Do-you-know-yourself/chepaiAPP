<template>
  <view class="opinion">
    <view class="textarea">
      <textarea maxlength="500" style="height: 10rem;"
                v-model="TextNum"
      placeholder="请详细描述您的意见和建议，如果能配上相应的截图，将有诸如我们找解决方案"
      ></textarea>

    </view>
    <view class="text">
      <text >{{TextNum.length?`还能输入${TextNUM}个字`:'文字不超过500字'}}</text>
    </view>
    <view class="upload-img">
      <view class="title">图片(可选)<text decode="decode" class="text_1">{{image.length}}/9</text></view>
      <view class="flex-col" style="margin: 6px;">
        <uni-file-picker v-model="imageValue" :image-styles="styleImg" :limit="11" file-extname="png,jpg,jpeg"
                         file-mediatype="image" mode="grid" style="" @fail="fail" @progress="progress" @select="select"
                         @success="success" />
      </view>
    </view>
    <button style="margin: 3rem 0">提交</button>
  </view>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
import {upImg} from "../../../utils/PublicMethod";

let TextNum = ref('')

const TextNUM = computed(()=>{
  return 500-TextNum.value.length
})
// 上传图片
const styleImg = {
  width: 74,
  height: 74,
  color: "#ff5a5f",
  border: {
    width: 2,
    style: 'dashed',
    // style: 'none',
    radius: '2px',
    // border: 'none',
    backgroundColor:'#ff6700'
  }
}

const imageValue = ref([]) // 图片数组
const image = ref([])
const progress = () => {
  console.log('progress');
}
const success = (res) => {
  console.log(res)
  console.log('success');
}
const fail = () => {
  console.log('fail');
}
const select = async (res) => {
  for await (let item of res.tempFiles) {
    try{
      await upImg(item, (data) => {
        // if (data.status !== 200) return
        image.value.push(data.data.url)
        console.log(image.value.length)

      })
    }catch (err){
      console.log(err)
    }

  }
  console.log('select');
}
</script>

<style scoped lang="scss">
.opinion{
  padding: 0.5rem;
  background: #FAFAFA;
  height: 100vh;
  .textarea{
    padding: 0.5rem .3rem;
    border: 1px solid #b8b8b855;
  }
  textarea{
    width: 100%;
    height: 5rem;
    //height: 10rem;
    //color: #b8b8b805;
  }
  textarea::placeholder{
    color: #b8b8b805;
  }
}
.text{
  padding: .5rem 0;
  text{
    float: right;
  }
}
</style> 