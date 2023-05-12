// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      title: "Alisher Usmonov",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Frontend Developer",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://alisher.netlify.app",
        },
        {
          name: "og:title",
          content: "Alisher Usmonov",
        },
        {
          name: "og:description",
          content: "Frontend Developer",
        },
        {
          name: "og:image",
          content: "/avatar.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://alisher.netlify.app/",
        },
        {
          name: "twitter:title",
          content: "Alisher Usmonov",
        },
        {
          name: "twitter:description",
          content: "Frontend Developer",
        },
        {
          name: "og:image",
          content: "/avatar.png",
        },
      ],
    },
  },
});
