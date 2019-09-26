import React, {ReactNode} from "react";

export class styleType {
    [className: string]: string
}

class Elem {
    t: string = 'div';
    p: object = {};
    c: ReactNode[] = [];
    done(){
        return React.createElement(this.t, this.p, ...this.c)
    }
    P (p: object) {
        this.p = p;
        return this
    }
    Children(...c: ReactNode[]) {
        this.c = c;
        return this.done()
    }
}

export function ifDisplay(b:boolean=false, e:any){
    return b ? e : null
}

export const E = (t: string= 'div') => {
    let e_ = new Elem();
    e_.t = t;
    return e_;
};


export const C = (...classNames:string[])=>{
    return classNames.join(" ").replace("  "," ").trim();
};