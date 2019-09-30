import _base from './_base.less'
import normal from './normal.less'
import left from './left.less'
import right from './right.less'
import {L, P} from '$u/layout/Divider'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {
};

let C: React.FC<PP>;

class PP extends P{
    position?: 1 | 2
}

C  = (props) => {
    let a = [_base];
    if(props.position){
        if(props.position == 1){
            a.push(left)
        }else if(props.position == 2){
            a.push(right)
        }
    }else{
        a.push(normal)
    }
    return L(combineAppearances(a))(props)
};

export default {A, P, C}