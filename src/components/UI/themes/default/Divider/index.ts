import normal from './normal.less'
import left from './left.less'
import right from './right.less'
import {L, P} from '$u/layout/Divider'
import React from "react";

let A = {
};

let C: React.FC<PP>;

class PP extends P{
    position?: 1 | 2
}

C  = (props) => {
    let a;
    if(props.position){
        if(props.position == 1){
            a = left
        }else if(props.position == 2){
            a = right
        }
    }else{
        a  = normal
    }
    return L(a)(props)
};

export default {A, P, C}