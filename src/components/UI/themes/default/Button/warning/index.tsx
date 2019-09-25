import React from 'react'
import style from './style.less'
import layoutC from '$u/layout/Button'
let C: React.FC<P>;

let S:layoutC.S = {
    WithBorder: style.WithBorder,
    WithBorderRadius: style.WithBorderRadius,
    lock: style.lock,
    text_1: style.text_1,
    text_2: style.text_2,
    ins: style.ins
};

class P extends layoutC.P {
}

C = layoutC.L(S);

export default {C, P}