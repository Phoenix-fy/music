import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// 音频，歌单详情
import { vedioApi, rankSongApi } from '../services/index'
// 参数
export const useVideoStore = defineStore('audio',() => {
    // 音频对象
    const audio = uni.createInnerAudioContext()
    // 当前播放歌曲下标
    const currentIndex = ref(0)
    // 当前播放位置
    const currentTime = ref(0)
    // 总时长
    const duration = ref(0)
    // 是否正在播放
    const isPlay = ref(false)
    // 进度条值
    const progress = ref(0)
    // 歌曲列表
    // const playlist = ref([])
    // const curList = ref([])
    // const curSong = async(id:number) => {
    //     try{
    //         const res = await rankSongApi(id)
    //         // playlist.value = 
    //         curList.value = res.data.playlist.tracks.find(v => v.id === id)
    //         console.log(res.data.playlist.tracks)
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
    // 当前播放歌曲
    // const curSong = (id:number) => {
    //     return playlist.tracks.find(v => v.id === id)
    // }

    // 播放
    
    const getAudioUrl = async (id) => {
        try {
            const res = await vedioApi(id)
            return res.data.data[0].url
        } catch (e) {
            console.error(e)
        }
    }
    
    const playSong = async (id) => {
        const url = await getAudioUrl(id)
        if (url) {
            audio.src = url
            if(!isPlay.value) {
                audio.play()
                isPlay.value = true
            }else{
                audio.pause()
                isPlay.value = false
            }
        }
    }

   

    // 修改播放位置
    const changeCurrent = value => {
    audio.seek(duration.value * (value / 100))
    progress.value = value
    }

    // const playAllSongs = async (ids) => {
    //     ids = Array.isArray(ids) ? ids.join() : ids
    //     // 获取所有歌曲的详情
    //     const res = await rankSongApi(ids)
    //     // 获取所有歌曲的url
    //     const musicRes = await vedioApi(ids)
    //     // playlist.value = res.songs.map(item => {
    //     //   return {
    //     //     ...item,
    //     //     url: musicRes.data.find(v => v.id === item.id).url
    //     //   }
    //     // })
    //     currentIndex.value = 0
    //   }

    // 监听播放进度更新
    audio.onTimeUpdate(()=>{
        currentTime.value =  audio.currentTime
        if(currentTime.value === audio.duration) {
            isPlay.value = false
        }
    })
    
    // 监听可以开始播放
    audio.onCanplay(() => {
        // 总时长
        duration.value =  audio.duration
        console.log('可以开始播放了')
        // play()
      })

    return {
        audio,
        currentIndex,
        currentTime,
        duration,
        isPlay,
        // play,
        playSong,
        // curSong
        changeCurrent,
        progress
    }
})
