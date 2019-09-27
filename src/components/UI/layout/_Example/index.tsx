import React from 'react'
import {styleType, E, C} from '$u/h'

let L: (style: styleType) => React.FC<P>;

class P {}

L = (style) => (props) => {
    let e1 = E().P({
        className: C()
    });

    return e1.pack()
};

export default {L, P}