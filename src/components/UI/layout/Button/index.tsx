import React from 'react'
import layout from './layout.less'
import {styleType, E, C} from '@/components/UI/h'

let L: (style: styleType) => React.FC<P>;

class P {
    public text_1?: string;
    public text_2?: string;
    public ifLock?: boolean = false;
    public ifWithBorder?: boolean = false;
    public ifWithBorderRadius?: boolean = false;
}

L = (style) => (props) => {
    return E(
        {
            className: C(
                layout.ins,
                style.ins,
                props.ifLock ? style.lock : "",
                props.ifWithBorder ? style.WithBorder : "",
                props.ifWithBorderRadius ? style.WithBorderRadius : "",
            )
        },
        [
            E({className: layout.text_1}, [props.text_1]),
            E({className: layout.text_2}, [props.text_2])
        ]
    )
};

export default {L, P}