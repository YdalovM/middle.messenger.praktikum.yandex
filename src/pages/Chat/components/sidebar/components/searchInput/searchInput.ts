import search from "../../../../../../../public/chat/search.png";
import styles from "./styles.module.scss";

export const SearchInput = () => {
  return `
    <div class="${styles.search}">
        <img src="${search}" alt="лупа">
        <input type="text" class="${styles.search_input}" placeholder="Поиск"/>
    </div>
    `;
};
