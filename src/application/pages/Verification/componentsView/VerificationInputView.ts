import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import { IVerificationInput } from "../../../types";
import styles from "../styles/verificationInput.module.scss";

export class VerificationInputView implements ComponentsView {
  type: string;
  placeholder: string;
  name: string;

  constructor({ type, placeholder, name }: IVerificationInput) {
    this.type = type;
    this.placeholder = placeholder;
    this.name = name;
  }

  render(): string {
    return `
        <input
            class="${styles.input}"
            type="${this.type}"
            placeholder="${this.placeholder}"
            name="${this.name}"
        />
    `;
  }
}
