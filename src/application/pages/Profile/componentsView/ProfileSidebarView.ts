import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import vector from "../../../../../public/chat/vector.png";
import styles from "../styles/profileSidebar.module.scss";

export class ProfileSidebarView implements ComponentsView {
  render(): string {
    return `
        <div class="${styles.sidebar}">
            <div class="${styles.sidebar__button}">
                <img src="${vector}" alt="стрелочка назад" class="${styles.sidebar__button_img}" />
            </div>
        </div>
    `;
  }
}
