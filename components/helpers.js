// use array to store bits to make it easier to access by index
export const dec2binArray = (dec) => {
  const converted = (dec >>> 0).toString(2);
  // add extra 0s to front if shorter than 8 bits
  return converted.length < 8
    ? ("0".repeat(8 - converted.length) + converted).split("")
    : converted.split("");
};

export const bin2dec = (bin) => parseInt(bin, 2);
