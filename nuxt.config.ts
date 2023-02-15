// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap",
        },
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
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
