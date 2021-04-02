const payload = { name: false, active: false, wrapper: true };
const className = (objData) => {
  const result = Object.entries(objData);
  const emptyArray = [];
  result.forEach((el) => {
    const className = el[0];
    const isShown = el[1];
    if (isShown) {
      emptyArray.push(className);
    }
  });

  return emptyArray.join(" ");

};
const myStr = className(payload);

console.log(myStr)
