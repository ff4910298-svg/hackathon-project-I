import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI and Humanoid Robotics',
  tagline: 'Authoring the future of embodied intelligence with AI assistance.',
  favicon: 'img/favicon.ico',

  url: 'https://your-organization.github.io',
  baseUrl: '/',

  organizationName: 'your-organization',
  projectName: 'physical-ai-humanoid-robotics-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/your-organization/your-project-name/tree/main/frontend/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /* 🔥 FORCE DARK MODE */
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/your-organization/your-project-name',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book Sections',
          items: [
            {
              label: 'Foundations',
              to: '/docs/foundations/embodiment',
            },
            {
              label: 'Learning & Intelligence',
              to: '/docs/learning-and-intelligence/learning-paradigms',
            },
            {
              label: 'Core Systems',
              to: '/docs/core-systems/control-planning-and-locomotion',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-organization/your-project-name',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Physical AI and Humanoid Robotics Book Project.`,
    },

    prism: {
      theme: prismThemes.dracula, // fallback (won’t be used)
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  /* Tailwind CSS */
  plugins: [
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
