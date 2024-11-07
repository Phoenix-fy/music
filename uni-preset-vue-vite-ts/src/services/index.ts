import request from "./request"

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}

interface BannerRes {
  banners: BannerItem[];
  code: number;
}
export interface playItem {
  coverImgUrl: string;
  name: string;
  id:number
}

interface playRes{
  playlists:playItem[],
  code:number
}
export const getBannerApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/banner'})
}

export const topPlaylistApi = () => {
  return request<playRes>({ url: 'https://zyxcl.xyz/music/api/top/playlist',
    data:{
      limit:10
      // order:new
}})
}
