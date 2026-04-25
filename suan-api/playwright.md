# Playwright

playwright 是一个用于浏览器自动化的工具，Suan API 通过 playwright 来规避教务系统和统一身份认证的反爬虫措施，顺便用它来截图。

## 安装

playwright chromium 的安装会在 `suanapi init` 初始化过程中完成。

如需从源代码运行，则 playwright 需要额外的安装步骤，在 [部署](deploy.md) 中已经说明。

在开发中芒果直接使用的是 chromium，暂未测试其他选项（firefox），不过我估计应该也没什么问题就是了~

## 截图

课程表图片是使用其来渲染的，渲染效果如下。

![芒果酸也要上课](/image/njupt-suan-api-schedule-1.png)
