import { ProfileInput } from "../profileInput/ProfileInput";

export interface IProfileInputsList {
  type: string;
  label: string;
  name: string;
}
export const ProfileInputsList = (inputs: Array<IProfileInputsList>) => {
  return `
    <div>
     ${inputs.map((input) => ProfileInput(input)).join("")}
    </div>
  `;
};
