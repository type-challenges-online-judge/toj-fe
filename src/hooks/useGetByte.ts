const useGetByte = (code: string) => {
  let byteLength = 0;

  for (let i = 0; i < code.length; i++) {
    const charCode = code.charCodeAt(i);

    if (charCode >> 11 !== 0) {
      byteLength += 3;
    } else if (charCode >> 7 !== 0) {
      byteLength += 2;
    } else {
      byteLength += 1;
    }
  }

  return byteLength;
};

export default useGetByte;
