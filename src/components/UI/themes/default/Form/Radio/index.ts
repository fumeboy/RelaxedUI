import _base from './_base.less'
import normal from './normal.less'
import disabled from './disabled.less'
import checked from './checked.less'
import checked_and_disabled from './checked_and_disabled.less'
import {L, P} from '$u/layout/Form/Radio'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {
    normal
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a = [_base];
    if (props.ifDisabled) {
        if (props.ifChecked) {
            a.push(checked_and_disabled)
        } else {
            a.push(disabled);
        }
    } else if (props.ifChecked) {
        a.push(checked)
    } else {
        a.push(normal)
    }
    return L(combineAppearances(a))(props)
};

export default {A, P, C}