import React, {useState} from 'react'
import {E, C, ifShow} from '$u/h'
import disable_line_ from '$u/layout/Icon/disable_line'
import svg_ from '$u/layout/Icon/h'
import circle_ from '$u/layout/Icon/circle'


let L: (appearance: any) => React.FC<P>;

class P {
    label!: string;
    ifChecked?: boolean = false;
    ifDisabled?: boolean = false;
    funcCheck!: ()=>void;
}

L = (appearance) => (props) => {
    let main = E().P({
        className: C(
            appearance.main,
        ),
        onClick: () => props.ifDisabled ? null : props.funcCheck()
    });
    let input = E('input').P({
        type: "checkbox",
        disabled: props.ifDisabled,
        className: C(appearance.input)
    }).done();
    let svgBox = E().P({
        className: C(appearance.svgBox)
    });
    let svg_1 = ifShow(props.ifChecked && !props.ifDisabled, (
        svg_().P({
            className: C(appearance.check),
            viewBox: "0 0 24 24",
        }).pack([
            circle_().P({cx: "12", cy: "12", r: "12"}).done()
        ])
    ));
    let svg_2 = ifShow(props.ifDisabled,
        svg_().P({
            viewBox: "0 0 24 24",
            className: C(appearance.minus),
        }).pack([
            disable_line_().done()
        ])
    );
    let label = ifShow(Boolean(props.label), E('label').P({
        className: C(appearance.label)
    }).pack([
        props.label
    ]));

    return (
        main.pack([
            input,
            svgBox.pack([
                svg_1,
                svg_2
            ]),
            label
        ])
    )
};
export {L, P}