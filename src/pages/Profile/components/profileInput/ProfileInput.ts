import { IProfileInputsList } from "../profileInputsList/ProfileInputsList";

export const ProfileInput = ({ name, label, type }: IProfileInputsList) => {
  return `
    <div>
        <span>${label}</span>
        <input type="${type}" name="${name}">
    </div>
  `;
};
