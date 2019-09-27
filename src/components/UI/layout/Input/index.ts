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
    let statusStyle = () => {
        let style;
        switch (props.status) {
            case 0:
                break;
            case 1:
                style = appearance.success;
                break;
            case 2:
                style = appearance.warning;
                break;
            case 3:
                style = appearance.error;
                break;
        }
        return style
    };
    //elem
    let main = E().P({
        className: C(
            appearance.ins,
            props.ifDisabled ? appearance.disabled : null,
            statusStyle()
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
    let msg = ifShow(Boolean(props.msg), E('msg').P({className: C(appearance.msg)}).pack(props.msg));
    return main.pack(
        label,
        input,
        msg
    )
};

export {L, P}