import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '卢东东',
  description:
    '偷懒界翘楚',
  href: 'https://ldd.cc',
  author: 'xjoylu',
  locale: 'zh-CN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '博客',
  },
  {
    href: '/product',
    label: '产品',
  },
  {
    href: '/now',
    label: '现在',
  },
  {
    href: '/about',
    label: '关于',
  },
  {
    href: '/contact',
    label: '联系',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/xjoylu',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/xjoylu',
    label: 'Twitter',
  },
  {
    href: 'mailto:xjoylu@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
