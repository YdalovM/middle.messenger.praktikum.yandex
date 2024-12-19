import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import styles from "../styles/correspondenceHeader.module.scss";

export class CorrespondenceHeaderView implements ComponentsView {
  avatar: string;
  name: string;

  constructor(avatar: string, name: string) {
    this.avatar = avatar;
    this.name = name;
  }

  render(): string {
    return `
        <header class="${styles.correspondence_header}">
            <div class="${styles.correspondence_header__opponent}">
                <div
                    class="${styles.correspondence_header__opponent_avatar}">
                    ${
                      this.avatar
                        ? `<img src="${this.avatar}" alt="аватар"/>`
                        : ""
                    }
                </div>
                <span>${this.name}</span>
            </div>
            <div class="${styles.correspondence_header__setting}">
                <div class="${styles.dot}">.</div>
                <div class="${styles.dot}">.</div>
                <div class="${styles.dot}">.</div>
            </div>
        </header>
    `;
  }
}
