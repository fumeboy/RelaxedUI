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
    let buttonContainer = E().P({
        className: C(
            style.ins,
            props.ifLock ? style.lock : "",
            props.ifWithBorder ? style.WithBorder : "",
            props.ifWithBorderRadius ? style.WithBorderRadius : "",
        )
    });
    let buttonInnerText_1 = E().P({className: style.text_1}).Children(props.text_1);
    let buttonInnerText_2 = E().P({className: style.text_2}).Children(props.text_2);
    
    return (
        buttonContainer.Children(
            buttonInnerText_1,
            buttonInnerText_2
        )
    )
};
export default N