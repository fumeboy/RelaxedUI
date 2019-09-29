import normal from './normal/style.less'
import danger from './danger.less'
import warning from './warning/style.less'
import success from './success/style.less'
import primary from './primary/style.less'
import disabled from './disabled.less'
import {L, P} from '$u/layout/Button'
import React from "react";

let A = {
    // 暴露给调用处的 appearance
    // 这样调用该组件时可以指定 appearance
    normal,
    danger,
    warning,
    success,
    primary,
};

let C: React.FC<PP>;
// C 是 component 的缩写

class PP extends P{
    // 继承了 layout 的 props 类
    // 扩展父类以配合实现 style 的展示逻辑
    appearance?: any
}

C  = (props) => {
    // style 的展示逻辑
    let a;
    if(props.ifDisabled){
        a = disabled;
    }else{
        if(!props.appearance){
            a = normal
        }else{
            a = props.appearance
        }
    }
    // 把 appearance 传给 layout
    return L(a)(props)
};

export default {A, P, C}