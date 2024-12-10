import { handleClickBySelector } from "../../hooks/handleClickBySelector";
import styles from "./styles.module.scss";

export const BlueButton = (
  text: string,
  calback: () => void,
  className?: string
) => {
  handleClickBySelector(styles.button, calback);

  return `
        <button class="${styles.button} ${className}">
            <span>${text}</span>
        </button>
    `;
};
