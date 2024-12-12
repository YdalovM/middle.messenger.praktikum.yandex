import { IVerificationInput } from "../../types";
import styles from "./styles.module.scss";

export const VerificationInput = ({
  type,
  placeholder,
  name,
}: IVerificationInput) => {
  return `
    <input 
        class="${styles.input}" 
        type="${type}" 
        placeholder="${placeholder}" 
        name="${name}"
    />
    `;
};
