import React from 'react'
import {E, C, ifShow} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {
    text?: string
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    let text = ifShow(Boolean(props.text), E().P({className: C(appearance.text)}).pack([props.text]));
    return main.pack([
        text
    ])
};
export {L, P}