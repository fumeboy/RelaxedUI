import React from 'react'
import {E, C} from '$u/h'

import moment from "moment";

let L: (appearance: any) => React.FC<P>;

class P {
    funcUpdateYear: (m: number) => void = () => null;
    funcUpdateMonth: (m: number) => void = () => null;
    funcUpdateDate: (d: moment.Moment) => void = () => null;
    month!: number;
    year!: number;
    dates!: moment.Moment[]
}

L = (appearance) => (props) => {
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });

    let yearBar = E('div').P({
        className: C(
            appearance.yearBar,
        ),
    });
    let prev_year_button = E('button').P({
        className: C(
            appearance.prev_year_button,
        ),
        onClick: () => props.funcUpdateYear(props.year - 1)
    }).done();
    let next_year_button = E('button').P({
        className: C(
            appearance.next_year_button,
        ),
        onClick: () => props.funcUpdateYear(props.year + 1)
    }).done();
    let y_text = E('h3').P({
        className: C(
            appearance.y_text,
        ),
    }).pack([props.year]);


    let monthBar = E('div').P({
        className: C(
            appearance.monthBar,
        ),
    });
    let prev_month_button = E('button').P({
        className: C(
            appearance.prev_month_button,
        ),
        onClick: () => props.funcUpdateMonth(props.month - 1)
    }).done();
    let next_month_button = E('button').P({
        className: C(
            appearance.next_month_button,
        ),
        onClick: () => props.funcUpdateMonth(props.month + 1)
    }).done();
    let m_text = E('h3').P({
        className: C(
            appearance.m_text,
        ),
    }).pack([moment().month(props.month).format('MMMM')]);

    let weekBox = E().P({
        className: C(
            appearance.weekBox,
        )
    }).pack([
        E().P({className: C(appearance.weekGrid,)}).pack(["Su"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["Mo"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["Tu"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["We"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["Th"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["Fr"]),
        E().P({className: C(appearance.weekGrid,)}).pack(["Sa"]),
    ]);

    let dayBox = E().P({
        className: C(
            appearance.dayBox,
        )
    }).pack([
        props.dates.map((date) => E('section').P({
            className: C(
                appearance.dayGrid,
                date.month() === props.month ? appearance.current : date.month() > props.month ? appearance.future : appearance.past
            ),
            key: date,
            onClick: () => props.funcUpdateDate(date),
        }).pack([
            date.date()
        ]))
    ]);

    return main.pack([
        monthBar.pack([
            prev_month_button,
            m_text,
            next_month_button
        ]),
        weekBox,
        dayBox,
        yearBar.pack([
            prev_year_button,
            y_text,
            next_year_button
        ]),
    ]);
};
export {L, P}