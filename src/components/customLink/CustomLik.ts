import { handleClickBySelector } from "../../hooks/handleClickBySelector";
import { navigate } from "../../navigate";
import { EPATHS } from "../../types/general";
import styles from "./styles.module.scss";

export const CustomLink = (link: EPATHS, text: string, className?: string) => {
  handleClickBySelector(styles.link, () => navigate(link));

  return `
    <div class="${styles.link} ${className}">
      <span>${text}</span>
    </div>
    `;
};
