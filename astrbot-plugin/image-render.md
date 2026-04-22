# 图像渲染

NJUPT Suan 提供的工具中包含图像渲染的需求。在现在的版本中，图像是通过 `wkhtmltoimage` 渲染的。

## 为什么？

造成芒果帆帆的这一决策的主要原因是，目前 Astrbot 的一个使用较为广泛的插件
[BiliVideo](https://github.com/storyAura/astrbot_plugin_biliVideo)
的图片渲染技术路线是 `wkhtmltopdf` 。

`wkhtmltopdf` 和 `wkhtmltoimage` 疑似是同一种东西，在芒果帆帆尝试安装 `wkhtmltopdf` 的时候两个就一起安装起来了。

## 如何安装？

安装这个东西是一个相当复杂且难绷的过程。根据芒果帆帆拷打 AI 得到的结果，`wkhtmltopdf` 是一个开源项目，但是已经存档，理由是
**「社区认为其功能已经较为完善，因此不再需要进行开发维护。」**

由于该软件包已经停止维护，最新的软件包源中很可能不再包含它，比如 Debian 13。因此，芒果帆帆在 Debian 13 上不得不下载 Debian 12 的软件包来安装。

:::warning
命令由 AI 生成，请谨慎使用。
:::

```bash
# 0. 到临时目录里下载适配于 Debian 12 的软件包版本
cd /tmp
wget -q https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-3/wkhtmltox_0.12.6.1-3.bookworm_amd64.deb

# 1. 安装依赖（如果还没安装的话）
sudo apt-get install -y ca-certificates fontconfig libfreetype6 libjpeg62-turbo libpng16-16 libssl3 libstdc++6 libx11-6 libxcb1 libxext6 libxrender1 xfonts-75dpi xfonts-base zlib1g

# 2. 安装下载的 deb 包
sudo apt install /tmp/wkhtmltox_0.12.6.1-3.bookworm_amd64.deb

# 或者使用 dpkg
# sudo dpkg -i /tmp/wkhtmltox_0.12.6.1-3.bookworm_amd64.deb
```

## 这是好东西吗？

这显然并不是。

NJUPT Suan 现在使用 `wkhtmltoimage` 来将 HTML 渲染为 PNG 图像，为此，需要先在代码中拼接 HTML 文本，并写入临时文件，然后调用命令。

由于 `wkhtmltoimage` 已经不再维护，加上其历史包袱（基于早期的 webkit 引擎），已经不支持许多现代的 CSS 特性。

这会导致基于现代 CSS 设计的页面的渲染效果意外地差（或者说是样式无效），因此在 vibe coding 时，芒果帆帆不得不告诉 AI 避免使用新的 CSS 特性、
简化颜色（避免使用渐变）以及使用系统自带字体。

芒果帆帆现在对于 BiliVideo 竟然会使用这套技术路线感到奇怪。按理说，Astrbot 内拥有将 Markdown 文本渲染为图片的方法，
BiliVideo 也并没有独特的需要额外实现渲染的需求（其渲染功能用于生成视频的总结图片），但 NJUPT Suan 是真的需要做课程表的表格。

如果 NJUPT Suan 还有未来的话，会尝试更换渲染方案。