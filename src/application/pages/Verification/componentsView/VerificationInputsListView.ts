import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import { IVerificationInput } from "../../../types";
import { VerificationInputView } from "./VerificationInputView";

export class VerificationInputsListView implements ComponentsView {
  inputs: IVerificationInput[];

  constructor(inputs: IVerificationInput[]) {
    this.inputs = inputs;
  }

  render(): string {
    return `
        ${this.inputs
          .map((input) => new VerificationInputView(input).render())
          .join("")}
    `;
  }
}
