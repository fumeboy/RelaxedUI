import React, {useState} from "react";
import {E, C} from "$u/h";
import circle from "$u/layout/Icon/circle";
import svg from "$u/layout/Icon/h"

let L: (appearance: any) => React.FC<P>;

class P {
    ifChecked?: boolean = false;
    ifDisabled?: boolean = false;
    funcCheck!: ()=>void;
}


L = (appearance) => (props) => {
    let main = E().P({
        className: C(
            appearance.main,
        ), onClick: () => props.ifDisabled ? null : props.funcCheck()
    });
    let svgBox = E().P({
        className: C(
            appearance.svgBox,
        )
    });
    return main.pack(
        svgBox.pack(
            svg().P({
                viewBox: "0 0 24 24"
            }).pack(
                circle().P({cx: "12", cy: "12", r: "12"}).done()
            )
        )
    )
};

export {L, P}