import { IProfileInputsList } from "../profileInputsList/ProfileInputsList";
import styles from "./styles.module.scss";

export const ProfileInput = ({ name, label, type }: IProfileInputsList) => {
  return `
    <div>
        <span>${label}</span>
        <input type="${type}" name="${name}">
    </div>
  `;
};
