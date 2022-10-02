const waitMS = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

module.exports = { waitMS };
