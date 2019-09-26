import React, {useState} from 'react'
import {E, C, ifDisplay} from '$u/h'
import iconDisableLine from '$u/parts/icon/h'
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
    let [checked, set_checked] = useState(props.checked);
    let main = E().P({
        className: C(style.ins, props.disabled ? style.disabled : "", checked ? style.checked : "",),
        onClick: ()=>props.disabled?null:set_checked(!checked)
    });
    let input = E('input').P({
        id: props.id,
        name: props.name,
        type: "checkbox",
        disabled: props.disabled,
        className: C(style.input)
    }).done();
    let svgBox = E().P({
        className: C(style.svgBox)
    });
    let svg = ifDisplay(checked && !props.disabled, (
        E('svg').P({
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: C(style.check),
        }).Children(
            E('circle').P({cx:"12",cy:"12",r:"12"}).done()
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
                svg
            ),
            label
        )
    )
};
export default N