import { IVerificationInput } from "../../types";
import { VerificationInput } from "../verificationInput/verificationInput";

export const VerificationInputsList = (inputs: Array<IVerificationInput>) => {
  return `
        ${inputs.map((input) => VerificationInput(input)).join("")}
    `;
};
