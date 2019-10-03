import React from 'react';
import Button from '$u/themes/default/Button/'
import ButtonGroup from '$u/themes/default/Button/Group'
import CheckBox from '$u/themes/default/Form/CheckBox'
import Radio from '$u/themes/default/Form/Radio'
import Switch from '$u/themes/default/Form/Switch'
import Input from '$u/themes/default/Form/Input'
import FileInput from '$u/themes/default/Form/FileInput'
import Breadcrumbs from '$u/themes/default/Breadcrumbs'
import BreadcrumbsItem from '$u/themes/default/Breadcrumbs/Item'
import Divider from '$u/themes/default/Divider'
import Menu from '$u/themes/default/Menu'
import MenuItem from '$u/themes/default/Menu/Item'
import Container from '$u/themes/default/Container'
import Nav from '$u/themes/default/Nav'
import NavItem from '$u/themes/default/Nav/Item'
import DatePicker from '$u/themes/default/DateTime/DatePicker'
import Calendar from '$u/themes/default/DateTime/Calendar'
import {E, makeState} from '$u/h'

let C: React.FC;

C = () => {
    let state = {
        CheckBox: {
            1: makeState(false),
            2: makeState(true),
            3: makeState(false),
            4: makeState(true),
        },
        Radio: {
            1: makeState(false),
            2: makeState(true),
            3: makeState(false),
            4: makeState(true),
        },
        Switch: {
            1: makeState(false),
            2: makeState(true),
            3: makeState(true),
        },
        FileInput: {}
    };
    return E().pack([
        Nav.C({title: "title", nav_left:[
                NavItem.C({text: "item"}),
                NavItem.C({text: "Nav item", ifActive: true}),
            ], nav_right:[
                NavItem.C({text: "item"}),
                NavItem.C({text: "Nav item"}),
            ], expand_area:[]
        }),
        E().pack([
            Breadcrumbs.C({
                items: [
                    BreadcrumbsItem.C({text: "Home"}),
                    BreadcrumbsItem.C({text: "Breadcrumbs item"}),
                    BreadcrumbsItem.C({text: "Breadcrumbs Breadcrumbs item"}),
                ]
            })]
        ),
        Container.C({
            children: [
                DatePicker.C({
                    calendarE: Calendar.C
                })
            ]
        }),
        Container.C({
                children: [
                    ButtonGroup.C({
                        Items: [
                            Button.C({text_1: "ButtonN", size: 1}),
                            Button.C({text_1: "ButtonP", size: 1}),
                            Button.C({text_1: "ButtonS", ifDisabled: true, size: 1}),
                            Button.C({text_1: "ButtonD", size: 1}),
                            Button.C({text_1: "ButtonW",size: 1}),
                            Button.C({text_1: "ButtonX", ifDisabled: true, size: 1}),
                        ]
                    }),
                    Divider.C({}),
                    E().pack([
                        Button.C({text_1: "ButtonN", size: 1}),
                        Button.C({text_1: "ButtonP", appearance: Button.A.primary, size: 1}),
                        Button.C({text_1: "ButtonS", appearance: Button.A.success, size: 1}),
                        Button.C({text_1: "ButtonD", appearance: Button.A.danger, size: 1}),
                        Button.C({text_1: "ButtonW", appearance: Button.A.warning, size: 1}),
                        Button.C({text_1: "ButtonX", ifDisabled: true, size: 1}),
                    ]),
                    Divider.C({}),
                    E().pack([
                        Button.C({text_1: "ButtonN"}),
                        Button.C({text_1: "ButtonP", appearance: Button.A.primary}),
                        Button.C({text_1: "ButtonS", appearance: Button.A.success}),
                        Button.C({text_1: "ButtonD", appearance: Button.A.danger}),
                        Button.C({text_1: "ButtonW", appearance: Button.A.warning}),
                        Button.C({text_1: "ButtonX", ifDisabled: true}),
                    ]),
                ]
            }
        ),
        Divider.C({text: "CheckBox"}),
        Container.C({
                children: [
                    CheckBox.C({
                        label: "label",
                        ifChecked: state.CheckBox[1].value,
                        funcCheck: () => state.CheckBox[1].change(!state.CheckBox[1].value)
                    }),
                    CheckBox.C({
                        label: "label",
                        ifChecked: state.CheckBox[2].value,
                        funcCheck: () => state.CheckBox[2].change(!state.CheckBox[2].value)
                    }),
                    CheckBox.C({
                        label: "label",
                        ifDisabled: true,
                        ifChecked: state.CheckBox[3].value,
                        funcCheck: () => state.CheckBox[3].change(!state.CheckBox[3].value)
                    }),
                    CheckBox.C({
                        label: "label",
                        ifChecked: state.CheckBox[4].value,
                        funcCheck: () => state.CheckBox[4].change(!state.CheckBox[4].value),
                        ifDisabled: true,
                    }),]
            }
        ),
        Divider.C({text: "Radio"}),
        Container.C({
                children: [
                    Radio.C({
                        label: "label",
                        ifChecked: state.Radio[1].value,
                        funcCheck: () => state.Radio[1].change(!state.Radio[1].value)
                    }),
                    Radio.C({
                        label: "label",
                        ifChecked: state.Radio[2].value,
                        funcCheck: () => state.Radio[2].change(!state.Radio[2].value)
                    }),
                    Radio.C({
                        label: "label",
                        ifChecked: state.Radio[3].value,
                        funcCheck: () => state.Radio[3].change(!state.Radio[3].value),
                        ifDisabled: true
                    }),
                    Radio.C({
                        label: "label",
                        ifChecked: state.Radio[4].value,
                        funcCheck: () => state.Radio[4].change(!state.Radio[4].value),
                        ifDisabled: true,
                    }),]
            }
        ),
        Divider.C({text: "Switch"}),
        Container.C({
                children: [
                    Switch.C({
                        ifChecked: state.Switch[1].value,
                        funcCheck: () => state.Switch[1].change(!state.Switch[1].value)
                    }),
                    Switch.C({
                        ifChecked: state.Switch[2].value,
                        funcCheck: () => state.Switch[2].change(!state.Switch[2].value)
                    }),
                    Switch.C({
                        ifDisabled: true,
                        ifChecked: true,
                        funcCheck: ()=>null
                    }),
                    Switch.C({
                        ifDisabled: true,
                        funcCheck: ()=>null
                    }),]
            }
        ),
        Container.C({
            children: [
                Divider.C({text: "Divider left", position: 1}),
                Divider.C({text: "Divider center"}),
                Divider.C({text: "Divider right", position: 2}),]
        }),
        Divider.C({text: "Input"}),
        Container.C({
                children: [
                    Input.C({label: "label", id: "i1", name: "i1", msg: "normal", placeholder: "placeholder"}),
                    Input.C({label: "label", id: "i2", name: "i2", msg: "normal", placeholder: "placeholder", status: 1}),
                    Input.C({label: "label", id: "i3", name: "i3", msg: "normal", placeholder: "placeholder", status: 2}),
                    Input.C({label: "label", id: "i4", name: "i4", msg: "normal", placeholder: "placeholder", status: 3}),
                    Input.C({
                        label: "label",
                        id: "i5",
                        name: "i5",
                        msg: "normal",
                        placeholder: "placeholder",
                        multiline: true
                    }),]
            }
        ),
        Divider.C({text: "FileInput"}),
        E().pack([]
            // FileInput.C({ifDisabled: false, funcUpload:()=>{},})
        ),
        Divider.C({text: "MENU"}),
        E().pack([
            Menu.C({
                items: [
                    MenuItem.C({text: "item"}),
                    MenuItem.C({text: "Menu item"}),
                    Divider.C({text: "Menu 1", position: 1}),
                    MenuItem.C({text: "Menu Menu item"}),
                ]
            })
        ])
    ]);
};

export default C;