![Showcase Card](/public/static/twitter-card.png)

<div align="center">

## astro-wu

</div>

astro-erudite-wu 是一个自成体系、不带任何样式的静态博客模板，由Astro、Tailwind和shadcn/ui构建而成。它重度参考 [!astro-erudite](https://github.com/jktrn/astro-erudite) 与主题有着极大的相似之处。

> [!说明]
> 这个主题修改的内容与方向极度个人化，请勿用于商业用途，因为我不确定其稳定.
> 当前测试版本：1.6.3  2025-11-25
## 简单使用说明

1. Hit &ldquo;Use this template&rdquo;, the big green button on the top right, to create a new repository in your own GitHub account with this template.

2. Clone the repository:

   ```bash
   git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPO_NAME].git
   cd [YOUR_REPO_NAME]
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:1234` to get started. The following commands are also available:

   | Command            | Description                                                     |
   | ------------------ | --------------------------------------------------------------- |
   | `npm run start`    | Alias for `npm run dev`                                         |
   | `npm run build`    | Run type checking and build the project                         |
   | `npm run preview`  | Previews the built project                                      |
   | `npm run astro`    | Run Astro CLI commands                                          |
   | `npm run prettier` | Blanket format all files using [Prettier](https://prettier.io/) |

## 修改内容（定制说明）
### 1. 站点配置
编辑src/consts.ts文件以更新您网站的元数据、导航链接和社交链接
### 2. 网站样式
src/styles/global.css颜色以OKLCH 格式定义，使用shadcn/ui约定

1. 这里我添加'江西拙楷'网络字体，以便中文阅读有更好的体验

### 3. 网站图标
网站图标是使用RealFaviconGenerator生成的。要调整网站图标，请将目录中的文件public/（例如favicon.ico、favicon.svg、apple-touch-icon.png等）替换为您自己的文件。更新网站图标文件后，您还需要调整其中的引用，src/components/Favicons.astro以匹配新的网站图标文件名和路径：

## 添加内容

将新博客文章以 MDX 文件的形式添加到src/content/blog/目录中。使用以下前置内容结构：

```
---
title: 'Your Post Title'
description: 'A brief description of your post!'
date: 2024-01-01
tags: ['tag1', 'tag2']
image: './image.png'
authors: ['author1', 'author2']
draft: false
---
```

## 页面修改
待补充...   
