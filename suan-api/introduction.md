# NJUPT-Suan-API 介绍

## 这是什么

NJUPT 是 **南京邮电大学** 或者 **Nanjing University of Posts and Telecommunications** 的意思。

Suan 是本项目的代号，芒果酸或者芒果酸酸。

API 是这个东西的工作，作为 API，以及 MCP。

MCP 是模型上下文协议，用于给 LLM 提供可供调用的工具。

## 特别说明

由于在网络上缺少与南京邮电大学相关的 Web API，已有的项目（[NJUPT-API](https://github.com/gaoliang/NJUPT-API)）也已经年久失修，
芒果帆帆复刻这些 API 的过程也并不顺利。

经过芒果帆帆的社工活动可得，我邮并不对外提供查询课表、跑操次数等数据的接口，因此 NJUPT-Suan-API 不得不另辟蹊径来获得课表数据。

## 技术路线

NJUPT-Suan-API 使用 Python 实现了 API 和 MCP 后端，主要使用了 FastAPI 和 FastMCP，所有功能一式两份在 API 和 MCP 中分别提供。

另外提供 WebUI 管理面板用来便于管理。管理面板使用 Vue 设计。出于一些考量，管理面板不是可选的模块。