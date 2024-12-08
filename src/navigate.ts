import { render } from "./main";
import { Chat } from "./pages/Chat/Chat";
import { Error } from "./pages/Errors/Errors";
import { Verification } from "./pages/Verefication/Verification";

import { EERRORS, EPATHS } from "./types/general";

const ROUTERS: Record<string, () => string> = {
  "/": Chat,
  "/login": () => Verification(),
  "/register": () => Verification(),
  "/server_error": Error,
  "/not_found": Error,
};

export const routers = async () => {
  const pathname = await window.location.pathname;

  return ROUTERS[pathname];
};

export const navigateToErrorPage = (error: EERRORS) => {
  history.pushState(null, "", error);
  return routers();
};

export const navigate = (path: EPATHS) => {
  history.pushState(null, "", path);
  render();
};
