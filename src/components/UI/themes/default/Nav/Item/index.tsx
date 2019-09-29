import normal from './normal.less'
import active from './active.less'
import {L, P} from '$u/layout/Nav/Item'
import React from "react";

let A = {
};

let C: React.FC<PP>;

class PP extends P{
    ifActive?:Boolean = false;
}

C  = (props) => {
    let a = normal;
    if(props.ifActive){
        a = active
    }
    return L(a)(props)
};

export default {A, P, C}