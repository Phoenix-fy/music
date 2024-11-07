import request from "./request"

// export interface SearchItem {
    
// }

// interface SearchRes {
//   searchres: any[];
//   code: number;
// }
export const getSearchApi = () => {
  return request<any>({url:'https://zyxcl.xyz/music/api/search?keywords=海阔天空'})
}