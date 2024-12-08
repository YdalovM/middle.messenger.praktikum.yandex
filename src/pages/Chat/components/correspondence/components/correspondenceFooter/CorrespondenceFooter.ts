import styles from "./styles.module.scss";
import clip from "../../../../../../../public/chat/clip.png";
import vector from "../../../../../../../public/chat/vector.png";

export const CorrespondenceFooter = () => {
  return `
        <footer class="${styles.footer}">
            <img src="${clip}" class="${styles.footer__clip}"/>
            <input type="text" class="${styles.footer__input}" placeholder="Сообщение"/>
            <button class="${styles.footer__send_message}" >
                <img src="${vector}">
            </button>
        </footer>
    `;
};