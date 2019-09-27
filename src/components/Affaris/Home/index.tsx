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
        Button.C({text_1: "ButtonP", appearance: Button.A.primary}),
        Button.C({text_1: "ButtonS", appearance: Button.A.success}),
        Button.C({text_1: "ButtonD", appearance: Button.A.danger}),
        Button.C({text_1: "ButtonW", appearance: Button.A.warning}),
        Button.C({text_1: "ButtonX", appearance: Button.A.disabled}),
    ),
    E().pack(
        CheckBox.C({id: "id1", label: "label", name: "name1"}),
        CheckBox.C({id: "id2", label: "label", name: "name2", ifChecked: true}),
        CheckBox.C({id: "id3", label: "label", name: "name3", ifDisabled: true}),
        CheckBox.C({
            id: "id4",
            label: "label",
            name: "name4",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
    E().pack(
        Radio.C({id: "id5", label: "label", name: "name5"}),
        Radio.C({id: "id6", label: "label", name: "name6", ifChecked: true}),
        Radio.C({id: "id7", label: "label", name: "name7", ifDisabled: true}),
        Radio.C({
            id: "id8",
            label: "label",
            name: "name8",
            ifChecked: true,
            ifDisabled: true,
        }),
    ),
);

export default C;