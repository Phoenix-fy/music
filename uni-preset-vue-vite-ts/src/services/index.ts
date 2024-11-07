import request from "./request"

export interface BannerItem {
  imageUrl: string;
  targetId: number;
}
interface BannerRes {
  banners: BannerItem[];
  code: number;
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


export const getBannerApi = () => {
  return request<BannerRes>({url:'https://zyxcl.xyz/music/api/banner'})
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
  return request({
    url: 'https://zyxcl.xyz/music/api/user/detail',
    data: {
      uid
    }
  })
}
