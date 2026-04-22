import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Suan Projects",
  description: "AI Projects of Mango Suan",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'README', link: '/readme' }
    ],

    sidebar: [
      {
        text: 'NJUPT Suan API',
        items: [
          { text: '介绍', link: '/suan-api/introduction' },
          { text: '部署', link: '/suan-api/deploy' },
          { text: 'Playwright', link: '/suan-api/playwright' },
          { text: 'API 文档', link: '/suan-api/api-docs' },
          { text: 'LLM 工具', link: '/suan-api/llm-tools' },
        ]
      },
      {
        text: 'Astrbot 插件（已归档）',
        items: [
          { text: '介绍', link: '/astrbot-plugin/introduction' },
          { text: '图像渲染', link: '/astrbot-plugin/image-render' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
