import React, {useState} from 'react'
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
        disabled: string = "";
        svgBox: string = "";
        input: string = "";
        checked: string = "";
        ins: string = "";
        label: string = "";
        check: string = "";
        minus: string = "";
    }
}

N.L = (style) => (props) => {
    let checked, set_checked = useState(props.checked);
    let main = E().P({
        className: C(style.ins),
        // onClick: set_checked()
    });
    let input = E('input').P({
        id: props.id,
        name: props.name,
        type: "checkbox",
        disabled: props.disabled,
        className: C(props.disabled ? style.disabled : "", props.checked ? style.checked : "", style.input)
    }).done();
    let svgBox = E().P({
        className: C(style.svgBox)
    });
    let svg_1 = ifDisplay(props.checked && !props.disabled, (
        E('svg').P({
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: C(style.check),
        }).Children(
            E('path').P({
                d: "M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
            }).done()
        )
    ));
    let svg_2 = ifDisplay(props.disabled && !props.checked, (
        E('svg').P({
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: C(style.minus),
        }).Children(
            E('path').P({
                d: "M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
            }).done()
        )
    ));
    let label = ifDisplay(Boolean(props.label), E('label').P({
        htmlFor: props.id,
        className: C(style.label)
    }).Children(
        props.label
    ));

    return (
        main.Children(
            input,
            svgBox.Children(
                svg_1,
                svg_2
            ),
            label
        )
    )
};
export default N