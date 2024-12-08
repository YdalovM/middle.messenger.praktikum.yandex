import { VerificationInputsList } from "./components/verificationInputsList/verificationInputsList";
import { VERIFICATION_CONTENT } from "./const";
import styles from "./styles.module.scss";
import { BlueButton } from "../../components/button/BlueButton";
import { CustomLink } from "../../components/customLink/CustomLik";

export const Verification = () => {
  const pathname = window.location.pathname;

  const { title, button_text, link_text, link_path, inputs } =
    VERIFICATION_CONTENT[pathname];

  const isTypeVerificationLogin = link_path === "/login";

  const handelClickVerefication = (isLogin: boolean, e?: Event) => {
    e?.preventDefault();
    if (isLogin) {
      return console.log("Вошел");
    }

    return console.log("Зарегался");
  };

  return `
    <div class="${styles.verification}">
      <div class="${styles.verification__card}">
        <h1 class="${styles.verification__card_title}">${title}</h1>
        <form class="${styles.verification__card__form}">
            ${VerificationInputsList(inputs)}
            ${BlueButton(
              button_text,
              () => handelClickVerefication(isTypeVerificationLogin, event),
              styles.verification__card__form_button
            )}
        </form>
        ${CustomLink(link_path, link_text)}
      </div>
    </div>
  `;
};
