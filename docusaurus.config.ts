import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Documentation',
  tagline: 'Practical guides and references',
  favicon: 'img/favicon.ico',

  // Recommended: enable v4 compatibility mode
  future: {
    v4: true,
  },

  url: 'https://your-site-name.netlify.app',      // ← CHANGE THIS!
  baseUrl: '/',

  // Important for GitHub Pages / Netlify / Vercel
  organizationName: 'your-username',              // ← CHANGE THIS!
  projectName: 'your-docs-repo',                  // ← CHANGE THIS!

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Optional: remove if you don't want "Edit this page" links
          // editUrl: 'https://github.com/your-username/your-repo/tree/main/',
        },
        // Blog completely disabled
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // You can replace with your own image later
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',   // ← make sure this matches your sidebars.ts
          position: 'left',
          label: 'Documentation',
        },
        // Blog removed here
        // You can add more items later, example:
        // { to: '/about', label: 'About', position: 'left' },
        {
          href: 'https://github.com/your-username/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/your-server', // ← optional
            },
          ],
        },
        // Blog link removed from footer
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Your Name / Company`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;