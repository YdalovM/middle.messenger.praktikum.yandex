import styles from "./styles.module.scss";

export interface ICorespondenceItem {
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
}

export const CorespondenceItem = ({
  avatar,
  lastMessage,
  time,
  name,
}: ICorespondenceItem) => {
  return `
    <div class="${styles.item}">
      <div class="${styles.item_avatar}">
        ${avatar ? `<img src="${avatar}" alt="аватар">` : ""}
      </div>
      <div class="${styles.item_info}">
        <div class="${styles.item_info_name}">${name}</div>
        <div class="${styles.item_info_last_message}">${lastMessage}</div>
      </div>
      <div class="${styles.item_time}">${time}</div>
    </div>
  `;
};
