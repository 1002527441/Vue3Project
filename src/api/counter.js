import request from '../utils/request'


export function counterSearch(params){

    return request ({
        url:'/v1/images/search',
        method:'get',
        params: params
    })
   

}