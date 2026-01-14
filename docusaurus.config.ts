import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TaskMe Documentation',
  tagline: 'Practical guides and references',
  favicon: 'img/favicon.ico',
  
  future: {
    v4: true,
  },
  
  themes: ['docusaurus-theme-openapi-docs'],

  url: 'https://docs-taskme.netlify.app',
  baseUrl: '/',
  
  organizationName: 'vitaliyoskalenko',
  projectName: 'taskme',
  
  onBrokenLinks: 'throw',
  
  // i18n configuration with Ukrainian
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      uk: {
        label: 'Українська',
        direction: 'ltr',
        htmlLang: 'uk-UA',
      },
    },
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api', 
        docsPluginId: 'classic',
        config: {
          taskme: {
            specPath: 'specs/taskme-openapi.yaml',
            outputDir: 'docs/api',
            sidebarOptions: {
              groupPathsBy: 'tag', 
              // categoryLinkProperties: { ... }      // optional
            },
            // version: '1.0.0',             // ← add later for versioning
            // proxy: 'https://cors.isomorphic-git.org/', // optional for try-it-out
          },
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
        href: '/docs/category/n8n',
      },
      items: [
        // Language dropdown
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/vitaliyoskalenko/taskme',
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
              label: 'n8n Integration',
              to: '/docs/category/n8n',
            },
            {
              to: '/docs/category/taskme-api',
              label: 'TaskMe API',
              position: 'left',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DKEFafKy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} O.S.K Vision`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;