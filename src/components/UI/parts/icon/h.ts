import {E} from "$u/h";
import React, {ReactNode} from "react";

namespace N {
    export let L: (...children: ReactNode[]) => React.FC<P>;

    export class P {
        width: string="";
        height: string="";
        viewBox: string="";
    }
}

N.L = (children) => (props) => E('svg').P({
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width,
    height: props.height,
    viewBox: props.viewBox,
}).Children(
    children
);
export default N