import { NavigatePanelView } from "../../components/componentsViews/NavigatePanel/NavigatePanelView";
import { PROFILE_INPUTS, PROFILE_PASSWORDS_INPUTS } from "../../const";
import { View } from "../../MVCTypes/view";
import { ProfileInputsListView } from "./componentsView/ProfileInputsListView";
import { ProfileSidebarView } from "./componentsView/ProfileSidebarView";
import { ProfileController } from "./ProfileController";
import styles from "./styles/profile.module.scss";

export class ProfileView implements View {
  controller: ProfileController;
  navigatePanel: NavigatePanelView;
  profileSidebar: ProfileSidebarView;
  profileInputsList?: ProfileInputsListView;

  constructor() {
    this.controller = new ProfileController();
    this.navigatePanel = new NavigatePanelView();
    this.profileSidebar = new ProfileSidebarView();
  }

  render(): string {
    return `
        <!-- TODO: удалить после написания роутинга -->
        ${this.navigatePanel.render()}
        <main class="${styles.profile}">
            ${this.profileSidebar.render()}
            <div class="${styles.profile__container}">
                <input
                    type="file"
                    name="avatar"
                    class="${styles.profile__container_avatar}"
                />

                ${new ProfileInputsListView(PROFILE_INPUTS).render()}
                ${new ProfileInputsListView(PROFILE_PASSWORDS_INPUTS).render()}
            </div>
        </main>
    `;
  }
}
