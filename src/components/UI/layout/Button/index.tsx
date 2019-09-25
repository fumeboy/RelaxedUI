import React from 'react'
import {E, C} from '$u/h'

namespace N {
    export let L: (style: S) => React.FC<P>;
    export class S {
        ins: string = "";
        text_1: string = "";
        text_2: string = "";
        lock: string = "";
        WithBorder: string = "";
        WithBorderRadius: string = "";
    }
    export class P {
        text_1?: string;
        text_2?: string;
        ifLock?: boolean = false;
        ifWithBorder?: boolean = false;
        ifWithBorderRadius?: boolean = false;
    }
}

N.L  = (style) => (props) => {
    let main = E().P({
        className: C(
            style.ins,
            props.ifLock ? style.lock : "",
            props.ifWithBorder ? style.WithBorder : "",
            props.ifWithBorderRadius ? style.WithBorderRadius : "",
        )
    });
    let text_1 = E().P({className: style.text_1}).Children(props.text_1);
    let text_2 = E().P({className: style.text_2}).Children(props.text_2);
    
    return (
        main.Children(
            text_1,
            text_2
        )
    )
};
export default N