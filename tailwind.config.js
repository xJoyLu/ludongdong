import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 你喜欢的强调色。Indigo 是最接近 Starlight 默认的。
        accent: colors.indigo,
        // 你喜欢的灰色。Zinc 是最接近 Starlight 默认的。
        gray: colors.zinc,
      },
      fontFamily: {
        sans: [
          'Noto Sans CJK SC', // 菩提黑体
          'Microsoft YaHei', // 微软雅黑
          'Arial', // 英文备用字体
          'sans-serif'
        ],
        serif: [
          'Source Han Serif', // 思源宋体
          'Georgia', // 衬线字体
          'serif'
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        custom: [ // 自定义字体族，用于特定情况
          'Noto Sans CJK SC', // 菩提黑体
          'Arial', // 英文备用字体
          'sans-serif'],
		cursor: {
		  'browse': "url('/assets/active-cursor-small.png'), auto",
		  'click': "url('/assets/normal-cursor-small.png'), pointer",
		},
      },
    },
  },
  variants: {
	cursor: ['hover'], // 使自定义光标支持 hover 状态
  },
  plugins: [starlightPlugin()],
};