UI 工具

计划是：

1 个组件描述文件 => react、vue、flutter 等多平台的UI组件文件

当前仅就 react 设计了一个框架。

作为展示的文件结构：

```
.
|____index.ts
|____h.ts
|____Affaris
| |____readme.md
| |____Home
| | |____index.tsx
|____UI
| |____h.ts
| |____readme.md
| |____layout
| | |____readme.md
| | |____Button
| | | |____layout.less
| | | |____index.tsx
| |____themes
| | |____readme.md
| | |____main.less
| | |____default
| | | |____style.less
| | | |____Button
| | | | |____style.less
| | | | |____success
| | | | | |____index.tsx
| | | | | |____style.less
| | | | |____warning
| | | | | |____index.tsx
| | | | | |____style.less
| | | | |____primary
| | | | | |____index.tsx
| | | | | |____style.less
| | | | |____danger
| | | | | |____index.tsx
| | | | | |____style.less
```

设计的组件结构大致是这样的：
```
|____Affaris
| |____业务组件 有逻辑 与样式解耦
|____UI
| |____UI 组件 无逻辑 
| |____layout
| | |____布局组件，是富样式组件的接口/抽象
| |____themes
| | |____富样式组件，是layout的实例化
```

就button组件进行展示：

UI-layout 部分：
```
import React from 'react'
import layout from './layout.less'
import {styleType} from '@/components/UI/h'

let L:(style:styleType)=>React.FC<P>;

class P {
    public text_1?: string;
    public text_2?: string;
    public ifLock?: boolean=false;
    public ifWithBorder?: boolean=false;
    public ifWithBorderRadius?: boolean=false;
}

L = (style) => (props) => {
    return (
        <div
            className={[
                layout.ins,
                style.ins,
                props.ifLock ? style.lock : null,
                props.ifWithBorder ? style.WithBorder : null,
                props.ifWithBorderRadius ? style.WithBorderRadius : null,
            ].join(" ")}
        >
            <div className={layout.text_1}>{props.text_1}</div>
            <div className={layout.text_2}>{props.text_2}</div>
        </div>
    )
};

export default {L, P}
```

UI-themes 部分

```
import React, {useState} from 'react'
import style from './style.less'
import layoutC from '@/components/UI/layout/Button'

let C: React.FC<P>;

class P extends layoutC.P {
}

C = layoutC.L(style);

export default {C, P}
```

```
@import "../style";

.ins {
  background: none rgb(45, 78, 245);
  border-color: rgb(45, 78, 245);
  color: @light;
  box-shadow: rgba(45, 78, 245, 0.5) 0 10px 25px;
}
```

具体请见 src/components/UI/ 部分