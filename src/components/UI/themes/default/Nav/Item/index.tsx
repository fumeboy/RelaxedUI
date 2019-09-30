import _base from './_base.less'
import normal from './normal.less'
import active from './active.less'
import {L, P} from '$u/layout/Nav/Item'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {
};

let C: React.FC<PP>;

class PP extends P{
    ifActive?:Boolean = false;
}

C  = (props) => {
    let a = [_base];
    if(props.ifActive){
        a.push(active)
    }else{
        a.push(normal)
    }
    return L(combineAppearances(a))(props)
};

export default {A, P, C}