// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Shreyas Atre",
  tagline: "MSCS student @ LSU",
  url: "https://satacker.github.io",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: "https://avatars.githubusercontent.com/u/61797109?v=4",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SAtacker", // Usually your GitHub org/user name.
  projectName: "satacker.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/SAtacker/satacker.github.io/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.comSAtacker/satacker.github.io/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        logo: {
          alt: "Home",
          src: "https://avatars.githubusercontent.com/u/61797109?v=4",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/gsoc-log", label: "GSoC Log", position: "left" },
          { to: "/resume", label: "Resume", position: "left" },
          {
            href: "https://github.com/SAtacker",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Notes",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/SAtacker",
              },
            ],
          },
          {
            title: "Follow me",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/atreshreyas",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/shreyasOO7?s=08",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/atre.shreyas",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
