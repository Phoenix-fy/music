import request from "./request"

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}
export interface personalizedItem {
  id: number;
  name: string;
  picUrl: string;
}

interface BannerRes {
  banners: BannerItem[];
  code: number;
  result:personalizedItem[];
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

interface GetQrKeyApiItem {
  unikey: string;
  code: number;
}
interface GetQrKeyApiRes {
  data: GetQrKeyApiItem[];
  code: number;
}

interface getQrDataItem  {
  qrimg: string;
  qrurl: string;
}
interface getQrDataApiRes {
  data: getQrDataItem[];
  code: number;
}

interface getQrStatusApiItem  {
  message: string;
  cookie: string;
  code: string;
}
interface Status {
  control: string;
  length: string;
  type: string
}
interface getQrStatusApiRes {
  data: getQrStatusApiItem[];
  code: number;
  errMsg:string;
  header:Status[]
}

interface userDetailApiItem {
  anonimousUser: boolean;
  ban: number; 
  baoyueVersion: number;
  createTime:number;
  donateVersion: number;
  id: number;
  paidFee: boolean;
  status: number;
  tokenVersion : number
  type: number
  userName: string;
  vipType: number;
  whitelistAuthority: number;
}

interface userDetailApiRes {
  data: userDetailApiItem[];
  code: number;
  profile: any;
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
export const getpersonalizedApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/personalized'})
}

// 发现云村
export const topPlaylistApi = () => {
  return request<playRes>({ url: 'https://zyxcl.xyz/music/api/top/playlist',
    data:{
      limit:10
      // order:new
}})
}

// 二维码 key 生成接口
export const getQrKeyApi = () => {
  return request<GetQrKeyApiRes>({ url: `https://zyxcl.xyz/music/api/login/qr/key?times=${Date.now()}`})
}
// 二维码生成接口
export const getQrDataApi = (key: string) => {
  return request<getQrDataApiRes>({ 
    url: `https://zyxcl.xyz/music/api/login/qr/create?times=${Date.now()}`,
    data: {
      key,
      qrimg: 'qrimg'
    }
  })
}
// 二维码检测扫码状态接口
export const getQrStatusApi = (key: string) => {
  return request<getQrStatusApiRes>({ url: `https://zyxcl.xyz/music/api/login/qr/check?times=${Date.now()}`,
    data: {
      key,
    }
  })
}
// 登录状态
export const loginStatusApi = () => {
  return request({url:'https://zyxcl.xyz/music/api/login/status'})
}
// 用户详情
export const userDetailApi = (uid: string) => {
  return request<userDetailApiRes>({
    url: 'https://zyxcl.xyz/music/api/user/detail',
    data: {
      uid
    }
  })
}
// 用户歌单
export const userPlaylistApi = (uid: string) => {
  return request({
    url: 'https://zyxcl.xyz/music/api/user/playlist',
    data: {
      uid
    }
  })
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