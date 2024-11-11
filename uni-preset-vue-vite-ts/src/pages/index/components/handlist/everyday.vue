<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { everydayApi} from '@/services/index'
const Every = ref([])

const Everyday = async () => {
    try{
        const res = await everydayApi()
        console.log(res.data.data!.dailySongs)


    }catch(e){
        console.log(e)
    }
}
Everyday()
const now = Date.now()


const back = () => {
    uni.navigateBack()
}


</script>

<template>
    <view>
        <uni-icons type="left" size="30" @click = "back"></uni-icons>
        <view>
            <img src="" alt="">
            <view>
                <view class="">
                    <uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
                </view>
				<view>
                    <uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
                </view>
                <view>查看今日今日运势<uni-icons type="right" size="30"></uni-icons></view>
            </view>
        </view>
        <view>
           <view><text>播放全部</text><text>VIP歌曲免费畅听</text></view>
           <view><uni-icons type="refresh" size="30"></uni-icons><uni-icons type="bars" size="30"></uni-icons></view>
        </view>
    </view>

</template>

<style lang="scss" scoped>

</style>