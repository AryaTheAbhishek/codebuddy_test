function replaceVowels(element) {
  return element.replace(/[aeiou]/gi, (data, i) => i + 1);
}
console.log(replaceVowels("Elie"));
