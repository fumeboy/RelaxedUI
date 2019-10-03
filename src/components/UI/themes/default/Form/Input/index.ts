import _base from './_base.less'
import normal from './normal.less'
import danger from './danger.less'
import warning from './warning.less'
import success from './success.less'
import disabled from './disabled.less'
import {L, P} from '$u/layout/Form/Input'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a = [_base];
    if (props.ifDisabled) {
        a.push(disabled);
    } else {
        switch (props.status) {
            case 0:
                a.push(normal);
                break;
            case 1:
                a.push(success);
                break;
            case 2:
                a.push(warning);
                break;
            case 3:
                a.push(danger);
                break;
            default:
                a.push(normal);
                break
        }
    }
    return L(combineAppearances(a))(props)
};

export default {A, P, C}