const oddNumber = (element) => {
  let max = 0;
  element.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};
console.log(oddNumber([1, 3, 4, 6, 7, 8, 2, 5]));
