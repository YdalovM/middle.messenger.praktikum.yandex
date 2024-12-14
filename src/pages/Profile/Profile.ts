import styles from "./styles.module.scss";
import { NavigatePanel } from "../../components/navigatePanel/NavigatePanel";
import { ProfileSidebar } from "./components/profileSidebar/ProfileSidebar";
import { ProfileInputsList } from "./components/profileInputsList/ProfileInputsList";
import { PROFILE_INPUTS, PROFILE_PASSWORDS_INPUTS } from "./const";

export const Profile = () => {
  return `
    <!-- TODO: удалить после написания роутинга -->
    ${NavigatePanel()}
    <main class="${styles.profile}">
        ${ProfileSidebar()}
        <div class="${styles.profile__container}">
            <input
                type="file"
                name="avatar"
                class="${styles.profile__container_avatar}"
            />

            ${ProfileInputsList(PROFILE_INPUTS)}
            ${ProfileInputsList(PROFILE_PASSWORDS_INPUTS)}
        </div>
    </main>
  `;
};
