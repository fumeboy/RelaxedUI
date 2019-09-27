import React, {useState} from 'react'
import {E, C, ifShow} from '$u/h'
import svg_ from '$u/layout/Icon/h'
import right_ from '$u/layout/Icon/right'
import disable_line_ from "$u/layout/Icon/disable_line";


let L: (appearance: any) => React.FC<P>;

class P {
    label!: string;
    id!: string;
    name!: string;
    ifChecked?: boolean = false;
    ifDisabled?: boolean = false;
}


L = (appearance) => (props) => {
    let [checked, set_checked] = useState(props.ifChecked);
    let main = E().P({
        className: C(
            appearance.ins,
            checked && props.ifDisabled ? appearance.checked_and_disabled:null,
            checked && !props.ifDisabled ? appearance.checked:null,
            !checked && props.ifDisabled ? appearance.disabled:null,
        ),
        onClick: () => props.ifDisabled ? null : set_checked(!checked)
    });
    let input = E('input').P({
        id: props.id,
        name: props.name,
        type: "checkbox",
        disabled: props.ifDisabled,
        className: C(appearance.input)
    }).done();
    let svgBox = E().P({
        className: C(appearance.svgBox)
    });
    let svg_1 = ifShow(checked && !props.ifDisabled,
        svg_().P({
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: C(appearance.check)
        }).pack(
            right_().done()
        )
    );
    let svg_2 = ifShow(props.ifDisabled,
        svg_().P({
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: C(appearance.minus)
        }).pack(
            disable_line_().done()
        )
    );
    let label = ifShow(Boolean(props.label), E('label').P({
        htmlFor: props.id,
        className: C(appearance.label)
    }).pack(
        props.label
    ));

    return (
        main.pack(
            input,
            svgBox.pack(
                svg_1,
                svg_2
            ),
            label
        )
    )
};
export {L, P}