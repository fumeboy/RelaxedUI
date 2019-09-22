import React from 'react';
import ButtonP from '@/components/UI/themes/default/Button/primary'
import ButtonS from '@/components/UI/themes/default/Button/success'
import ButtonD from '@/components/UI/themes/default/Button/danger'
import ButtonW from '@/components/UI/themes/default/Button/warning'

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
    </div>
);

export default C;