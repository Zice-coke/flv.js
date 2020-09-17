import { fetchpost, fetchget, baseURL} from 'config/index'
const SingUrl = 'https://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=1&offset=0&size=50'
// 登陆的接口
export function loginUserNo(params) {
    return fetchpost(`${baseURL}/root/login/checkMemberLogin`, params)
}
export function Num() {
    return fetchget(SingUrl)
}