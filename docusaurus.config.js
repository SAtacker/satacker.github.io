/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Shreyas Atre",
  tagline: "Learning forever",
  url: "https://satacker.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SAtacker", // Usually your GitHub org/user name.
  projectName: "satacker.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Home",
      logo: {
        alt: "Home",
        src: "img/logo.svg",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/gsoc-log", label: "GSoC Log", position: "left" },
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Docs",
        // },
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
          title: "Docs",
          items: [
            {
              label: "Tutorial",
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
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
      },
    ],
  ],
};
