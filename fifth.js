const getFibonacci = (element) => {
  if (element === 1) {
    return [0, 1];
  } else {
    let series = getFibonacci(element - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};
console.log(getFibonacci(6));
console.log("sum = " + getFibonacci(6).reduce((data, i) => data + i, 0));
