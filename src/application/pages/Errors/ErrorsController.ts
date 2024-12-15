import { Controller } from "../../MVCTypes/controller";
import { ExrrorsModel } from "./ErrorsModel";

export class ErrorsController implements Controller {
  model: ExrrorsModel;

  constructor() {
    this.model = new ExrrorsModel();
  }
}
