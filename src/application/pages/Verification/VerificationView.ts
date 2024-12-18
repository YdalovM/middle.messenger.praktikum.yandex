import { BlueButtonView } from "../../components/componentsViews/BlueButton/BlueButtonView";
import { NavigatePanelView } from "../../components/componentsViews/NavigatePanel/NavigatePanelView";
import { VERIFICATION_CONTENT } from "../../const";
import { View } from "../../MVCTypes/view";
import { VerificationInputsListView } from "./componentsView/VerificationInputsListView";
import styles from "./styles/verification.module.scss";
import { CustomLinkView } from "../../components/componentsViews/CustomLink/CustomLinkView";
import { IVerificationContent } from "../../types";
import { VerificationController } from "./VerificationController";
import { Block } from "../../../core/Block";
import { EventBus } from "../../../core/EventBus";

export class VerificationView extends Block implements View {
  controller: VerificationController;
  navigatePanel: NavigatePanelView;
  vereficationInputsList: VerificationInputsListView;
  blueButton: BlueButtonView;
  content: IVerificationContent;
  customLink: CustomLinkView;
  pathname: string;
  eventBus: EventBus;

  constructor() {
    super();
    this.eventBus = new EventBus();
    this.controller = new VerificationController(this.eventBus);
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

  initialize() {
    this.init();
  }

  render(): string {
    debugger;
    console.log(this.navigatePanel);

    return `
      <!-- TODO: удалить после написания роутинга -->
      ${this.navigatePanel.render()}
      <main class="${styles.verification}">
        <div class="${styles.verification__card}">
          <h1 
            class="${styles.verification__card_title}">
            ${this.content.title}
          </h1>
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
