/* 创建'外壳'组件APP */
// 引入react
import React from 'react'
// 引入Hello组件
import Hello from './components/Hello'
import Wellcom from './components/Wellcom/Wellcom.jsx'
// 创建组件并暴露App组件
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Wellcom />
            </div>
        )
    }
}

