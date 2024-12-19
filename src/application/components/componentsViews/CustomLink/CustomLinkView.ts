import { ComponentsView } from "../../componentsMVCTypes/componentsView";
import styles from "../../styles/customLink.module.scss";

export class CustomLinkView implements ComponentsView {
  text: string;
  className?: string;

  constructor(text: string, className: string) {
    this.text = text;
    this.className = className;
  }

  render(): string {
    return `
        <div class="${styles.link} ${this.className}">
            <span>${this.text}</span>
        </div>
    `;
  }
}
