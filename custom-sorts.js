function ageSort(users) {
  // Your code here
  function sortByAge(a, b) {
    return a.age - b.age;
  }

  return users.sort(sortByAge);
}

function oddEvenSort(arr) {
  // Your code here
  function sortOddsEven(a, b) {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  }

  return arr.sort(sortOddsEven);
}

function validAnagrams(s, t) {
  // Your code here
  const sArr = s.split('');
  const tArr = t.split('');

  return sArr.sort().join('') === tArr.sort().join('');
}

function reverseBaseSort(arr) {
  // Your code here
  function baseSort(a, b) {
    let aBase = String(a).length;
    let bBase = String(b).length;

    if(aBase === bBase) {
      return a - b;
    } else {
      return bBase - aBase;
    }
  }
  
  return arr.sort(baseSort);
}

function frequencySort(arr) {
  // Your code here
  const memo = {};

  frequencies(arr, memo);

  function freqSort(a, b) {
    if(memo[a] === memo[b]) return b - a;
    return memo[a] - memo[b];
  }

  return arr.sort(freqSort);
}

function frequencies(arr, memo) {
  arr.forEach(el => {
    if(el in memo) {
      memo[el]++;
    } else {
      memo[el] = 1;
    }
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];