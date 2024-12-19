import styles from "../styles/searchInput.module.scss";
import search from "../../../../../public/chat/search.png";

export class SearchInputView {
  render(): string {
    return `
      <div class="${styles.search}">
        <img src="${search}" alt="лупа">
        <input type="text" class="${styles.search_input}" placeholder="Поиск"/>
      </div>
    `;
  }
}
