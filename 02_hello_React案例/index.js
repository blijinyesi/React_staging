/* 入口文件 */

// 引入react核心库
import React from 'react'
// 引入ReactDOM
import { createRoot } from 'react-dom/client'
// 引入App组件
import App from './App.js'





// 渲染APP到页面
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)