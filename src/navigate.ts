import { ChatView } from "./application/pages/Chat/ChatView";
import { ErrorsView } from "./application/pages/Errors/ErrorsView";
import { ProfileView } from "./application/pages/Profile/ProdileView";
import { VerificationView } from "./application/pages/Verification/VerificationView";
import { render } from "./main";
import { EERRORS, EPATHS } from "./types/general";

const ROUTERS: Record<string, () => string> = {
  "/": () => new ChatView().render(),
  "/login": () => new VerificationView().render(),
  "/register": () => new VerificationView().render(),
  "/server_error": () => new ErrorsView().render(),
  "/not_found": () => new ErrorsView().render(),
  "/profile": () => new ProfileView().render(),
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
