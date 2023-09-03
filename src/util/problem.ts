export const checkURL = (pathname: string) => {
  const regex = /problem/g;
  const result = pathname.match(regex);

  if (result === null) {
    return false;
  }

  return true;
};
