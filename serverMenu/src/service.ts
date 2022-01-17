import { request } from "umi"

export const getMenus = (options={})=>{
    return request('/api/menus',{...options});
}