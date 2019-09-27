import normal from './style.less'
import danger from './danger/style.less'
import warning from './warning/style.less'
import success from './success/style.less'
import primary from './primary/style.less'
import disabled from './disabled/style.less'
import layout from '$u/layout/Button'

namespace N {
    export let A = {
        normal,
        danger,
        warning,
        success,
        primary,
        disabled
    };
    export class P extends layout.P{
        appearance: any = A.normal
    }
    export let C = (props:P) => {
        let appearance = props.ifDisabled ? disabled: props.appearance;
        return layout.L(appearance)(props);
    };
}

export default N