import clip from "../../../../../public/chat/clip.png";
import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import styles from "../styles/correspondenceFooter.module.scss";
import vector from "../../../../../public/chat/vector.png";

export class CorrespondenceFooterView implements ComponentsView {
  render(): string {
    return `
        <footer class="${styles.footer}">
            <img src="${clip}" class="${styles.footer__clip}" alt="отправить файл"/>
            <input type="text" class="${styles.footer__input}" placeholder="Сообщение" name="message"/>
            <button class="${styles.footer__send_message}" >
                <img
                    src="${vector}"
                    alt="стрелочка отправить"
                    class="${styles.footer__send_message__vector}"
                >
            </button>
        </footer>`;
  }
}
