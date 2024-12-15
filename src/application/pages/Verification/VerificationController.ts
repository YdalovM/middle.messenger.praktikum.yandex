import { Controller } from "../../MVCTypes/controller";
import { VerificationModel } from "./VerificationModel";

export class VerificationController implements Controller {
  model: VerificationModel;

  constructor() {
    this.model = new VerificationModel();
  }
}
