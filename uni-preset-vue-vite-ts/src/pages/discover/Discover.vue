<script lang="ts" setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import music from '../../pages/discover/music.vue'
import podcast from '../../pages/discover/podcast.vue'
import audiobook from '../../pages/discover/audiobook.vue'
import live from '../../pages/discover/live.vue'
import UserBar from '@/components/userBar/UserBar.vue'
// const router = useRouter()
const navList =ref([
    {title:'音乐',index:0},
    {title:'播客',index:1},
    {title:'听书',index:3},
    {title:'直播',index:4}
])
const curIndex = ref(0)
const showLeft = ref(false)

const goSearch = () => {
  uni.switchTab({
    url: '/pages/search/search'
  })
}
</script>

<template>
    <view class="box">
        <UserBar v-model:show="showLeft"></UserBar>
        <view class="nav">
            <uni-icons type="bars" size="30" @click="showLeft = true"></uni-icons>
         <!-- <text v-for="(item,index) in navList" class="navItem" @click="router.push(navList[index].path)">{{ item.title }}</text>  -->
            <text v-for="(item,index) in navList" 
            @click="curIndex = index" 
            :class="{ active : curIndex === index }"
            >{{ item.title }}</text>
            <uni-icons type="search" size="30" @click="goSearch"></uni-icons>
        </view>
        <view class="content">
                <music v-if="curIndex===0"/>
                <podcast v-if="curIndex===1"/>
                <audiobook v-if="curIndex===2"/>
                <live v-if="curIndex===3"/>
        </view>
    </view>
    
  

</template>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.nav{
    width: 100%;
    height:100rpx;
    line-height: 100rpx;
    display: flex;
    justify-content:space-around;
    .active{
        border-bottom:3px solid red;
    }
}
.content{
    flex:1;
    overflow: auto;
    padding:10px 15px;
    
}
</style>


