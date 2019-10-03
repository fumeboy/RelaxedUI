import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });

    return main.pack([])
};
export {L, P}