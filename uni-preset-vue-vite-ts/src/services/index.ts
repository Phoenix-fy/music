import request from "./request"

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}

interface BannerRes {
  banners: BannerItem[];
  code: number;
}
export const getBannerApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/banner'})
}