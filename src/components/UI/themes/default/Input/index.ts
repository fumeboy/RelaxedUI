import normal from './normal.less'
import danger from './danger.less'
import warning from './warning.less'
import success from './success.less'
import disabled from './disabled.less'
import {L, P} from '$u/layout/Input'
import React from "react";

let A = {
    normal,
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a;
    if (props.ifDisabled) {
        a = disabled;
    } else {
        switch (props.status) {
            case 0:
                a = normal;
                break;
            case 1:
                a = success;
                break;
            case 2:
                a = warning;
                break;
            case 3:
                a = danger;
                break;
            default:
                a = normal;
                break
        }
    }
    return L(a)(props)
};

export default {A, P, C}