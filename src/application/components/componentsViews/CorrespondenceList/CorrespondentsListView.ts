import { ComponentsView } from "../../componentsMVCTypes/componentsView";
import { IcorrespondenceList } from "../../types";
import styles from "../../styles/correspondenceList.module.scss";
import { correspondenceItem } from "./CorrespondeceItemView";

export class CorrespondenceListView implements ComponentsView {
  list: IcorrespondenceList[];
  corespondenseItem?: correspondenceItem;

  constructor(list: IcorrespondenceList[]) {
    this.list = list;
  }

  render(): string {
    return `
    <div class="${styles.correspondents_list}">
        ${this.list
          .map((correspondence) =>
            new correspondenceItem(correspondence).render()
          )
          .join("")}
    </div>`;
  }
}
