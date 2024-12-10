import { CorespondentsList } from "../../../../components/correspondentsList/correspondentsList";
import { CORRESPONDENCE_LIST } from "../../const";
import { SidebarHeader } from "./components/sidebarHeader/SidebarHeader";
import styles from "./styles.module.scss";

export const Sidebar = () => {
  return `
        <div class="${styles.sidebar}">
            ${SidebarHeader()}
            ${CorespondentsList(CORRESPONDENCE_LIST)}
        </div>
    `;
};
