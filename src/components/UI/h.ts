import React, {ClassAttributes, AllHTMLAttributes, ReactNode} from "react";

export interface styleType {
    [className: string]: string
}

export const E = <P extends AllHTMLAttributes<T>, T extends HTMLElement>(
    props?: ClassAttributes<T> & P | null,
    children?: ReactNode[],
    tag: string = 'div'
) => React.createElement(
    tag, props, [children]
);

export const C = (...classNames:string[])=>{
    return classNames.join(" ").replace("  ","");
};