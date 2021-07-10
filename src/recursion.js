/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) { return null}
   if (n === 0) { return 1 }
   return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // if (array.length === 0) {return []}
  if (array.length === 0) {return 0}
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   var result = 0;
   if (!Array.isArray(array)) {result += array}
   for (var i = 0; i < array.length; i++){
     result = result + arraySum(array[i]);
   }
 return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (Math.abs(n) === 0) {return true}
  if (Math.abs(n) === 1){return false}
  return isEven(Math.abs(n) -2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
   if (n === 0) { return 0 }
   if ( n > 0 ) return n-1 + sumBelow(n-1);
   if ( n < 0 ) return n+1 + sumBelow(n+1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
   if ( x === undefined || y === undefined || x === y || x === y-1 || x === y + 1) {return []}
   if ( x < y-1 ) { return [x+1].concat(range(x+1,y)); }
   if ( x> y +1 ) { return [x-1].concat(range(x-1,y)); }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) { return 1; }
  else if ( exp > 0) { return base * exponent(base, exp - 1) }
  else { return (1/base) * exponent (base, exp + 1).toPrecision(10)}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  return n === 1 ? true : (n < 1 ? false : powerOfTwo(n/2));
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) { return ''; }
  if (string.length === 1) { return string; }
  return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/ /g, "").toLowerCase();
   var len = string.length
   if (string.length < 2) {return true}
   if (string[0] === string.slice(-1)) {
   return palindrome(string.slice(1, -1));
   }
   return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) { return NaN; }
  if (x < 0) { return -modulo(-x,  y); }
  if (y < 0) { return  modulo( x, -y); }
  if (x < y) { return  x; }
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) { return 0; }
  if (x < 0) { return x - multiply(-x,  y-1); }
  if (y < 0) { return  y - multiply(x -1, -y); }
  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if ( y === 0 ) { return NaN}
  if ( x === 0 ) {return 0}
  if (x === y) { return 1; }
  if (x < y ) {return 0}
  if (x < 0) { return -1 - divide(-x-y,  y); }
  if (y < 0) { return  -1 - divide(x + y, -y); }
  return  1+ divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
   if ( x < 0 || y < 0 ) { return null}
   if ( y === 0) { return x; }
   return gcd(y, x % y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
   if (str1.length === 0 && str2.length === 0) { return true}
   if ( str1[0] === str2[0]) {
   return compareStr(str1.slice(1), str2.slice(1));
   } else {return false}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) {return []}
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
if ( array.length === 0) { return []}
return [array.pop()].concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
if ( length === 0) { return []}
return [value].concat(buildList(value,length -1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if ( n === 0) { return []}
  result = result.concat(fizzBuzz(n-1), [n + '']);
  if (result.length === n) {
    for (var i = 0; i < n; i++) {
      if (result[i] % 15 === 0) { result[i] = 'FizzBuzz'}
      else if (result[i] % 3 === 0) { result[i] = 'Fizz'}
      else if (result[i] % 5 === 0) { result[i] = 'Buzz'}
    }
  }
  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
 if (array.length === 0) { return 0}
 if (array.shift() === value) {return 1 + countOccurrence(array, value)}
 else { return countOccurrence(array, value)}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  if (array.length === 0) {return []}
  result = result.concat(callback(array[0]), rMap(array.slice(1), callback));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  if ( Object.keys(obj).length === 0) {return 0}
  var count = 0;
  for (var item in obj) {
    if (item === key) {count ++}
    if (typeof(obj[item]) === 'object' && obj[item] !== null && !Array.isArray(obj[item]))
    {count = count + countKeysInObj(obj[item], key)}
  }
 return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if ( Object.keys(obj).length === 0) {return 0}
  var count = 0;
  for (var item in obj) {
    if (obj[item] === value) {count ++}
    if (typeof(obj[item]) === 'object' && obj[item] !== null && !Array.isArray(obj[item]))
    {count = count + countValuesInObj(obj[item], value)}
  }
 return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  if ( Object.keys(obj).length === 0) {return {}}
  for (var item in obj) {
    if (item === oldKey) {
      obj[newKey] = obj[item]; delete obj[item];
      if (typeof(obj[newKey]) === 'object' && obj[newKey] !== null && !Array.isArray(obj[newKey]))
      {replaceKeysInObj(obj[newKey], oldKey, newKey)}
    }
    if (typeof(obj[item]) === 'object' && obj[item] !== null && !Array.isArray(obj[item]))
    {replaceKeysInObj(obj[item], oldKey, newKey)}
  }
 return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n<=0) { return null; }
  if (n===1) { return [0, 1]; }
  else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n< 0) { return null; }
  if (n === 1)  { return 1};
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
   if (array.length === 0) { return []}
   return [array.shift().toUpperCase()].concat(capitalizeWords(array));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) { return []}
  var first = (array[0][0].toUpperCase() + array[0].slice(1));
  return [first].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
   if (Object.keys(obj).length === 0 ) { return 0}
   var sum = 0;
   for (var key in obj) {
     if (obj[key] % 2 === 0) {sum += obj[key]}
     if (typeof(obj[key]) === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
       sum = sum + nestedEvenSum(obj[key]);
     }
     }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  if (!Array.isArray(array)) {
    result.push(array)}
  for (var i = 0; i<array.length; i++){
  result = result.concat(flatten(array[i]))
  }
