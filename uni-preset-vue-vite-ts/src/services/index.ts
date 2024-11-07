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
export const getBannerApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/banner'})
}
export const getpersonalizedApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/personalized'})
}