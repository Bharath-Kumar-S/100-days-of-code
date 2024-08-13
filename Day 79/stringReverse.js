const reverseString = (str) => {
  //basecase
  if (str.length < 2 || !str || typeof str !== "string") return str;
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
