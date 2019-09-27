import normal from './style.less'
import disabled from './disabled/style.less'
import checked from './checked/style.less'
import checked_disabled from './checked_disabled/style.less'
import layout from '$u/layout/Radio'

namespace N {
    export let A = {
        normal,
        disabled,
        checked,
        checked_disabled
    };
    export class P extends layout.P{
    }
    export let C = (props:P) => {
        let appearance;
        if(props.ifChecked) {
            if (props.ifDisabled) {
                appearance = checked_disabled;
            }else{
                appearance = checked
            }
        }else if(props.ifDisabled){
            appearance = disabled
        }else{
            appearance = normal
        }
        return layout.L(appearance)(props);
    };
}

export default N