import { templator } from "./templator";

export const renderTemplate = (content: (value?: any) => void) => {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return console.error("App не проинициализирован");

  const template = templator(content);
  app.innerHTML = template;
};
