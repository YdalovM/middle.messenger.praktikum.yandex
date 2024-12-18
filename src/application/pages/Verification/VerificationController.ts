import { EventBus } from "../../../core/EventBus";
import { addEventBySelector } from "../../../hooks/addEventBySelector";
import { Controller } from "../../MVCTypes/controller";
import { VerificationModel } from "./VerificationModel";
import verifiSelectors from "./styles/verification.module.scss";

export class VerificationController implements Controller {
  model: VerificationModel;
  eventBus: EventBus;

  constructor(eventBus: EventBus) {
    this.eventBus = eventBus;
    this.model = new VerificationModel();
  }

  init() {
    this.eventBus.on("sendForm", this.sendForm.bind(this));

    addEventBySelector(verifiSelectors.verification__card__form_button, () =>
      this.eventBus.emit("sendForm", [verifiSelectors.verification__card__form])
    );
  }

  sendForm(formSelector: string): void {
    const form = document.querySelector(`.${formSelector}`) as HTMLFormElement;

    if (!form) return;
    this.model.sendForm(form);
  }
}
