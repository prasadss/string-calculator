function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = new RegExp(/,|\n/);
  if (numbers.startsWith("//")) {
    const [delimiterPrefix, remainderString] = numbers.split("\n");
    delimiter = delimiterPrefix.substring(2);
    numbers = remainderString;
  }

  const numArray = numbers.split(delimiter).map(Number);
  const negatives = numArray.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
