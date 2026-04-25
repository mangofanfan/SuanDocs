# LLM 工具

LLM 工具是 NJUPT Suan API 为 LLM 提供的可调用 MCP 协议工具。

MCP 接口端点为 `/mcp`，支持 streamable HTTP 模式。

把给 LLM 使用的工具详细介绍给人类看似乎有些不太合适。请放心，Suan API 为工具提供详细的文档和参数注释，LLM 一定看得懂~

## 图片说明

课表工具可能会返回课程表图片的 URL。与 API 调用时一样，该 URL 是临时的，计划在 Suan API 的正式版本中设计为固定时间内有效、超时后删除。当前，图片会在 Suan API 重启后清理。

Suan API 提供一个专门返回图片本身的 LLM 工具，以帮助 LLM 将课程表图片直接包含在对话数据中，避免随着图片超时被删除而丢失。

## 工具文档

工具文档也被包含在 WebUI 中。
