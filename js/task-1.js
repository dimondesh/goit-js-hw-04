function isEnoughCapacity(products, containerSize) {
  const itemAmount = Object.values(products);
  const containerSizeValue = Object.values(containerSize);
  let sumOfItems = 0;
  let ifItFIts;
  for (const num of itemAmount) {
    sumOfItems += num;
  }
  if (sumOfItems > containerSize) {
    ifItFIts = false;
  } else {
    ifItFIts = true;
  }
  return ifItFIts;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
