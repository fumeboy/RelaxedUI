import React from 'react'
import {E, C, ifDisplay} from '$u/h'

namespace N {
    export let L: (style: S) => React.FC<P>;
    export class P {
        label!: string;
        id!: string;
        name!: string;
        checked?: boolean = false;
        disabled?: boolean = false;
    }
    export class S {
        public disabled: string = "";
        public svgBox: string = "";
        public input: string = "";
        public ins: string = "";
        public label: string = "";
    }
}

N.L = (style) => (props) => {
    let ElemContainer = E().P({
        className: C(style.ins)
    });
    let Input = E('input').P({
        id: props.id,
        name: props.name,
        type: "checkbox",
        disabled: props.disabled,
        checked: props.checked,
        className: C(props.disabled ? style.disabled : "", style.input)
    }).done();
    let svgBox = E().P({
        className: C(style.svgBox)
    });
    let svg_1 = ifDisplay(props.checked && !props.disabled, (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="check"
        >
            <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"/>
        </svg>
    ));
    let svg_2 = ifDisplay(props.disabled && !props.checked, (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="minus"
        >
            <path d="M0 10h24v4h-24z"/>
        </svg>
    ));
    let Label = ifDisplay(Boolean(props.label), E('label').P({
        htmlFor: props.id,
        className: C(style.label)
    }).Children(
        props.label
    ));

    return (
        ElemContainer.Children(
            Input,
            svgBox.Children(
                svg_1,
                svg_2
            ),
            Label
        )
    )
    // return (
    //     e1.Children(
    //         e2,
    //         e3.Children(
    //             e4,
    //             e5
    //         ),
    //         e6
    //     )
    // )
};
export default N