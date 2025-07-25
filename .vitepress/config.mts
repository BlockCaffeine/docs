import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BlockCaffeine",
  description: "BlockCaffeine Documentation",
  // base: '/docs/', // Uncomment if using blockcaffeine.github.io/docs/
  srcDir: 'docs',
  cleanUrls: true,
  vite: {
    publicDir: '../public'
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/docs/blockcaffeine.ico'
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Hardware',
        items: [
          { text: 'Raspberry PI', link: '/hardware/raspberry-pi' },
          { text: 'Jura Coffee Machine', link: '/hardware/jura-coffee-machine' }
        ]
      },
      {
        text: 'Software',
        items: [
          { text: 'Cafereum', link: '/software/cafereum' },
          { text: 'EspressOS', link: '/software/espressos' },
          { text: 'Jurassip', link: '/software/jurassip' },
          { text: 'Anteiku', link: '/software/anteiku' },
          { text: 'Infrastructure', link: '/software/infrastructure' },
        ]
      },
      {
        text: 'Metamask',
        link: '/metamask'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlockCaffeine' }
    ],
     
    logo: {
      src: 'blockcaffeine.webp',
      alt: 'BlockCaffeine Logo'
    },

    editLink: {
      pattern: 'https://github.com/blockcaffeine/docs/edit/main/docs/:path',
    },

    search: {
      provider: 'local',
    }
  }
})
