import { NavigatePanelView } from "../../components/componentsViews/NavigatePanel/NavigatePanelView";
import { TEXT_ERRORS_LIST } from "../../const";
import { View } from "../../MVCTypes/view";
import { IErrors } from "../../types";
import { ErrorsControler } from "./ErrorsControler";
import styles from "./styles/errors.module.scss";

export class ErrorsView implements View {
  controller: ErrorsControler;
  navigatePanel: NavigatePanelView;
  error: string;
  errorCode: string;
  TEXT_ERROR?: IErrors;

  constructor() {
    this.controller = new ErrorsControler();
    this.navigatePanel = new NavigatePanelView();
    this.error = window.location.pathname;
    this.errorCode = this.error.slice(1);
    this.TEXT_ERROR = TEXT_ERRORS_LIST.get(this.errorCode);
  }

  render(): string {
    return `
        <!-- TODO: удалить после написания роутинга -->
        ${this.navigatePanel.render()}
        <main class="${styles.error} ${styles[this.errorCode]}">
            <h1 class="${styles.error_title}">${this.TEXT_ERROR?.title}</h1>
            <span 
                class="${styles.error_description}">
                ${this.TEXT_ERROR?.text}
            </span>
            <span class="${styles.error_link}">Назад к чатам</span>
        </main>
        `;
  }
}
