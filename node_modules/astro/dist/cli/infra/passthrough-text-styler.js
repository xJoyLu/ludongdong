function createPassthroughTextStyler() {
  return {
    bgWhite: (msg) => msg,
    black: (msg) => msg,
    dim: (msg) => msg,
    green: (msg) => msg,
    bold: (msg) => msg,
    bgGreen: (msg) => msg
  };
}
export {
  createPassthroughTextStyler
};
