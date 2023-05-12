import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetAttributify,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: ["Inter:400,500,600,700"],
      },
    }),
  ],
  shortcuts: {
    link: "flex items-center gap-x-1 text-gray-300 hover:text-white transition-all duration-75 text-xl",
  },
  theme: {
    colors: {
      primary: {
        light: "#ffffff",
        dark: "rgb(31 41 55)",
      },
      text: {
        light: "#ffffff",
        dark: "rgb(31 41 55)",
      },
    },
  },
});
