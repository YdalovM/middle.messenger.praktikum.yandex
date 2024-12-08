export const handleClickBySelector = (
  selector: string,
  callback: () => void
) => {
  setTimeout(() => {
    const elem = document.querySelector(`.${selector}`);
    if (!elem || !callback) return;

    elem.addEventListener("click", () => callback());
  });
};
