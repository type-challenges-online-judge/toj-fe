export const checkURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  return pattern.test(pathname);
};
