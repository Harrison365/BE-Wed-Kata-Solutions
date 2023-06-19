const createRef = (arr, key = "name", value = "phoneNumber") => {
  const returnObj = {};
  arr.forEach((element) => {
    returnObj[element[key]] = element[value];
  });
  return returnObj;
};

module.exports = createRef;
