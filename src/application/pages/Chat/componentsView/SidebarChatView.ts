import styles from "../styles/sidebar.module.scss";
import { SidebarChatHeaderView } from "./SidebarChatHeaderView";
import { CORRESPONDENCE_LIST } from "../../../const";
import { CorrespondenceListView } from "../../../components/componentsViews/CorrespondenceList/CorrespondentsListView";

export class SidebarChatView {
  sidebarChatHeader: SidebarChatHeaderView;
  correspondenceList: CorrespondenceListView;

  constructor() {
    this.sidebarChatHeader = new SidebarChatHeaderView();
    this.correspondenceList = new CorrespondenceListView(CORRESPONDENCE_LIST);
  }

  render(): string {
    return `
        <div class="${styles.sidebar}">
            ${this.sidebarChatHeader.render()}
            ${this.correspondenceList.render()}
        </div>
      `;
  }
}
