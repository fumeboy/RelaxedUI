import React, {useState} from 'react'
import style from './style.less'
import layoutC from '@/components/UI/layout/Button'

let C: React.FC<P>;

class P extends layoutC.P {
}

C = layoutC.L(style);

export default {C, P}