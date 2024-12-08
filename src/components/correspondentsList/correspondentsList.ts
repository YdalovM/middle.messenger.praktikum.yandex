import { CorespondenceItem } from "./components/correspondenceItem/CorrespondenceItem";
import styles from "./styles.module.scss";

export interface ICorespondenceList {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
}

export const CorespondentsList = (list: ICorespondenceList[]) => {
  return `
  <div class="${styles.correspondents_list}">
    ${list.map((correspondence) => CorespondenceItem(correspondence)).join("")}
  </div>
  `;
};
