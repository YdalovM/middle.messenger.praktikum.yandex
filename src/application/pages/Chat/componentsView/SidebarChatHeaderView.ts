import styles from "../styles/sidebarHeader.module.scss";
import { SearchInputView } from "./SearchInputView";

export class SidebarChatHeaderView {
  searchInput: SearchInputView;

  constructor() {
    this.searchInput = new SearchInputView();
  }

  render(): string {
    return `
        <div class="${styles.header}">
          <span class="${styles.header_navigate}">Профиль ></span>
          ${this.searchInput.render()}
        </div>
    `;
  }
}
