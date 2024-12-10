import { SearchInput } from "../searchInput/searchInput";
import styles from "./styles.module.scss";

export const SidebarHeader = () => {
  return `
        <div class="${styles.header}">
          <span class="${styles.header_navigate}">Профиль ></span>
          ${SearchInput()}
        </div>
    `;
};
