import normal from './normal/style.less'
import {L, P} from '$u/layout/FileInput'
import React from "react";

let A = {
    normal
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a = normal;
    // if (props.ifDisabled) {
    //     if (props.ifChecked) {
    //         a = checked_and_disabled
    //     } else {
    //         a = disabled;
    //     }
    // } else if (props.ifChecked) {
    //     a = checked
    // } else {
    //     a = normal
    // }
    return L(a)(props)
};

export default {A, P, C}