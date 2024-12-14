import { templator } from "./templator";

export const renderTemplate = (content: () => void) => {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) throw new Error("App не проинициализирован");

  const template = templator(content);
  app.innerHTML = template;
};
