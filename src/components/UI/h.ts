import React, {ReactNode, useState} from "react";

export class styleType {
    [className: string]: string
}

class Elem {
    // 网页元素类
    t: string = 'div';
    p: object = {};
    c: ReactNode[] = [];
    done(){
        // 结束属性的修改
        return React.createElement(this.t, this.p, ...this.c)
    }
    P (p: object) {
        // 修改要传入 React.createElement 的 props
        this.p = Object.assign(this.p, p);
        return this
    }
    contain(...c: ReactNode[]) {
        // 攘括子元素
        // this.c.concat(c);
        this.c = c;
        return this
    }
    pack(...c: ReactNode[]) {
        // 攘括子元素并结束属性的修改
        this.c = c;
        return this.done()
    }
}

export function ifShow(b:boolean=false, e:any){
    // 是否显示元素
    return b ? e : null
}

export function makeState(initState: any) {
    // 给 useState 的返回值换一个格式
    let u = useState(initState);
    return {
        value: u[0],
        change: u[1]
    }
}

export function combineAppearances(...appearances: styleType[]) {
    // 参数传入的数组长度应当大于等于 2
    let res:any = {};
    for(let i=0;i<appearances.length;i++){
        for (let index in appearances[i]){
            if(res[index])res[index] += " "+appearances[i][index];
            else res[index] = appearances[i][index]
        }
    }
    return res
}

export const E = (t: string= 'div') => {
    // 新建 Elem
    let e_ = new Elem();
    e_.t = t;
    return e_;
};

export const C = (...classNames:any[])=>{
    // 一个工具函数，方便产生一个用于网页元素的class的字符串
    return classNames.join(" ").replace("  "," ").trim();
};