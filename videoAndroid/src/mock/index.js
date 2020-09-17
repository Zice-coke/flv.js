import Mock from 'mockjs'
import User from './user'
Mock.mock('/root/login/checkMemberLogin', 'post', ()=>{
    return User.userInfo
})