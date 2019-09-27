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
        this.p = Object.assign(this.p, p);
        return this
    }
    contain(...c: ReactNode[]) {
        this.c = c;
        return this
    }
    pack(...c: ReactNode[]) {
        this.c = c;
        return this.done()
    }
}

export function ifShow(b:boolean=false, e:any){
    return b ? e : null
}

export function selectAppearance(key:string|undefined, appearances: {[key:string]:any}) {
    if(key){
        return appearances[key]
    }else{
        return appearances[1]
    }
}

export const E = (t: string= 'div') => {
    let e_ = new Elem();
    e_.t = t;
    return e_;
};

export const C = (...classNames:any[])=>{
    return classNames.join(" ").replace("  "," ").trim();
};