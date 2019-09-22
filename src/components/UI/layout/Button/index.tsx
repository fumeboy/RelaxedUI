import React from 'react'
import layout from './layout.less'
import {styleType} from '@/components/UI/h'

let L:(style:styleType)=>React.FC<P>;

class P {
    public text_1?: string;
    public text_2?: string;
    public ifLock?: boolean=false;
    public ifWithBorder?: boolean=false;
    public ifWithBorderRadius?: boolean=false;
}

L = (style) => (props) => {
    return (
        <div
            className={[
                layout.ins,
                style.ins,
                props.ifLock ? style.lock : null,
                props.ifWithBorder ? style.WithBorder : null,
                props.ifWithBorderRadius ? style.WithBorderRadius : null,
            ].join(" ")}
        >
            <div className={layout.text_1}>{props.text_1}</div>
            <div className={layout.text_2}>{props.text_2}</div>
        </div>
    )
};

export default {L, P}