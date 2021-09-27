/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Shreyas Atre",
  tagline: "Learning forever",
  url: "https://satacker.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://avatars.githubusercontent.com/u/61797109?v=4",
  organizationName: "SAtacker", // Usually your GitHub org/user name.
  projectName: "satacker.github.io", // Usually your repo name.
  themeConfig: {
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
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Notes",
        },
        {
          to: "https://satacker.github.io/WasmEdge/",
          label: "PyWasmEdge",
          position: "left",
        },
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
            {
              label: "Linear-Algebra",
              to: "/docs/linear-algebra/introduction",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/SAtacker/satacker.github.io/edit/main/docs/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
