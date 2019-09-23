import React from 'react'
import layout from './layout.less'
import {styleType, E, C} from '@/components/UI/h'

let L: (style: styleType) => React.FC<P>;

class P {
    label!: string;
    id!: string;
    name!: string;
    checked?: boolean = false;
    disabled?: boolean;
    className?: string;
}

L = (style) => (props) => {
    return E(
        {
            className: C(layout.ins)
        },
        [
            E({
                id: props.id,
                name: props.name,
                type: "checkbox",
                disabled: props.disabled,
                className: C(props.disabled? style.disabled : "")
            },),
            E(
                null,
                [
                    E({className: C(layout.svgBox)}, [
                        props.checked && !props.disabled ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="check"
                            >
                                <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"/>
                            </svg>
                        ) : null,
                        props.disabled && !props.checked ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                className="minus"
                            >
                                <path d="M0 10h24v4h-24z"/>
                            </svg>
                        ) : null,]),
                    props.label ? E({htmlFor: props.id, className: C(layout.label)}, [props.label], 'label') : null
                ]
            )
        ],
        'input'
    )
};

export default {L, P}