import React from 'react'
import layout from './layout.less'
import {styleType, E, C} from '@/components/UI/h'

let L: (style: styleType) => React.FC<P>;

class P {}

L = (style) => (props) => {
    return E(
        {
            className: C()
        },
        []
    )
};

export default {L, P}