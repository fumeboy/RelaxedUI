import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {
    text!: string;
    target?: string;
}

L  = (appearance) => (props) => {
    // elem
    let main = E('a').P({
        className: C(
            appearance.main,
        ),
        href: props.target
    }).pack(props.text);

    return main
};
export {L, P}