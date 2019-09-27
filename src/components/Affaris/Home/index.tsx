import React from 'react';
import Button from '$u/themes/default/Button/'
import CheckBox from '$u/themes/default/CheckBox'
import Radio from '$u/themes/default/Radio'
import {E} from '$u/h'

let C: React.FC<P>;

class P {
}

C = () => E().pack(
    E('p').pack("This is Home Page"),
    E().pack(
        Button.L(Button.A.primary)({text_1: "ButtonP"}),
        Button.L(Button.A.success)({text_1: "ButtonS"}),
        Button.L(Button.A.danger)({text_1: "ButtonD"}),
        Button.L(Button.A.warning)({text_1: "ButtonW"}),
        Button.L(Button.A.normal)({text_1: "ButtonX", ifDisabled: true}),
    ),
    E().pack(
        CheckBox.L(CheckBox.A.normal)({id: "id1", label: "label", name: "name1"}),
        CheckBox.L(CheckBox.A.normal)({id: "id2", label: "label", name: "name2", ifChecked: true}),
        CheckBox.L(CheckBox.A.normal)({id: "id3", label: "label", name: "name3", ifDisabled: true}),
        CheckBox.L(CheckBox.A.normal)({
            id: "id4",
            label: "label",
            name: "name4",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
    E().pack(
        Radio.L(Radio.A.normal)({id: "id5", label: "label", name: "name5"}),
        Radio.L(Radio.A.normal)({id: "id6", label: "label", name: "name6", ifChecked: true}),
        Radio.L(Radio.A.normal)({id: "id7", label: "label", name: "name7", ifDisabled: true}),
        Radio.L(Radio.A.normal)({
            id: "id8",
            label: "label",
            name: "name8",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
);

export default C;