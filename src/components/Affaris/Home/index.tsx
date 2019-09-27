import React from 'react';
import Button from '$u/themes/default/Button/'
import CheckBox from '$u/themes/default/CheckBox'
import Radio from '$u/themes/default/Radio'
import Switch from '$u/themes/default/Switch'
import Input from '$u/themes/default/Input'
import {E} from '$u/h'

let C: React.FC;

C = () => E().pack(
    E('p').pack("This is Home Page"),
    E().pack(
        Button.C(Button.A.normal)({text_1: "ButtonN"}),
        Button.C(Button.A.primary)({text_1: "ButtonP"}),
        Button.C(Button.A.success)({text_1: "ButtonS"}),
        Button.C(Button.A.danger)({text_1: "ButtonD"}),
        Button.C(Button.A.warning)({text_1: "ButtonW"}),
        Button.C()({text_1: "ButtonX", ifDisabled: true}),
    ),
    E().pack(
        CheckBox.C()({id: "id1", label: "label", name: "name1"}),
        CheckBox.C()({id: "id2", label: "label", name: "name2", ifChecked: true}),
        CheckBox.C()({id: "id3", label: "label", name: "name3", ifDisabled: true}),
        CheckBox.C()({
            id: "id4",
            label: "label",
            name: "name4",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
    E().pack(
        Radio.C()({id: "id5", label: "label", name: "name5"}),
        Radio.C()({id: "id6", label: "label", name: "name6", ifChecked: true}),
        Radio.C()({id: "id7", label: "label", name: "name7", ifDisabled: true}),
        Radio.C()({
            id: "id8",
            label: "label",
            name: "name8",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
    E().pack(
        Switch.C()({}),
        Switch.C()({ifChecked:true}),
        Switch.C()({ifChecked:true, ifDisabled:true}),
    ),
    E().pack(
        Input.C()({label: "label", id: "i1", name: "i1", msg: "normal", placeholder: "placeholder"}),
        Input.C()({label: "label", id: "i2", name: "i2", msg: "normal", placeholder: "placeholder", status: 1}),
        Input.C()({label: "label", id: "i3", name: "i3", msg: "normal", placeholder: "placeholder", status: 2}),
        Input.C()({label: "label", id: "i4", name: "i4", msg: "normal", placeholder: "placeholder", status: 3}),
        Input.C()({label: "label", id: "i5", name: "i5", msg: "normal", placeholder: "placeholder", multiline: true}),
    )
);

export default C;