import React, {useState} from "react";
import {E, C} from "$u/h";
import circle from "$u/layout/Icon/circle";
import svg from "$u/layout/Icon/h"

let L: (appearance: any) => React.FC<P>;

class P {
    ifChecked?: boolean = false;
    ifDisabled?: boolean = false;
}

L = (appearance) => (props) => {
    let [checked, set_checked] = useState(props.ifChecked);
    let main = E().P({
        className: C(
            appearance.ins,
            props.ifDisabled ? appearance.disabled : null,
        ), onClick: () => props.ifDisabled ? null : set_checked(!checked)
    });
    let svgBox = E().P({
        className: C(
            appearance.svgBox,
            checked ? appearance.on : appearance.off,
        )
    });
    return main.pack(
        svgBox.pack(
            svg().P({
                width: "20",
                height: "20",
                viewBox: "0 0 24 24"
            }).pack(
                circle().P({cx: "12", cy: "12", r: "12"}).done()
            )
        )
    )
};

export {L, P}