const findUniqueElements = (arr) =>
  arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element));

console.log(findUniqueElements([1, 1, 2, 3]));
