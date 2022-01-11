const number = [1, 3, 4, 6, 7, 8];
const oddNumber = number.filter((element) => {
  return element % 2 != 0;
});
console.log(oddNumber);
