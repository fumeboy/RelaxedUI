import svgH from './h'
import * as React from "react";
import {E} from "$u/h";

let C: React.FC<P>;

class P extends svgH.P {

}

C = svgH.L(E('path').P({
    d: "M0 10h24v4h-24z"
}).done());

export default {C, P}