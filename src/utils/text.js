export const limitAddress = (address) => {
  return [...address.slice(0, 40), "..."];
};
