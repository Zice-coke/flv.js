import axios from 'axios'


export const TIME_OUT = 1000;
export const ERR_OK = true;
export const baseURL = process.env.API_BASEURL;

// 请求超时时间
axios.defaults.timeout = TIME_OUT 

// 拦截请求
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['Authorization'] = ''
    if (token != null){
        config.headers['Authorization'] = token
    }
    return config;
    },error => {
    return Promise.reject(error);
});

// 拦截响应
axios.interceptors.response.use(response => {
    let {data} = response
    if (data.message === 'token failure'){
        localStorage.removeItem('token')
    } else {
        return Promise.resolve(response)
    }
    // Do something before response is sent
    // return response;
    },error => {
    // Do something with response error
    return Promise.reject(error);
});

// post 请求
export function fetchpost(requesUrl, params = ''){
    return axios({
        url: requesUrl,
        method: 'post',
        data: {
            'body': params
        }
    })
}
export function fetchget(requesUrl){
    return axios({
        url: requesUrl,
        method:'get',
    })
}