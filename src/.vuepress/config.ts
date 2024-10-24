import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/strdesign-presentation/",

  lang: "ja-JP",
  title: "",
  description: "ストラプレゼン｜vuepress-theme-hope",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
