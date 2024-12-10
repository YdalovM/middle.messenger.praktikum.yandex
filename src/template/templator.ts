export const templator = (content: (value?: any) => void) => {
  return `${content()}`;
};
