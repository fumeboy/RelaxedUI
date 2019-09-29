import React from 'react'
import {E, C} from '$u/h'

let L: (appearance: any) => React.FC<P>;
// TODO
class P {
    nav_left: React.ReactNode[] = [];
    nav_right: React.ReactNode[] = [];
    expand_area: React.ReactNode[] = [];
}

L  = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    let logo = E().P({
        className: C(
            appearance.logo,
        ),
    });
    let title = E().P({
        className: C(
            appearance.title,
        ),
    });
    let nav_left = E().P({
        className: C(
            appearance.nav_left,
        ),
    }).pack(props.nav_left);
    let nav_right = E().P({
        className: C(
            appearance.nav_right,
        ),
    }).pack(props.nav_right);
    let expand_btn = E().P({
        className: C(
            appearance.expand_btn,
        ),
    });
    let expand_area = E().P({
        className: C(
            appearance.expand_area,
        ),
    }).pack(props.expand_area);
    return main.pack(
        logo,
        title,
        nav_left,
        nav_right,
        expand_btn,
        expand_area
    )
};
export {L, P}