import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;
// TODO
class P {
    items: React.ReactNode[] = []
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    return main.pack(props.items)
};
export {L, P}