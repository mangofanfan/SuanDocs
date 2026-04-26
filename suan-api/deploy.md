# 部署

酸 API 同时具备 API 和 MCP 后端的功能。因此，酸 API 不支持 stdio 格式的 MCP 调用。

## cli 命令

NJUPT Suan API 现在拥有一个 cli 命令行，可以作为入口以及管理工具。在设计上，这个命令行工具叫做 `njupt-suan-api`，与包名一致。

|命令|简介|
|--|--|
|init|初始化 NJUPT Suan API，包括创建工作目录、创建配置文件以及下载 playwright chromium|
|token|显示以及生成新的管理后端令牌|
|run|运行 NJUPT Suan API，支持传入 host port reload 参数|

使用 `njupt-suan-api --version` 查看已安装的 NJUPT Suan API 版本。

cli 拥有完整的帮助文档，你可以使用 `--help` 查看。

cli 的启动速度可能有些慢，这是因为 cli 会加载许多基于 FastAPI 工作的模块，这是一个技术性妥协，需要等待未来再优化了。

## 部署 Suan API 示例

目前的 Suan API 在设计上即不允许（或者说不适合）公开部署、公共服务，因此你需要自行部署 Suan API 实例。

### 使用 uv 部署

芒果已经把 NJUPT Suan API 做成一个 uv 工具，你现在可以直接用如下命令部署它。

```bash
# 先指定一个工作目录，建议创建一个新文件夹。
mkdir xxx
cd xxx

# 将 njupt-suan-api 作为工具安装，指定 Python 版本为 3.13。
uv tool install njupt-suan-api -p 3.13

# 在当前目录下初始化。
# 也可以使用 uvx njupt-suan-api 来调用，下同。
njupt-suan-api init -f

# 运行项目。
# 数据会存储在当前目录下，因此你每次都需要在当前目录下运行 Suan API，设计为之。
njupt-suan-api run
```

初始化时需要加上 `-f` 是一个技术性妥协，芒果需要研究一些更优雅的解决方法。不过目前是可以使用的，芒果已经在 Windows 和 Linux 上做过测试了~

### 使用 Docker 部署

感觉 Docker 好麻烦啊，等我再研究研究好嘛。

### 从源码部署

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

安装 chromium 可能需要一段**比较长的时间**。

如需从源码运行，你还需要自行构建 WebUI。请在 `NJUPT-Suan-API/webui` 目录下运行：

```bash
pnpm install
pnpm build
```

这将会安装 WebUI 所使用的依赖，然后构建 WebUI。这一般是很快的。WebUI 的构建产物位于 `src/njupt_suan_api/static` 中，该目录已经位于 `.gitignore` 中，无需担心其被 git 管理。

现在，回到 `NJUPT-Suan-API` 目录下，使用以下命令启动项目：

```bash
uv run src/njupt_suan_api/manage.py init -f
uv run src/njupt_suan_api/manage.py run
```

或者从 `main.py` 入口启动，但不建议，未来可能会移除 `main.py`。

```bash
uv run src/njupt_suan_api/main.py
```

NJUPT Suan API 应当可以正常启动。
