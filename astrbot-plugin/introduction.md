# NJUPT Suan 插件介绍

**NJUPT Suan** - **芒果酸**

## 这是什么

这是一个 Astrbot 插件。

[Astrbot](https://astrbot.app/) 是一个跨平台 AI 助手，让 AI 直接工作在聊天软件中。你也可以把它当成一个聊天机器人，或者一个不能聊天只负责执行任务的工具人。

NJUPT Suan 当中的 `Suan` 是芒果酸酸的酸，本插件为 Astrbot 中运行的 LLM 提供了与 NJUPT 有关的工具。

## 功能介绍

### 生成课程表

:::info 已归档
不再支持生成以下图片。
:::

![单日课表](/image/astrbot-plugin-schedule-1.png)

![单周课表](/image/astrbot-plugin-schedule-2.png)

上方预览效果是在插件设置中启用了忽略空行空列之后的效果。如果显示完全的话，那么完全没有课的行（时间段）和列（天）都会显示完整。

图片的标题由 LLM 决定，因此你可以通过提示词来让 LLM 生成更适合的标题。

此功能被包装为 LLM 工具，供 LLM 主动调用，需要在 Astrbot 中使用支持工具调用的模型。

## 技术路线

Astrbot 是使用 Python 构建的，其插件也使用 Python，因此 NJUPT Suan 也使用 Python 构建。