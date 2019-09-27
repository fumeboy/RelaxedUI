import React from 'react'
import {E, C} from '$u/h'

namespace N {
    export let L: (appearance: any) => React.FC<P>;
    export class S{
        ins: string="";
        text_2: string="";
        text_1: string = "";
    }
    export class P {
        text_1?: string;
        text_2?: string;
        ifDisabled?: boolean = false;
    }
}

N.L  = (appearance) => (props) => {
    let main = E().P({
        className: C(
            appearance.ins
        ),
        disabled: props.ifDisabled,
    });
    let text_1 = E().P({className: appearance.text_1}).pack(props.text_1);
    let text_2 = E().P({className: appearance.text_2}).pack(props.text_2);

    return (
        main.pack(
            text_1,
            text_2
        )
    )
};
export default N