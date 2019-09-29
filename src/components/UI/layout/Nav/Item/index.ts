import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;

class P {
    text!: string;
    event?: ()=>{};
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
        onClick: ()=>props.event?props.event():null
    }).pack([props.text]);

    return main
};
export {L, P}