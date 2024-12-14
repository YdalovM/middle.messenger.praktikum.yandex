export const templator = (content: () => void) => {
  return `${content()}`;
};
