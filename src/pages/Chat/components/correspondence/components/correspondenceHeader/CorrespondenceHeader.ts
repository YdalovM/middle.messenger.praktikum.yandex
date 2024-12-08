import styles from "./styles.module.scss";

export const CorrespondenceHeader = (avatar: string, name: string) => {
  return `
        <header class="${styles.correspondence_header}">
            <div class="${styles.correspondence_header__opponent}">
                <div 
                    class="${styles.correspondence_header__opponent_avatar}">
                    ${avatar ? `<img src="${avatar}" />` : ""}
                </div>
                <span>${name}</span>
            </div>
            <div class="${styles.correspondence_header__setting}">
                <div class="${styles.dot}">.</div>
                <div class="${styles.dot}">.</div>
                <div class="${styles.dot}">.</div>
            </div>
        </header>
    `;
};
