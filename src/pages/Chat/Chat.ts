import { Correspondence } from "./components/correspondence/Сorrespondence";
import { Sidebar } from "./components/sidebar/Sidebar";
import styles from "./styles.module.scss";

export const Chat = () => {
  return `
    <div class="${styles.chat}">
        ${Sidebar()}
        ${Correspondence()}
    </div>`;
};
