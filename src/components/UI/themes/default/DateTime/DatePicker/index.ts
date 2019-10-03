import _base from './_base.less'
import normal from './normal.less'
import {L, P} from '$u/layout/DateTime/DatePicker'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {
    normal
};

let C: React.FC<PP>;

class PP extends P {
}

C = (props) => {
    let a = [_base, normal];
    return L(combineAppearances(a))(props)
};

export default {A, P, C}