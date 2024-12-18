import { Model } from "../../MVCTypes/model";

export class VerificationModel implements Model {
  data: string = "123";

  sendForm(form: HTMLFormElement): void {
    // поидее логика связанная с беком
    const formData = new FormData(form);
    console.log(formData.get("login"), formData.get("password"));
  }
}
