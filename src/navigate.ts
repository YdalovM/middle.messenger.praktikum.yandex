import { ChatView } from "./application/pages/Chat/ChatView";
import { ErrorsView } from "./application/pages/Errors/ErrorsView";
import { render } from "./main";
import { Profile } from "./pages/Profile/Profile";
import { Verification } from "./pages/Verefication/Verification";

import { EERRORS, EPATHS } from "./types/general";

const ROUTERS: Record<string, () => string> = {
  "/": () => new ChatView().render(),
  "/login": () => Verification(),
  "/register": () => Verification(),
  "/server_error": () => new ErrorsView().render(),
  "/not_found": () => new ErrorsView().render(),
  "/profile": () => Profile(),
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
