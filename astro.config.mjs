// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: {
            zh: '卢东东工作室',
            en: 'LDD-Studio',
        },
        logo: {
            src: './src/assets/logo.svg',
          },
        social: {
                twitter: 'https://x.com/xjoylu',
                youtube: 'https://www.youtube.com/@xJoyLu',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        customCss: [
            // 你的自定义 CSS 文件的相对路径
            './src/css/style.css',
			// 你的 Tailwind 基础样式的相对路径
			'./src/css/tailwind.css',
          ],
		}), tailwind({
			// 禁用默认的基础样式
			applyBaseStyles: false,
		  })],
});