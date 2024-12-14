import { NavigatePanel } from "../../components/navigatePanel/NavigatePanel";
import { Correspondence } from "./components/correspondence/Сorrespondence";
import { Sidebar } from "./components/sidebar/Sidebar";
import styles from "./styles.module.scss";

export const Chat = () => {
  return `
    <!-- TODO: удалить после написания роутинга -->
    ${NavigatePanel()}
    <main class="${styles.chat}">
        ${Sidebar()}
        ${Correspondence()}
    </main>`;
};
