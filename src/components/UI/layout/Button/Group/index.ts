import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;
class P {
    Items: React.ReactNode[] = []
}

L  = (appearance) => (props) => {

    let main = E().P({
        className: C(
            appearance.main,
        ),
    });

    return (
        main.pack(props.Items)
    )
};
export {L, P}