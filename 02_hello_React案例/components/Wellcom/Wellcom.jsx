// 引入React
import React, { Component } from "react";
// 引入样式
import wellcom from './Wellcom.module.css'
// 创建并暴露Wellcom组件
export default class Wellcom extends Component { 
    render() { 
        return <h2 className={ wellcom.Demo}>Wellcom-React</h2>
    }
}