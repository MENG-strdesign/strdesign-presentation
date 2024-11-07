import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaScriptの一生は戦争",
      icon: "laptop-code",
      prefix: "javascript/",
      link: "javascript/",
      children: "structure",
    },
  ],
});
