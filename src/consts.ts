export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '卢东东',
  DESCRIPTION:
    '偷懒界翘楚',
  EMAIL: 'xjoylu@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://ldd.cc',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: '博客' },
  { href: '/authors', label: '作者' },
  { href: '/tags', label: '标签' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
  { href: '/now', label: '现在' }, 
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/xjoylu', label: 'GitHub' },
  { href: 'https://x.com/xjoylu', label: 'Twitter' },
  { href: 'xjoylu@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]