import { ComponentsView } from "../../componentsMVCTypes/componentsView";
import styles from "../../styles/blueButton.module.scss";

export class BlueButtonView implements ComponentsView {
  text: string;
  className?: string;

  constructor(text: string, className: string) {
    this.text = text;
    this.className = className;
  }

  render(): string {
    return `
        <button class="${styles.button} ${this.className}">
                <span>${this.text}</span>
        </button>
    `;
  }
}
