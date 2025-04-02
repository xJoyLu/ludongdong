import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '卢东东',
  locale: 'zh-CN',
  description:
    '偷懒界翘楚',
  href: 'https://ldd.cc',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: '博客',
  },
  {
    href: '/authors',
    label: '作者',
  },
  {
    href: '/tags',
    label: '标签',
  },
  {
    href: '/about',
    label: '关于',
  },
  {
    href: '/contact',
    label: '联系',
  },
  {
    href: '/now',
    label: '现在',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/xjoylu',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/xjoylu',
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
