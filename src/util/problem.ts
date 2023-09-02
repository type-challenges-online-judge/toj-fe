export const checkURL = (pathname: string) => {
  const regex = /problem/g;
  const result = pathname.match(regex);

  if (result === null) {
    console.log(false);
    return false;
  }

  console.log(true);
  return true;
};
