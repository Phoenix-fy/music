import request from "./request"

// export interface SearchItem {
    
// }

// interface SearchRes {
//   searchres: any[];
//   code: number;
// }
export const getSearchApi = (id:any) => {
    console.log(id)
  return request<any>({url:`https://zyxcl.xyz/music/api/cloudsearch?keywords=${id}`})
}
export const getSearchDetailApi = (id:any) => {
    return request<any>({url:`https://zyxcl.xyz/music/api/search/${id}`})
}