import React from 'react';
import ButtonP from '$u/themes/default/Button/primary'
import ButtonS from '$u/themes/default/Button/success'
import ButtonD from '$u/themes/default/Button/danger'
import ButtonW from '$u/themes/default/Button/warning'
import CheckBox from '$u/themes/default/CheckBox'

let C: React.FC<P>;

class P {
}

C = () => (
    <div>
        <p>This is Home Page</p>
        <ButtonP.C text_1={"ButtonP"}/>
        <ButtonS.C text_1={"ButtonS"}/>
        <ButtonD.C text_1={"ButtonD"}/>
        <ButtonW.C text_1={"ButtonW"}/>
        <CheckBox.C label={"label"} id={"id"} name={"name"}/>
    </div>
);

export default C;