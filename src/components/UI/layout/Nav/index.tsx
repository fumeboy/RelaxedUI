import React from 'react'
import {E, C, ifShow} from '$u/h'

let L: (appearance: any) => React.FC<P>;

// TODO
class P {
    logo?: string;
    title?: string;
    nav_left?: React.ReactNode[] = [];
    nav_right?: React.ReactNode[] = [];
    expand_area?: React.ReactNode[] = [];
}

L = (appearance) => (props) => {
    let p_nav_right:React.ReactNode[] = [];
    if(props.nav_right!=undefined)p_nav_right = props.nav_right;
    // elem
    let main = E('nav').P({
        className: C(
            appearance.main,
        ),
    });
    let box = E().P({
        className: C(
            appearance.box,
        ),
    });
    let title = E().P({
        className: C(
            appearance.title,
        ),
    }).pack([props.title]);
    let logo = ifShow(Boolean(props.logo), E('img').P({
        className: C(
            appearance.logo,
        ),
        url: props.logo
    }).done());
    let expand_btn = E().P({
        className: C(
            appearance.expand_btn,
        ),
    }).done();
    let items_box = E().P({
        className: C(
            appearance.items_box,
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
    }).pack([...p_nav_right]);
    let expand_area = E().P({
        className: C(
            appearance.expand_area,
        ),
    }).pack(props.expand_area);

    return main.pack([
        box.pack([
            logo,
            title,
            items_box.pack([
                nav_left,
                nav_right,
            ]),
            expand_btn,
            expand_area
        ])
    ])
};
export {L, P}