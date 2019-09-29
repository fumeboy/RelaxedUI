import React from "react";
import {E, C, ifShow} from "$u/h";

let L: (appearance: any) => React.FC<P>;

class P {
    value?: string;
    label?: string;
    placeholder?: string;
    multiline?: boolean;
    name?: string;
    id?: string;
    status?: 0 | 1 | 2 | 3;
    msg?: string;
    ifDisabled?: boolean;
}

L = (appearance) => (props) => {
    //elem
    let main = E().P({
        className: C(
            appearance.main,
        )
    });
    let label = ifShow(Boolean(props.label), E('label').P({
        className: C(appearance.label),
        htmlFor: props.id,
        disabled: props.ifDisabled
    }).pack(props.label));
    let input = E(props.multiline ? "textarea" : "input").P({
        className: C(appearance.input),
        id: props.id,
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        disabled: props.ifDisabled
    }).done();
    let msg = ifShow(Boolean(props.msg), E('span').P({className: C(appearance.msg)}).pack(props.msg));
    return main.pack(
        label,
        input,
        msg
    )
};

export {L, P}