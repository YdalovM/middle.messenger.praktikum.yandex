import { BlueButtonView } from "../../components/componentsViews/BlueButton/BlueButtonView";
import { NavigatePanelView } from "../../components/componentsViews/NavigatePanel/NavigatePanelView";
import { VERIFICATION_CONTENT } from "../../const";
import { View } from "../../MVCTypes/view";
import { VerificationInputsListView } from "./componentsView/VerificationInputsListView";
import styles from "./styles/verification.module.scss";
import { CustomLinkView } from "../../components/componentsViews/CustomLink/CustomLinkView";
import { IVerificationContent } from "../../types";
import { VerificationController } from "./VerificationController";

export class VerificationView implements View {
  controller: VerificationController;
  navigatePanel: NavigatePanelView;
  vereficationInputsList: VerificationInputsListView;
  blueButton: BlueButtonView;
  content: IVerificationContent;
  customLink: CustomLinkView;
  pathname: string;

  constructor() {
    this.controller = new VerificationController();
    this.navigatePanel = new NavigatePanelView();
    this.pathname = window.location.pathname;
    this.content = VERIFICATION_CONTENT[this.pathname];
    this.customLink = new CustomLinkView(
      this.content.link_path,
      this.content.link_text
    );
    this.vereficationInputsList = new VerificationInputsListView(
      this.content.inputs
    );
    this.blueButton = new BlueButtonView(
      this.content.button_text,
      styles.verification__card__form_button
    );
  }

  render(): string {
    return `
        <!-- TODO: удалить после написания роутинга -->
    ${this.navigatePanel.render()}
    <main class="${styles.verification}">
      <div class="${styles.verification__card}">
        <h1 class="${styles.verification__card_title}">${
      this.content.title
    }</h1>
        <form class="${styles.verification__card__form}">
            ${this.vereficationInputsList.render()}
            ${this.blueButton.render()}
        </form>
        ${this.customLink.render()}
      </div>
    </main>
        `;
  }
}
