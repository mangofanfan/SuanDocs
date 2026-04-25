# 部署

酸 API 同时具备 API 和 MCP 后端的功能。因此，酸 API 不支持 stdio 格式的 MCP 调用。

## cli 命令

NJUPT Suan API 现在拥有一个 cli 命令行，可以作为入口以及管理工具。在设计上，这个命令行工具叫做 `suanapi`。

|命令|简介|
|--|--|
|init|初始化 NJUPT Suan API，包括创建工作目录、创建配置文件以及下载 playwright chromium|
|token|显示以及生成新的管理后端令牌|
|run|运行 NJUPT Suan API，支持传入 host port reload 参数|

cli 拥有完整的帮助文档，你可以使用 `--help` 查看。

## 部署 Suan API 示例

目前的 Suan API 在设计上即不允许（或者说不适合）公开部署、公共服务，因此你需要自行部署 Suan API 实例。

### 使用 uv 部署

芒果计划把 NJUPT Suan API 做成一个 uv 工具，但现在看来好像还存在一些问题。

你现在可以将 NJUPT Suan API 作为一个依赖安装，然后使用命令行启动。NJUPT Suan API 已经发布至 pypi。

```bash
# 初始化 uv 项目
uv init -p 3.13

# 安装
uv add njupt-suan-api

# 初始化 NJUPT Suan API
# 只需要首次运行前初始化一次即可
uv run suanapi init -f

# 运行
uv run suanapi run
```

初始化时需要加上 `-f` 是一个技术性妥协，芒果需要研究一些更优雅的解决方法。不过目前是可以使用的，芒果已经在 Windows 和 Linux 上做过测试了~

### 使用 Docker 部署

### 从源码部署

:::warning 性能警告
直接从 `main.py` 入口运行可能会导致一些潜在的性能问题，表现为 Suan API 会占用较多的性能，而这可能不是你希望看到的。

等芒果帆帆再完善完善，然后争取提供其他更方便的部署选项吧~
:::

使用 git 命令从 Mango Gitea 上拉取源代码：

```bash
git clone https://gitea.mangofanfan.cn/SuanDev/NJUPT-Suan-API.git
```

这会将项目的源代码克隆到 `NJUPT-Suan-API` 目录中。

然后，你需要 uv 和 pnpm 来启动项目，请确保环境中已经安装了它们。

在 `NJUPT-Suan-API` 目录下运行：

```bash
uv sync
```

这将会构建 Python 虚拟环境，包括安装 Python 3.13（如果没有）和安装项目使用的依赖。

```bash
uv run playwright install chromium
```

这将会安装 chromium 供 playwright 使用。Suan API 通过这个 chromium 来模拟真实用户行为，以及截取课程表图片。

安装 chromium 可能需要一段**比较长的时间**。大体上这是能够成功的，只是需要一段**比较长的时间**。

然后（或者同时），在 `NJUPT-Suan-API/webui` 目录下运行：

```bash
pnpm install
pnpm build
```

这将会安装 WebUI 所使用的依赖，然后构建 WebUI。这一般是很快的。

现在，回到 `NJUPT-Suan-API` 目录下，使用以下命令启动项目：

```bash
uv run main.py
```

NJUPT Suan API 应当可以正常启动。
