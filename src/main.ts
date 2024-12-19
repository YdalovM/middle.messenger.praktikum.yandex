import { navigateToErrorPage, routers } from "./navigate.ts";
import { EERRORS } from "./types/general.ts";
import "./main.scss";

// точка входа в приложение создает нужный класс в зависимости от пути на котором ты находишься
export const render = async () => {
  let content = await routers();
  if (!content) content = await navigateToErrorPage(EERRORS.NOT_FOUND);
  content();
};

window.addEventListener("DOMContentLoaded", () => {
  render();
});
