import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;
// TODO
class P {
    ifDisabled?: boolean;
    ifFill?: boolean;
    ifHasSelection?: boolean;
    ifLarge?: boolean;
    funcUpload?: ()=>void;
    msg?: string;
    buttonText?: string;
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    let label = E('label');
    let input = E('input').P({type:"file", disabled: props.ifDisabled});
    let msg = E('span').contain([props.msg]);

    return main.pack([
        label,
        input,
        msg
    ])
};
export {L, P}