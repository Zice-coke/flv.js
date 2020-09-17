'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASEURL: '""'  , // 提交的地址 比如：http://127.0.1.1
  MOCK: false,
})
