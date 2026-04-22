# API 文档

Suan API 公开的 API 端点为 `/api`，不需要身份验证即可调用。

在 WebUI 中的「**课表管理**」页面可以查看该版本的 Suan API 提供的公共 API 信息，在 FastAPI 自带的 `/docs` 端点中也可以查看所有 API 的文档。本文档记录的信息默认为最新版本的，并且进行稍详细的介绍，如果你没有使用最新版本的话，可能会有不一样。

## 返回值

大部分端点都会返回统一的结构化数据。在 Suan API 内部的定义如下：

```python
# router/enhance/lib.py
class ReturnDto(BaseModel):
    success: bool
    message: str | None = None
    result: Any | None = None
    img_url: str | None = None
```

请求得到的响应的状态码也是很重要的信息。对于大部分端点来说，状态码反映的是服务器内部是否出现意料之外的错误（`5XX`），而返回值中的 `success` 字段表示的是请求在业务上是否成功。

`img_url` 是否存在是根据请求时是否有 `img: True` 来决定的，默认为 False。生成图片需要使用 Playwright 进行截图，在服务器上对于性能开销稍大，因此不会默认启用。
