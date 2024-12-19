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
  // !!избаваиться от статики потому что это не правильный подход!!

  static navigatePanel: NavigatePanelView = new NavigatePanelView();

  static content: IVerificationContent =
    VERIFICATION_CONTENT[window.location.pathname];

  static vereficationInputsList: VerificationInputsListView =
    new VerificationInputsListView(VerificationView.content.inputs);

  static blueButton: BlueButtonView = new BlueButtonView(
    VerificationView.content.button_text,
    styles.verification__card__form_button
  );

  // нужно поченить что бы я мог обращаться к этой переменной в функции render через this
  customLink: CustomLinkView;

  controller: VerificationController;
  eventBus: EventBus;

  constructor() {
    super();
    this.eventBus = new EventBus();
    this.controller = new VerificationController(this.eventBus);
    this.customLink = new CustomLinkView(
      VerificationView.content.link_path,
      VerificationView.content.link_text
    );

    // функция инициализации в которой происходит рендер
    this.init();
  }

  // невидимая переменная
  abc = 1;

  render(): string {
    // в рендере к слову он не просто не видит значение переменных, он прото не видит атрибуты класса

    console.log(this.abc); // abc не существует

    return `
      <!-- TODO: удалить после написания роутинга -->
      ${VerificationView.navigatePanel.render()}
      <main class="${styles.verification}">
        <div class="${styles.verification__card}">
          <h1 
            class="${styles.verification__card_title}">
            ${VerificationView.content.title}
          </h1>
          <form class="${styles.verification__card__form}">
              ${VerificationView.vereficationInputsList.render()}
              ${VerificationView.blueButton.render()}
          </form>
          <!-- показывает что она undefine хотя в теории если эта функция вызывается и она не статичиская я предпологая что класс создан, а значит конструктор должен отработать  -->
          ${this.customLink.render()}
        </div>
      </main>
    `;
  }
}
