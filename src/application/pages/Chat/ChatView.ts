import { NavigatePanelView } from "../../components/componentsViews/NavigatePanel/NavigatePanelView";
import { View } from "../../MVCTypes/view";
import { ChatController } from "./ChatController";
import { CorrespondenceView } from "./componentsView/CorrespondenceView";
import { SidebarChatView } from "./componentsView/SidebarChatView";
import styles from "./styles/chat.module.scss";

export class ChatView implements View {
  controller: ChatController;
  navigatePanel: NavigatePanelView;
  sidebar: SidebarChatView;
  correspondence: CorrespondenceView;

  constructor() {
    this.controller = new ChatController();
    this.navigatePanel = new NavigatePanelView();
    this.sidebar = new SidebarChatView();
    this.correspondence = new CorrespondenceView();
  }

  render(): string {
    return `
      <!-- TODO: удалить после написания роутинга -->
      ${this.navigatePanel.render()}
      <main class="${styles.chat}">
        ${this.sidebar.render()}
        ${this.correspondence.render()}
      </main>`;
  }
}
