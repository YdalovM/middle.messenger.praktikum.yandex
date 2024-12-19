import { ComponentsView } from "../../componentsMVCTypes/componentsView";
import styles from "../../styles/navigatePanel.module.scss";

export class NavigatePanelView implements ComponentsView {
  render(): string {
    return `
        <nav class="${styles.panel}">
            <ul class="${styles.panel__links_list}">
                <li class="${styles.link}"><a href="/">Чат</a></li>
                <li class="${styles.link}"><a href="/login">Логин</a></li>
                <li class="${styles.link}"><a href="/register">Регистрация</a></li>
                <li class="${styles.link}"><a href="/profile">Профиль</a></li>
                <li class="${styles.link}"><a href="/not_found">404</a></li>
                <li class="${styles.link}"><a href="/server_error">500</a></li>
            </ul>
        </nav>
    `;
  }
}
