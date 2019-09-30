import _base from './_base.less'
import normal from './normal.less'
import danger from './danger.less'
import warning from './warning.less'
import success from './success.less'
import primary from './primary.less'
import disabled from './disabled.less'
import small from './small.less'
import {L, P} from '$u/layout/Button'
import React from "react";
import {combineAppearances} from "$u/h";

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
    appearance?: any;
    size?: 1 | 2 = 2;
}

C  = (props) => {
    // style 的展示逻辑
    let a = [_base];
    if(props.ifDisabled){
        a.push(disabled);
    }else{
        if(!props.appearance){
            a.push(normal)
        }else{
            a.push(props.appearance)
        }
    }
    if(props.size === 1){
        a.push(small)
    }
    // 把 appearance 传给 layout
    return L(combineAppearances(a))(props)
};

export default {A, P, C}