import _base from './_base.less'
import normal from './normal.less'
import {L, P} from '$u/layout/Button/Group'
import React from "react";
import {combineAppearances} from "$u/h";

let A = {

};

let C: React.FC<PP>;

class PP extends P{
}

C  = (props) => {
    let a = [_base, normal];
    return L(combineAppearances(a))(props)
};

export default {A, P, C}