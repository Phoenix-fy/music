import request from "./request"

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}

interface BannerRes {
  banners: BannerItem[];
  code: number;
}

// 发现云村新鲜事
export interface playItem {
  coverImgUrl: string;
  name: string;
  id:number
}

interface playRes {
  playlists:playItem[],
  code:number
}

// 排行榜
interface rankRes {
  list:playItem[],
  code:number
}
// 排行榜详情歌单
export interface tracks {
  name:string;
  id:number;
  author:string;
  coverImgUrl:string;
}
interface songListRes {
  tracks:tracks[],
  code:number,
  playlist:{}
} 
export const getBannerApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/banner'})
}
// 发现云村
export const topPlaylistApi = () => {
  return request<playRes>({ url: 'https://zyxcl.xyz/music/api/top/playlist',
    data:{
      limit:10
      // order:new
}})
}
// 排行榜
export  const topListApi = () =>{
  return request<rankRes>({url:'https://zyxcl.xyz/music/api/toplist'})
}
// 排行榜歌单详情
export const rankSongApi = (id:number) => {
  return request<songListRes>({url:'https://zyxcl.xyz/music/api/playlist/detail',
    data:{
      id:id
    }
  })
}

// 音频
export const vedioApi = (id:number) => {
  return request({url:'https://zyxcl.xyz/music/api/song/url',
    data:{
      id:id
    }
  })
}

// 逐字歌词
export const lyricApi = (id:number) => {
  return request({ url:'https://zyxcl.xyz/music/api/lyric/new',
    data: {
      id:id
    }
  })
}