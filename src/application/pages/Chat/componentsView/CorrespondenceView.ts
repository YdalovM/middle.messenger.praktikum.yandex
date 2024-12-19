import { ComponentsView } from "../../../components/componentsMVCTypes/componentsView";
import styles from "../styles/correspondence.module.scss";
import { CorrespondenceFooterView } from "./CorrespondenceFooterView";
import { CorrespondenceHeaderView } from "./CorrespondenceHeaderView";

export class CorrespondenceView implements ComponentsView {
  correspondenceHeader: CorrespondenceHeaderView;
  correspondenceFooter: CorrespondenceFooterView;

  constructor() {
    this.correspondenceHeader = new CorrespondenceHeaderView("", "Андрей");
    this.correspondenceFooter = new CorrespondenceFooterView();
  }

  render(): string {
    return `
        <div class="${styles.correspondence}">
            ${this.correspondenceHeader.render()}
            correspondence
            ${this.correspondenceFooter.render()}
        </div>`;
  }
}
