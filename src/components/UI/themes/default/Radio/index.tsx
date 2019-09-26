import React from 'react'
import style from './style.less'
import layoutC from '$u/layout/Radio'
let C: React.FC<P>;

let S:layoutC.S = {
    minus: style.minus, check: style.check, checked: style.checked,
    disabled: style.disabled, input: style.input, ins:style.ins, label: style.label, svgBox: style.svgBox
};

class P extends layoutC.P {
}

C = layoutC.L(S);

export default {C, P}