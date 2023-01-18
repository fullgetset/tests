const validateValue = (value) => {
  if (value < 10 || value > 20) {
    return false;
  }

  return true;
};

module.exports = validateValue;
