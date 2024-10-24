import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/strdesign-presentation/",

  lang: "zh-CN",
  title: "ストラプレゼン",
  description: "ストラプレゼン｜vuepress-theme-hope",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
