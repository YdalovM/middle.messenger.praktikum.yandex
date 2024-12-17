export const addEventBySelector = (
  selector: string,
  callback: () => void,
  event: string = "click"
) => {
  setTimeout(() => {
    const elem = document.querySelector(`.${selector}`);
    if (!elem || !callback) return;

    elem.addEventListener(event, (e) => {
      e.preventDefault();

      callback();
    });
  });
};
