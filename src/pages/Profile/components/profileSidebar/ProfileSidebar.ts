import styles from "./styles.module.scss";
import vector from "../../../../../public/chat/vector.png";

export const ProfileSidebar = () => {
  return `
    <div class="${styles.sidebar}">
      <div class="${styles.sidebar__button}">
        <img src="${vector}" alt="стрелочка назад" class="${styles.sidebar__button_img}" />
      </div>
    </div>
  `;
};
