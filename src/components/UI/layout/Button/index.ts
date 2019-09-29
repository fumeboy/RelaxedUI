import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;
// L 是 layout 的缩写
class P {
    text_1?: string;
    text_2?: string;
    ifDisabled?: boolean = false;
}
// P 是 props 的缩写

L  = (appearance) => (props) => {
    // elem 声明在这里
    let main = E().P({
        className: C(
            appearance.main,
        ),
        disabled: props.ifDisabled,
    });
    let text_1 = E().P({className: appearance.text_1}).pack([props.text_1]);
    let text_2 = E().P({className: appearance.text_2}).pack([props.text_2]);

    // elem 的排列在这里，展现了嵌套关系
    return (
        main.pack([
            text_1,
            text_2
        ])
    )
};
export {L, P}