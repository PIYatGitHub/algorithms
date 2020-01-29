//same arrays --my solution
function sameSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let sum1 = arr1.reduce((a, b) => a + b * b);
  let sum2 = arr2.reduce((a, b) => a + b);
  return sum1 === sum2;
}

console.log(
  "[sameSquared arrays function]:",
  sameSquared([1, 3, 2, 4, 8], [64, 4, 1, 4, 16])
);

//same arrays --alt solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(
  "[same arrays function]:",
  same([1, 3, 2, 4, 8], [64, 4, 1, 4, 16])
);

//anagrams --my solution
function anagrams(word1, word2) {
  if (!word1.length || !word2.length || word2.length !== word1.length)
    return false;
  let sum_word1 = word1
    .split("")
    .map(item => item.charCodeAt(0))
    .reduce((a, b) => a + b);
  let sum_word2 = word2
    .split("")
    .map(item => item.charCodeAt(0))
    .reduce((a, b) => a + b);
  return sum_word1 === sum_word2;
}

console.log("[anagrams func]:", anagrams("ktgryeh", "ktgryeh"));

//anagrams --alt solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
console.log("[validAnagrams func]:", validAnagram("anagrams", "nagarams"));
