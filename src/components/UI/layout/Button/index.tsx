import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {
    text_1?: string;
    text_2?: string;
    ifDisabled?: boolean = false;
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
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
export {L, P}