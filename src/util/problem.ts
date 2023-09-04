export const checkURL = (pathname: string) => {
  const pattern = /^\/(problem|submit)\/\d+/;
  console.log(pattern.test(pathname));
  return pattern.test(pathname);
};
