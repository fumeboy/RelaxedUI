import React from 'react'
import {C, E, ifShow, makeState} from '$u/h'
import moment = require("moment");

import {P as CalendarP} from '../Calendar'
import _ from 'lodash';

let L: (appearance: any) => React.FC<P>;

class P {
    calendarE!: React.FC<CalendarP>
}

let getDates = (month: string | number, year: string | number) =>  {
    let firstDate = moment([year, month]).weekday(0);

    return _.range(42).map((val, index) => {
        return firstDate.clone().add(index, 'd');
    });
};

L  = (appearance) => (props) => {
    //state
    let date = moment();
    let month = date.month();
    let year = date.year();
    let state = {
        month: makeState(month),
        year: makeState(year),
        date: makeState(date),
        dates: makeState(getDates(month, year)),
        open: makeState(false)
    };
    // actions
    let _updateMonth = (month: number) => {
        let year = state.year.value;

        if (month >= 12) {
            year++;
            month %= 12;
        } else if (month < 0) {
            year--;
            month = 12 + month;
        }
        state.year.change(year);
        state.month.change(month);
        state.dates.change(getDates(month, year))
    };

    let _updateDate = (date:moment.Moment) => {
        state.date.change(date);
        state.open.change(false);
    };

    let _updateYear = (year:number) => {
        let month = state.month.value;
        state.year.change(year);
        state.dates.change(getDates(month, year))
    };

    let _open = () => {
        state.open.change(true);
    };
    // elem
    let main = E().P({
        className: C(
            appearance.main,
        ),
    });
    let input = E('input').P({
        className: C(
            appearance.input,
        ),
        type:"text",
        value: state.date.value.format('MM/DD/YYYY'),
        readOnly: true,
        onClick: () => _open()
    }).done();
    let calendar = ifShow(state.open.value, props.calendarE({
        year:state.year.value,
        month: state.month.value,
        dates:state.dates.value,
        funcUpdateMonth:_updateMonth,
        funcUpdateDate:_updateDate,
        funcUpdateYear: _updateYear
    }));

    return main.pack([
        input,
        calendar
    ])
};
export {L, P}