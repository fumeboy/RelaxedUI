layout 也就是 UI 组件的接口

无样式文件，有样式接口

它们的实现在 themes 文件夹

写作约定：

组件元素名应当和class名一致

example：

```
let main = E().P({
        className: C(
            appearance.main,
        ),
        disabled: props.ifDisabled,
    });
```

Button 中，你可以看到 `let main = ...`,   `appearance.main`  两处用了同样的名称 "main"

为什么这样做？

为了让你看到 layout 就知道该用什么类名在 css 中