return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj || {};
  if ( str.length === 0) { return {}; }
  if (obj[str[0]]>=1) { obj[str[0]]++;}
  else { obj[str[0]] = 1;}
  letterTally(str.slice(1), obj);
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if ( list.length === 0) { return []}
  var result = [];
  if (list[0] !== list[1]) { result.push(list[0]); }
  result = result.concat(compress(list.slice(1)));
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (aug === undefined) {return array}
   if (array.length === 0) {return []}
   var result = [];
   result.push(array[0].concat(aug));
   result = result.concat(augmentElements(array.slice(1), aug));
   return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
 // if ( array.length === 0) { return []}
  if (array.length === 1) {return array}
  var result = [];
  if (array[0] !== 0 || array[0] !== array[1]) { result.push(array[0]); }
  return result.concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) { return []}
  var result = [];
  if ( array[0] >=0) { result.push( array[0]); }
  else { result.push(-array[0])}
  if ( array[1] >=0) { result.push(-array[1]); }
  else { result.push(array[1])}
  return result.concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) { return ''}
  var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var result = [];
  var arr = str.split(' ');
  if (parseInt(arr[0]) > 0 && parseInt(arr[0]) < 10) { result.push(words[arr[0]])}
  else { result.push(arr[0])}
  result = result.concat(numToText(arr.slice(1).join(' ')));
  return result.join(' ').trim();
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
   var node = node === undefined? document.body : node;
  if ( node === null ) { return 0; }
  var result = 0;
  if ( node.tagName && node.tagName.toLowerCase() === tag) { result++; }
     if (node.firstChild) {
      for ( var i = 0; i < node.children.length; i++) {
        var element = node.children[i];
        if ( !element.firstChild && element.tagName && element.tagName.toLowerCase() === tag) {
        result++;
        }
        if (element.firstChild) {
          result +=(tagCount(tag, element));
        }
      }
    }
 return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  if (array.length === 0 || target < array[0] || target > array[array.lenth-1]) {return null}
  var min = min || 0;
  var max = max || array.length - 1;
   if ( min > max) {return null}
   var mid = Math.floor((min + max)/2);
   if (array[min] === target) {return min}
    if (array[max] === target) {return max}
   if (array[mid] === target) { return mid;}
   else if (array[mid] > target) { return binarySearch(array, target, min, mid -1)}
   else { return binarySearch(array, target, mid + 1, max)}
};


// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    var len = array.length;
    if (len < 2) { return array;}
    var middle = Math.floor(len / 2),
      left = array.slice(0, middle),
      right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};
  var merge = function(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
  };

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (input === {} || input === undefined) { return {}}
  var output = {};
   var outarray = [];
   if (Array.isArray(input)) {
       for (var j = 0; j < input.length; j++) {
        if (typeof(input[j]) !== 'object') {outarray.push(input[j])}
        else { clone(input[j]) }
        }
    };

   for (var key in input) {
     if ( typeof(input[key]) !== 'object') {output[key] === input[key]}
     else { clone(input[key])}
   }
  if (outarray.length === 0) {return output}
  else {return outarray}
};
