import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import { IProfileInput } from "../../../types";
import { ProfileInputView } from "./ProfileInputView";

export class ProfileInputsListView implements ComponentsView {
  inputs: IProfileInput[];

  constructor(inputs: IProfileInput[]) {
    this.inputs = inputs;
  }

  render(): string {
    return `
        <div>
            ${this.inputs
              .map((input) => new ProfileInputView(input).render())
              .join("")}
        </div>
    `;
  }
}
