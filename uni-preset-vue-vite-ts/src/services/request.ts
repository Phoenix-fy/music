
interface Params {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  header?: any;
}

type Response<T = AnyObject> = Omit<UniApp.RequestSuccessCallbackResult, 'data'> & { data: T}

const request = <T>({
  url,
  method = "GET",
  data = {},
  header = {}
}: Params) => {
  return new Promise<Response<T>>((resolve, reject) => {
    uni.request({
      url,
      method,
      data,
      header,
      success: (res: Response<T>) => {
        resolve(res)
      },
      fail: reject
    })
  })
}
export default request