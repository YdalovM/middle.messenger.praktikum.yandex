import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import { IProfileInput } from "../../../types";

export class ProfileInputView implements ComponentsView {
  label: string;
  type: string;
  name: string;

  constructor({ label, type, name }: IProfileInput) {
    this.label = label;
    this.type = type;
    this.name = name;
  }

  render(): string {
    return `
        <div>
            <span>${this.label}</span>
            <input type="${this.type}" name="${this.name}">
        </div>
    `;
  }
}
