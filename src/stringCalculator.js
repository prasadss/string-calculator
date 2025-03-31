function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = new RegExp(/,|\n/);
  if (numbers.startsWith("//")) {
    const [delimiterPrefix, remainderString] = numbers.split("\n");
    delimiter = delimiterPrefix.substring(2);
    numbers = remainderString;
  }

  const numArray = numbers.split(delimiter).map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
