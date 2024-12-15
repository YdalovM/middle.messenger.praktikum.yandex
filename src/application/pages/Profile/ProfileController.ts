import { Controller } from "../../MVCTypes/controller";
import { ProfileModel } from "./ProfileModel";

export class ProfileController implements Controller {
  model: ProfileModel;

  constructor() {
    this.model = new ProfileModel();
  }
}
