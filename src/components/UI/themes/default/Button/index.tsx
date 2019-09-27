import normal from './style.less'
import danger from './danger/style.less'
import warning from './warning/style.less'
import success from './success/style.less'
import primary from './primary/style.less'
import {L, P} from '$u/layout/Button'

let A = {
    normal,
    danger,
    warning,
    success,
    primary,
};

let C = (key = normal) => L(key);

export default {A, P, C}