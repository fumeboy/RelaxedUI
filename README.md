# relaxedUI

计划是：

1 个组件描述文件 => react、vue、flutter 等多平台的UI组件文件

当前仅就 react 设计了一个框架。

启动这个项目：(你需要先安装nodejs环境)

```shell
npm install
npm run start
```

和普通的UI框架有设计上的不同，主要从复用、可维护等方面考虑。

---

在 src/components 文件夹中，有两个文件夹： UI 与 Affaris

这两个文件夹的含义是：

Affaris：主要的业务组件，是对于 UI 组件的使用

UI： 这个项目的主要作业处，是编写 UI 组件的地方。

---

在 src/components/UI 文件夹中，有两个文件夹：layout 与 themes

这两个文件夹的含义是：

layout：无样式的UI组件，定义了组件的基本布局和交互逻辑。实际不使用此类组件直接展示，而是作为组件"接口"。

themes： layout 接口的"实现"，是被"上色"的layout

---

themes 中，每个对于 layout 的实现都应配对具体的 视觉上 的样式"状态"。

比如：

CheckBox（多选框）：视觉状态有：normal、checked、disabled、checked&disabled

![checkbox.png](https://i.loli.net/2019/09/28/BogPGHrvse9Smjb.jpg)

Button: normal、success、danger、warning、disabled
![button.png](https://i.loli.net/2019/09/28/Rr6XESauFbhv9k8.jpg)


