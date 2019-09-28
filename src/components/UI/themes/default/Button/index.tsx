import normal from './style.less'
import danger from './danger/style.less'
import warning from './warning/style.less'
import success from './success/style.less'
import primary from './primary/style.less'
import disabled from './disabled/style.less'
import {L, P} from '$u/layout/Button'
import React from "react";

let A = {
    normal,
    danger,
    warning,
    success,
    primary,
};

let C: React.FC<PP>;

class PP extends P{
    appearance?: any
}

C  = (props) => {
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
    return L(a)(props)
};

export default {A, P, C}