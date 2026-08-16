import { defineJaadConfig } from "@lancher-dev/jaad";

export default defineJaadConfig({
  site: "https://omadeb.omakasui.org",

  title: "Omadeb",
  description: "A modern, elegant, development-focused setup for Debian.",
  lang: "en",

  docsDir: "./docs",
  routeBase: "/manual",

  theme: "tokyo-night",
  appearance: "dark",

  nav: [
    { label: "Manual", href: "/manual" },
    { label: "More", href: "https://omakasui.org" },
  ],

  // The git remote is this website, not the product it documents.
  social: { github: "https://github.com/omakasui/omadeb" },

  ogImage: "/og-image.png",
  editLink: true,
  footer: `© ${new Date().getFullYear()} Luca Pattocchio (Kasui)`,

  head: [
    {
      tag: "link",
      attrs: {
        rel: "stylesheet",
        href: "https://www.nerdfonts.com/assets/css/webfont.css",
      },
    },
    {
      tag: "link",
      attrs: {
        rel: "icon",
        href: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
    },
    {
      tag: "link",
      attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    },
  ],
});
