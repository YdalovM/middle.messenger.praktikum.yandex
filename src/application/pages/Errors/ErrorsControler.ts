import { Controller } from "../../MVCTypes/controller";
import { ExrrorsModel } from "./ErrorsModel";

export class ErrorsControler implements Controller {
  model: ExrrorsModel;

  constructor() {
    this.model = new ExrrorsModel();
  }
}
