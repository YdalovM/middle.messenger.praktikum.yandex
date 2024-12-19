import styles from "../../styles/correspondenceItem.module.scss";
import { IcorrespondenceItem } from "../../types";
import { ComponentsView } from "../../componentsMVCTypes/componentsView";

export class correspondenceItem implements ComponentsView {
  avatar?: string;
  lastMessage: string;
  time: string;
  name: string;

  constructor({ avatar, lastMessage, time, name }: IcorrespondenceItem) {
    this.avatar = avatar;
    this.lastMessage = lastMessage;
    this.time = time;
    this.name = name;
  }

  render(): string {
    return `
        <div class="${styles.item}">
            <div class="${styles.item_avatar}">
                ${this.avatar ? `<img src="${this.avatar}" alt="аватар">` : ""}
            </div>
            <div class="${styles.item_info}">
                <div class="${styles.item_info_name}">${this.name}</div>
                <div 
                    class="${styles.item_info_last_message}">
                    ${this.lastMessage}
                </div>
            </div>
            <div class="${styles.item_time}">${this.time}</div>
        </div>
    `;
  }
}
