export const blockInvalidChar = (e: { key: string; preventDefault: () => any }): void => {
  ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
};
