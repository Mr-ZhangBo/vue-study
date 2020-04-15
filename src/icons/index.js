import Vue from 'vue'
// import SvgIcon from '@/SvgIcon'
import SvgIcon from 'comps/SvgIcon'

// 指定一个上下文
const req = require.context('./svg', false, /\.svg$/)
// 循环svg目录下所有文件名，并加载他们
req.keys().map(req);

Vue.component('svg-icon', SvgIcon)