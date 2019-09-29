import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {
    links: React.ReactNode[] = []
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    let link_head = E().P({className: C(appearance.link_head)}).done();
    return main.pack(
        link_head,
        ...props.links
    )
};
export {L, P}