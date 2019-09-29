import normal from './normal.less'
import disabled from './disabled.less'
import checked from './checked.less'
import checked_and_disabled from './checked_and_disabled.less'
import {L, P} from '$u/layout/CheckBox'
import React from "react";

let A = {
    normal
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a;
    if (props.ifDisabled) {
        if (props.ifChecked) {
            a = checked_and_disabled
        } else {
            a = disabled;
        }
    } else if (props.ifChecked) {
        a = checked
    } else {
        a = normal
    }
    return L(a)(props)
};

export default {A, P, C}