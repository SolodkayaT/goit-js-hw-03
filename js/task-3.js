function findBestEmployee(employees) {
  const keys = Object.keys(employees);
  let max = 0;
  let key = 0;
  for (let i = 0; i < keys.length; i += 1) {
    if (employees[keys[i]] > max) {
      max = employees[keys[i]];
      key = i;
    }
  }
  return `${keys[key]}: ${employees[keys[key]]}`;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
