import { Controller } from "../../MVCTypes/controller";
import { VerificationModel } from "./VerificationModel";

export class VerificationController implements Controller {
  model: VerificationModel;

  constructor() {
    this.model = new VerificationModel();
  }

  sendForm(formSelector: string): void {
    const form = document.querySelector(`.${formSelector}`) as HTMLFormElement;

    if (!form) return;
    console.log(new FormData(form));
  }
}
