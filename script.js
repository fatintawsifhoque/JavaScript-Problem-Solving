//Problem- > 1 => Print numbers from 1 to 10 in the console.
function printNum() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNum();

//Problem- > 2 => Given an array [2, 4, 6, 8, 10], calculate and print the sum of all its elements using a for loop.
function sumOfAnArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfAnArray([2, 4, 6, 8, 10]);

//Problem- > 3 => Print only the even numbers from 1 to 20 in the console.
function evenNumFrom1to20() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumFrom1to20();

//Problem- > 4 => Print the multiplication table of 5 from 1 to 10.
function multipliciatinTable() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
}
multipliciatinTable();

//Problem- > 5 => Print numbers from 1 to 100 divisible by 3
function divisibleby3() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}
divisibleby3();

/*Problem- > 6 => Write a function checkNumber(n) that prints:

"Positive" if the number is greater than 0,
"Negative" if the number is less than 0,
"Zero" if the number is exactly 0. */
function checkNumber(n) {
  if (n > 0) {
    console.log(`This is a positive number.`);
  } else if (n < 0) {
    console.log(`This is a negative number.`);
  } else {
    console.log(`This is zero.`);
  }
}
checkNumber(0);

/*Problem- > 7 => Write a function isEvenOrOdd(num) that prints:

"Even" if the number is even,
"Odd" if the number is odd. */
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`This is an even number.`);
  } else {
    console.log(`This is a odd number.`);
  }
}
isEvenOrOdd(1134);

/*Problem- > 8 => Write a function checkAge(age) that prints:

"Child" if age is less than 13,
"Teenager" if age is between 13 and 19 (inclusive),
"Adult" if age is 20 or more.
 */
function checkAge(age) {
  if (age < 13) {
    console.log(`Child`);
    return;
  }
  if (age >= 13 && age <= 19) {
    console.log(`Teenager`);
    return;
  }
  if (age >= 20) {
    console.log(`Adult`);
    return;
  }
}
checkAge(20);

/*Problem- > 9 => Write a function gradeCalculator(marks) that prints the grade based on marks:

"A" if marks ≥ 80
"B" if marks ≥ 60 and < 80
"C" if marks ≥ 40 and < 60
"F" if marks < 40 */
function gradeCalculator(marks) {
  if (marks > 100) {
    console.log(`Invalid input.`);
    return;
  }
  if (marks >= 80 && marks <= 100) {
    console.log(`You have got "A".`);
    return;
  }
  if (marks >= 60 && marks < 80) {
    console.log(`You have got "B".`);
    return;
  }
  if (marks >= 40 && marks < 60) {
    console.log(`You have got "C".`);
    return;
  }
  if (marks < 40) {
    console.log(`You have got "F".`);
    return;
  }
}
gradeCalculator(40);

/*Problem- > 10 => Write a function compareNumbers(a, b) that prints:

"a is greater" if a > b,
"b is greater" if b > a,
"Both are equal" if a == b. */
function compareNumbers(a, b) {
  if (a > b) {
    console.log(`A is greater than B.`);
  } else if (b > a) {
    console.log(`B is greater than A.`);
  } else {
    console.log(`Both are equal.`);
  }
}
compareNumbers(100, 20);

/*Problem- > 11 => Write a function sumEvenNumbers(limit) that:

Takes a number limit (e.g., 10)
Uses a for loop to go from 1 to limit
Adds only the even numbers
Prints the total sum */
function sumEvenNumbers(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
}
sumEvenNumbers(10);

/*Problem- > 12 => Count Vowels in a Word (Hardcoded)
Write a function countVowels() that:

Checks each character in the word "javascript" (hardcode this word)
Uses a for loop to go through each letter (use charAt(i))
Counts how many are vowels (a, e, i, o, u) — use if...else
Prints the total count */
function countVowels(word) {
  let count = 0;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("JAVASCRIPT");

/*Problem- > 13 => Print FizzBuzz (Classic!)
Write a function fizzBuzz() that:

Loops from 1 to 100
For each number:
If divisible by 3 and 5, print "FizzBuzz"
Else if divisible by 3, print "Fizz"
Else if divisible by 5, print "Buzz"
Else, print the number */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

/*Problem- > 14 => Find Largest Number in a Range
Write a function findLargest(start, end) that:

Loops from start to end (inclusive)
Finds the largest number that is divisible by 7 in that range
If none found, prints "No number divisible by 7"
Otherwise, prints the number */
function findLargest(start, end) {
  for (let i = end; i >= start; i--) {
    if (i % 7 === 0) {
      console.log(i);
      return;
    }
  }
  console.log("No number divisible by 7");
}

findLargest(1, 7);

/*Problem- > 15 => Write a function checkPassword(password) that:

Uses a loop to count characters manually (without .length)
If count ≥ 8 → "Strong password"
Else → "Weak password" */
function checkPassword(password) {
  count = 0;
  let passwords = password.split("");
  passwords.forEach((element) => {
    count++;
  });
  if (count >= 8) {
    console.log("Strong Password");
  } else {
    console.log("Weak Password.");
  }
}
checkPassword("Fatinkkk");

/*Problem- > 16 => Print Numbers from 1 to N
Write a function printNumbers(n) that uses a while loop to print numbers from 1 to n (inclusive).

Example:
printNumbers(5) →
1
2
3
4
5 
 */
function printNumbers(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}
printNumbers(5);

/*Problem- > 17 => Write a function sumNatural(n) that uses a while loop to calculate and print the sum of numbers from 1 to n.

Formula: 1 + 2 + 3 + ... + n
Example:
sumNatural(4) → 10 (because 1+2+3+4 = 10)  */
function sumNatural(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
}
sumNatural(4);

/*Problem- > 18 =>  Reverse a Number
Write a function reverseNumber(num) that uses a while loop to reverse the digits of a positive integer and print the result.

Example:
reverseNumber(123) → 321
reverseNumber(4567) → 7654  */
function reverseNumber(num) {
  let reversed = "";
  let nums = num.toString();
  let lastIndex = nums.length - 1;
  while (lastIndex >= 0) {
    reversed += nums[lastIndex];
    lastIndex--;
  }

  console.log(Number(reversed));
}
reverseNumber(123);

/*Problem- > 19 => Count Digits in a Number
Write a function countDigits(num) that uses a while loop to count how many digits are in a positive integer and print the count.

Example:
countDigits(123) → 3
countDigits(5) → 1
countDigits(1000) → 4  */
function countDigits(num) {
  let count = 0;
  let nums = num.toString();
  let lastIndex = nums.length - 1;
  while (lastIndex >= 0) {
    count++;
    lastIndex--;
  }

  console.log(count);
}
countDigits(123);

/*Problem- > 20 => Power of Two Checker
Write a function isPowerOfTwo(n) that uses a while loop to check if a number n is a power of 2 (like 1, 2, 4, 8, 16, 32, ...).

If n is a power of 2, print "Yes"
Otherwise, print "No"  */
function isPowerOfTwo(n) {
  if (n <= 0) {
    console.log("No");
    return;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      console.log("No");
      return;
    }
    n /= 2;
  }
  console.log("Yes");
}

isPowerOfTwo(1);

/*Problem- > 21 => Write a function makeUpper(str) that takes a string and returns it in all uppercase letters.

Example:
makeUpper("hello") → "HELLO"
makeUpper("JavaScript") → "JAVASCRIPT"*/
function makeUpper(str) {
  let upperStr = str.toUpperCase();
  console.log(upperStr);
}
makeUpper("helle");

/*Problem- > 22 => Check if Word Contains "script"
Write a function hasScript(word) that checks if the word contains "script" (case-insensitive).

If yes, print "Found!"
If no, print "Not found."
Example:
hasScript("JavaScript") → "Found!"
hasScript("Python") → "Not found."  */
function hasScript(word) {
  word = word.toLowerCase();
  let match = "script";
  if (word.includes(match)) {
    console.log("Found!");
  } else {
    console.log("Not found.");
  }
}
hasScript("scrip");

/*Problem- > 23 => Get First and Last Character
Write a function firstAndLast(str) that prints the first and last character of a string.

Example:
firstAndLast("hello") → "h" and "o"
firstAndLast("a") → "a" and "a"
firstAndLast("")  */
function firstAndLast(str) {
  let first = str.charAt(0);
  let last = str.charAt(str.length - 1);
  if (str !== "") {
    console.log(`"${first}" and "${last}"`);
  } else {
    console.log("Empty");
  }
}
firstAndLast("");

/*Problem- > 24 => Remove Extra Spaces
Write a function cleanSpace(str) that removes extra spaces from the beginning and end of a string and prints the result.

Example:
cleanSpace(" hello world ") → "hello world"   */
function cleanSpace(str) {
  let withoutSapce = str.trim();
  console.log(withoutSapce);
}
cleanSpace("  lk    ");

/*Problem- > 25 => Check if Palindrome (Simple)
Write a function isPalindrome(word) that checks if a word is the same forwards and backwards (case-insensitive).

Use only string methods (no loop!)
If yes, print "Palindrome"
If no, print "Not Palindrome"
Example:
isPalindrome("madam") → "Palindrome"
isPalindrome("hello") → "Not Palindrome"
isPalindrome("Mom") → "Palindrome" ✅   */
function palindrome(str) {
  str = str.toLowerCase();
  let reversed = str.split("").reverse().join("");

  if (reversed === str) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}
palindrome("ata");

/*Problem- > 26 => Count Vowels (Case-Insensitive)
Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string (case-insensitive) and prints the count.

Example:
countVowels("Hello") → 2
countVowels("JAVASCRIPT") → 3 */
function countVowel(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowel("Hello");

/*Problem- > 27 => Sum of Digits in a Number
Write a function sumOfDigits(n) that calculates the sum of all digits in a positive integer using a while loop.

Example:
sumOfDigits(123) → 1 + 2 + 3 = 6
sumOfDigits(505) → 5 + 0 + 5 = 10  */
function sumOfDigits(n) {
  n = n.toString();
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  console.log(sum);
}
sumOfDigits(123);

/*Problem- > 28 => Find the Largest Digit in a Number
Write a function largestDigit(n) that finds and prints the largest digit in a positive integer.

Example:
largestDigit(123) → 3
largestDigit(509) → 9
largestDigit(7) → 7  */
function largestDigit(n) {
  n = n.toString();
  let largest = "0";
  for (let i = 0; i < n.length; i++) {
    if (n[i] > largest) {
      largest = n[i];
    }
  }
  console.log(Number(largest));
}
largestDigit(123);

/*Problem- > 29 => Check if Number is Prime
Write a function isPrime(n) that checks if a number is prime.

If prime, print "Prime"
Otherwise, print "Not Prime"
Example:
isPrime(7) → "Prime"
isPrime(10) → "Not Prime" */
function isPrime(n) {
  if (n <= 1) {
    console.log("Not Prime");
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("Not Prime");
      return;
    }
  }
  console.log("Prime");
}
isPrime();

/*Problem- > 30 => Repeat String N Times
Write a function repeatString(str, n) that prints the string str repeated n times without using .repeat().

Example:
repeatString("hi", 3) → hihihi  */
function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
}
repeatString("hi", 2);

/*Problem- > 31 => Print All Elements
Write a function printArray(arr) that prints all elements of an array using a for loop.  */
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([1, 2, 3]);

/*Problem- > 32 => Sum of Array Elements
Write a function sumArray(arr) that calculates and prints the sum of all numbers in an array.

Example:
sumArray([2, 4, 6]) → 12  */
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumArray([2, 4, 6]);

/*Problem- > 33 => Find Largest Number
Write a function findLargest(arr) that finds and prints the largest number in an array.

Example:
findLargest([3, 7, 2, 9]) → 9   */
function findLargest(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return;
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

findLargest([3, 7, 2, 9]); // 9 ✅

/*Problem- > 34 => Add New Element
Write a function addElement(arr, newItem) that adds newItem to the end of the array and prints the updated array.

Example:
addElement([1, 2], 3) → [1, 2, 3]  */
function addElement(arr, newItem) {
  arr.push(newItem);
  console.log(arr);
}
addElement([1, 2], 3);

/*Problem- > 35 => Check if Element Exists
Write a function checkElement(arr, target) that checks if target exists in the array.

If yes, print "Found"
If no, print "Not Found"  */
function checkElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("Found");
      return;
    }
  }
  console.log("Not Found");
}
checkElement([10, 20, 30], 20);

/*Problem- > 36 => Count Even Numbers
Write a function countEven(arr) that counts how many even numbers are in the array and prints the count.

Example:
countEven([1, 2, 3, 4, 5]) → 2
countEven([10, 15, 20]) → 2  */
function countEven(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}
countEven([1, 2, 3, 4, 5]);

/*Problem- > 37 => Reverse an Array (Without Built-in Methods)
Write a function reverseArray(arr) that creates a new array with elements in reverse order and prints it.
Do not use .reverse().

Example:
reverseArray([1, 2, 3]) → [3, 2, 1]
reverseArray(["a", "b", "c"]) → ["c", "b", "a"]   */
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  console.log(reversedArray);
}
reverseArray([1, 2, 3]);

/*Problem- > 38 => Find Index of Element
Write a function findIndex(arr, target) that finds and prints the first index of target in the array.

If not found, print -1.
Example:
findIndex([10, 20, 30], 20) → 1
findIndex([10, 20, 30], 50) → -1   */
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(i);
    }
  }
  console.log(-1);
}
findIndex([10, 20, 30], 20);

/*Problem- > 39 => Remove Last Element
Write a function removeLast(arr) that removes the last element from the array and prints the updated array.
Do not use .pop().

Example:
removeLast([1, 2, 3]) → [1, 2]
removeLast(["apple", "banana"]) → ["apple"]   */
function removeLast(arr) {
  let updatedArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    updatedArr.push(arr[i]);
  }
  console.log(updatedArr);
}
removeLast([1, 2, 3]);

/*Problem- > 40 =>Check if Array is Empty
Write a function isEmpty(arr) that checks if the array is empty.

If empty, print "Empty"
Otherwise, print "Not Empty"
Example:
isEmpty([]) → "Empty"
isEmpty([1, 2]) → "Not Empty"  */
function isEmpty(arr) {
  if (arr.length === 0) {
    console.log("Empty");
  } else {
    console.log("Not Empty");
  }
}
isEmpty([]);

/*Problem- > 41 => Find Smallest Number
Write a function findSmallest(arr) that finds and prints the smallest number in the array.

Example:
findSmallest([5, 2, 8, 1]) → 1
findSmallest([-3, -1, -7]) → -7   */
function findSmallest(arr) {
  let small = arr[0];
  for (el of arr) {
    if (el < small) {
      small = el;
    }
  }
  console.log(small);
}
findSmallest([5, 2, 8, 1]);

/*Problem- > 42 => Filter Even Numbers
Write a function filterEven(arr) that creates a new array with only the even numbers and prints it.

Example:
filterEven([1, 2, 3, 4, 5]) → [2, 4]
filterEven([10, 15, 20]) → [10, 20]  */
function filterEven(arr) {
  let evenArr = [];
  arr.forEach((el) => {
    if (el % 2 == 0) {
      evenArr.push(el);
    }
  });
  console.log(evenArr);
}
filterEven([10, 11, 12, 13, 14]);

/*Problem- > 43 => Check if All Numbers are Positive
Write a function allPositive(arr) that checks if all numbers in the array are positive.

If yes, print "All Positive"
Otherwise, print "Not All Positive"
Example:
allPositive([1, 2, 3]) → "All Positive"
allPositive([1, -2, 3]) → "Not All Positive"   */
function allPositive(arr) {
  let result = arr.every((el) => el > 0);
  console.log(result ? "All positive" : "Not All Positive");
}
allPositive([1, -2, 3]);

/*Problem- > 44 => Join Array Elements into a String
Write a function joinArray(arr) that joins all elements of the array into a single string (without using .join()) and prints it.

Example:
joinArray(["a", "b", "c"]) → "abc"
joinArray([1, 2, 3]) → "123" */
function joinArray(arr) {
  let str = "";
  for (el of arr) {
    str += el;
  }
  console.log(str);
}
joinArray([1, 2, 3]);

/*Problem- > 45 => Find Duplicate Elements
Write a function findDuplicates(arr) that finds and prints all duplicate elements in the array.

If no duplicates, print "No Duplicates"
Example:
findDuplicates([1, 2, 2, 3, 4, 4]) → [2, 4]
findDuplicates([1, 2, 3]) → "No Duplicates" */
function findDuplicates(arr) {
  const duplicates = arr
    .filter((item, index) => arr.indexOf(item) !== index)
    .filter((item, index, self) => self.indexOf(item) === index);
  console.log(duplicates.length ? duplicates : "No Duplicates");
}
findDuplicates([1, 2, 2, 3, 4, 4]);

/*Problem- > 46 => Add to Front and Back
Write a function addElements(arr, front, back) that:

Adds front to the beginning of the array
Adds back to the end of the array
Prints the updated array */
function addElements(arr, front, back) {
  arr.unshift(front);
  arr.push(back);
  console.log(arr);
}
addElements([2, 3], 1, 4);

/*Problem- > 47 => Remove First and Last
Write a function removeElements(arr) that:

Removes the first element
Removes the last element
Prints the updated array */
function removeElement(arr) {
  arr.pop();
  arr.shift();
  console.log(arr);
}
removeElement([1, 2, 3, 4]);

/*Problem- > 48 => Check and Find
Write a function checkAndFind(arr, target) that:

Checks if target exists using .includes()
If yes, prints its index using .indexOf()
If no, prints "Not Found"*/
function checkAndFind(arr, target) {
  if (arr.includes(target)) {
    console.log(arr.indexOf(target));
  } else {
    console.log("Not Found");
  }
}
checkAndFind([10, 20, 30], 20);
checkAndFind([10, 20, 30], 50);

/*Problem- > 49 => Create Comma-Separated String
Write a function createString(arr) that joins array elements with commas and prints the string.

Example:
createString(["apple", "banana", "cherry"]) → "apple,banana,cherry"  */
function createString(arr) {
  let newArr = arr.join(",");
  console.log(newArr);
}
createString(["apple", "banana", "cherry"]);

/*Problem- > 50 =>Safe Pop
Write a function safePop(arr) that:

If array is not empty, removes and prints the last element
If array is empty, prints "Array is empty" */
function safePop(arr) {
  if (arr.length == 0) {
    console.log("Array is empty.");
    return;
  }
  let updatedpop = arr.pop();
  console.log(updatedpop);
}
safePop([1, 2, 3]);
safePop([]);

/*Problem- > 51 => Double Each Number
Write a function doubleNumbers(arr) that uses .map() to return a new array with each number doubled.

Example:
doubleNumbers([1, 2, 3]) → [2, 4, 6]  */
function doubleNumbers(arr) {
  let doubleArr = arr.map((el) => el * 2);
  console.log(doubleArr);
}
doubleNumbers([1, 2, 3]);

/*Problem- > 52 => Get Positive Numbers
Write a function getPositives(arr) that uses .filter() to return a new array with only positive numbers.

Example:
getPositives([-1, 2, -3, 4]) → [2, 4] */
function getPositive(arr) {
  let filterArr = arr.filter((el) => el > 0);
  console.log(filterArr);
}
getPositive([-1, 2, 3, 4, -5]);

/*Problem- > 53 => Sum Using Reduce
Write a function sumWithReduce(arr) that uses .reduce() to calculate and print the sum of all numbers.

Example:
sumWithReduce([1, 2, 3]) → 6 */
function sumWithReduce(arr) {
  let sum = arr.reduce((acc, cr) => acc + cr, 0);
  console.log(sum);
}
sumWithReduce([1, 2, 3]);

/*Problem- > 54 => Extract Middle Elements
Write a function middleElements(arr) that uses .slice() to return a new array with all elements except the first and last.

Example:
middleElements([1, 2, 3, 4]) → [2, 3]
middleElements([10, 20]) → []  */
function middleElements(arr) {
  let middleEle = arr.slice(1, arr.length - 1);
  console.log(middleEle);
}
middleElements([1, 2, 3, 4]);

/*Problem- > 55 => Insert and Remove
Write a function modifyArray(arr) that:

Uses .splice() to remove the element at index 1
Then inserts "x" and "y" at index 1
Prints the updated array
Example:
modifyArray([1, 2, 3, 4]) → [1, "x", "y", 3, 4] */
function modifyArray(arr) {
  let modifyArr = arr.splice(1, 1, "x", "y");
  console.log(arr);
}
modifyArray([1, 2, 3, 4]);

/*Problem- > 56 => Sort Numbers
Write a function sortNumbers(arr) that sorts an array of numbers in ascending order using .sort().

Example:
sortNumbers([3, 1, 4, 2]) → [1, 2, 3, 4]  */
function sortNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);

  console.log(sortedArr);
}
sortNumbers([3, 1, 10, 6, 60, 4, 2]);

/*Problem- > 57 => Flatten Deep Array
Write a function flattenDeep(arr) that flattens a deeply nested array using .flat(Infinity).

Example:
flattenDeep([1, [2, [3, [4]]]]) → [1, 2, 3, 4]  */
function flattenDeep(arr) {
  let upArr = arr.flat(Infinity);
  console.log(upArr);
}
flattenDeep([1, [2, [3, [4]]]]);

/*Problem- > 58 => Check if Any Even
Write a function hasEven(arr) that uses .some() to check if the array has any even number.

If yes, print "Has Even"
Otherwise, print "No Even"
Example:
hasEven([1, 3, 5]) → "No Even"
hasEven([1, 2, 3]) → "Has Even"  */
function hasEven(arr) {
  if (arr.some((el) => el % 2 == 0)) {
    console.log("Has Even.");
  } else {
    console.log("No Even");
  }
}
hasEven([1, 5, 3]);

/*Problem- > 59 => Get Last Element Safely
Write a function getLast(arr) that uses .at(-1) to get the last element.

If array is empty, print "Empty array"
Example:
getLast([10, 20, 30]) → 30
getLast([]) → "Empty array"  */
function getLast(arr) {
  if (arr.length === 0) {
    console.log("Empty array");
  } else {
    const last = arr.at(-1);
    console.log(last);
  }
}
getLast([10, 20, 30]);
getLast([]);

/*Problem- > 60 => Swap Two Variables
Write a function swap(a, b) that swaps two values using array destructuring and returns the swapped values.

Example:
swap(1, 2) → [2, 1] */
function swap(a, b) {
  [a, b] = [b, a];
  console.log([a, b]);
}
swap(1, 2);

/*Problem- > 61 => Get First and Rest
Write a function firstAndRest(arr) that uses destructuring to get the first element and the rest of the array, then prints both.

Example:
firstAndRest([10, 20, 30]) →
First: 10
Rest: [20, 30]  */
function firstAndRest(arr) {
  let [first, ...rest] = arr;
  console.log(first);
  console.log(rest);
}
firstAndRest([10, 20, 30]);

/*Problem- > 62 => Skip Middle
Write a function that takes an array and returns a new array with only the first and last elements.

If the array has only one element, return an array with that element twice.
If the array is empty, return an empty array. */
function skipMiddile(arr) {
  let newArr = [];

  if (arr.length == 0) {
    console.log(newArr);
  } else if (arr.length == 1) {
    newArr.push(arr[0]);
    newArr.push(arr[0]);
  } else {
    newArr.push(arr[0]);
    newArr.push(arr[arr.length - 1]);
  }
  console.log(newArr);
}
skipMiddile([1, 2, 3, 4, 5]);
skipMiddile(["a"]);
skipMiddile([]);

/*Problem- > 63 => Find User by ID
Write a function that takes an array of user objects and an ID.

If a user with that ID exists, print the user object */
function userID(id) {
  let users = [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" },
  ];
  for (user of users) {
    if (user.id == id) {
      console.log(user);
      return;
    }
  }
  console.log("User not found");
}
userID(2);

/*Problem- > 64 => Safe Array Access
Write a function that takes an array and an index.

If the index is valid (within the array bounds), print the element at that index
Otherwise, print "Invalid index" */
function safeArrayAccess(arr, ind) {
  if (ind >= 0 && ind < arr.length) {
    console.log(arr[ind]);
  } else {
    console.log("Invalid index");
  }
}
safeArrayAccess([10, 20, 30], 1);
safeArrayAccess([10, 20, 30], 5);
safeArrayAccess([], 0);
safeArrayAccess([10, 20], -1);

/*Problem- > 65 => Unique Elements
Write a function that takes an array and returns a new array with only the unique elements */
function uniqueEle(arr) {
  let uniqueArr = [];
  arr.forEach((el) => {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  });
  console.log(uniqueArr);
}
uniqueEle([1, 2, 2, 3, 4, 4, 5]);
uniqueEle(["a", "b", "a"]);
uniqueEle([1]);
uniqueEle([]);

/*Problem- > 66 => Group by Length
Write a function that takes an array of strings and groups them by their length.
Return an object where keys are string lengths and values are arrays of strings with that length. */
function groupByLength(arr) {
  let result = {};

  arr.forEach((word) => {
    let len = word.length;
    if (result[len]) {
      result[len].push(word);
    } else {
      result[len] = [word];
    }
  });

  console.log(result);
}
groupByLength(["a", "bb", "ccc", "dd"]);
groupByLength(["x", "y"]);
groupByLength(["hello", "hi"]);

/*Problem- > 67 => Write a function that takes an array of numbers and returns a new array where each number is replaced by "Even" if it's even or "Odd" if it's odd. */
function arrEvenOdd(arr) {
  let result = [];
  arr.forEach((el) => {
    if (el % 2 === 0) {
      result.push("Even");
    } else {
      result.push("Odd");
    }
  });
  return result;
}
console.log(arrEvenOdd([1, 2, 3, 4]));

/*Problem- > 68 => Write a function that takes a string and returns true if it's a palindrome (reads the same forwards and backwards), otherwise false.
Ignore case (case-insensitive). */
function checkPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(checkPalindrome("Madam"));

/*Problem- > 69 => Print Each Word in Uppercase */

function printWordUpperCase(arr) {
  arr.forEach((el) => {
    console.log(el.toUpperCase());
  });
}
printWordUpperCase(["hello", "world"]);

/*Problem- > 70 => Second Largest Number
Write a function that takes an array of numbers and returns the second largest number.

If there's no second largest, return null. */
function secondLargest(arr) {
  if (arr.length < 2) {
    console.log(null);
    return;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  arr.forEach((el) => {
    if (el > largest) {
      secondLargest = largest;
      largest = el;
    } else if (el < largest && el > secondLargest) {
      secondLargest = el;
    }
  });

  if (secondLargest === -Infinity) {
    console.log(null);
  } else {
    console.log(secondLargest);
  }
}

secondLargest([-1, -2, -3]);

/*Problem- > 71 => Strings Starting with Vowel
Write a function that takes an array of strings and returns a new array containing only the strings that start with a vowel (a, e, i, o, u), case-insensitive. */
function stringsStartingWithVowel(arr) {
  let vowelStrings = arr.filter((el) => {
    const vowels = "aeiou";
    const firstChar = el.toLowerCase()[0];
    return vowels.includes(firstChar);
  });
  console.log(vowelStrings);
}
stringsStartingWithVowel(["apple", "banana", "orange"]);

/*Problem- > 72 => Write a function that takes an object and returns the number of properties it has. */
function numOfPro(obj) {
  let properties = Object.keys(obj);

  console.log(properties.length);
}
numOfPro({ name: "Rahim", age: 25 });

/*Problem- > 73 => Write a function that takes an object and a property name.

If the property exists, print its value
Otherwise, print "Property not found" */
function checkProperty(obj, pro) {
  for (let key in obj) {
    if (key == pro) {
      console.log(obj[key]);
      return;
    }
  }
  console.log("Property not found");
}
checkProperty({ name: "Rahim", age: 25 }, "height");

/*Problem- > 74 => Write a function that takes an object and returns a new object with all string values converted to uppercase.

Non-string values should remain unchanged. */
function objUpperCas(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "string") {
      obj[key] = obj[key].toUpperCase();
    }
  }
  console.log(obj);
}
objUpperCas({ name: "rahim", age: 25, city: "dhaka" });

/*Problem- > 75 => Write a function that takes an array of user objects and returns an array of just their names */
function namOfArr(arr) {
  let name = [];
  for (obj of arr) {
    name.push(obj["name"]);
  }
  console.log(name);
}
namOfArr([
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" },
]);

/*Problem- > 76 => Check if Object is Empty
Write a function that takes an object and returns true if it has no properties, otherwise false. */
function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "Rahim" }));

//Find Missing Number

function findmissingNum(arr) {
  let missingNum;
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) {
            missingNum = i;
            break; 
        }
    }
  console.log(missingNum)
}
findmissingNum([1, 2, 4, 5])

/*

Find Common Elements
Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays. */

function findCommon(arr1, arr2) {
  let common = [];
  arr1.forEach((el) => {
    if (arr2.includes(el)) {
      common.push(el)
    }
  });
console.log(common)
}
findCommon([1, 2, 3], [2, 3, 4])

/*
Remove Duplicates
Write a function that takes an array and returns a new array with all duplicate elements removed (keep only the first occurrence).
*/
function removeDuplicats(arr) {
    let pureArr = [];
    arr.forEach(el => {
        if (!pureArr.includes(el)) {
            pureArr.push(el);
        }
    });
    console.log(pureArr);
}
removeDuplicats([1, 2, 2, 3, 4, 4, 5])


function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); 


console.log(chunkArray(["a", "b", "c", "d"], 3)); 

/*
Array Rotation
Write a function that takes an array and a number k, and returns a new array where the elements are rotated to the right by k positions.
*/
function ArrayRotation(arr, k) {
    if (arr.length === 0) {
        console.log([]);
        return;
    }
    
    k = k % arr.length; 
    let rotateArray = [];
    
    
    for (let i = arr.length - k; i < arr.length; i++) {
        rotateArray.push(arr[i]);
    }
    
   
    for (let i = 0; i < arr.length - k; i++) {
        rotateArray.push(arr[i]);
    }
    
    console.log(rotateArray);
}


ArrayRotation([1, 2, 3, 4, 5], 2); 
ArrayRotation(["a", "b", "c"], 1); 
ArrayRotation([1, 2, 3], 5);




const introduce = (name, age) => {
  return `My name is ${name}, age ${age} `
}
console.log(introduce("Fatin", 22))


let { name, age } = { name: "Rahim", age: 25 }
console.log(`name:${name}`)
console.log(`age: ${age}`)

function spreadpr(arr1, arr2){
  let newArr = [...arr1, ...arr2]
  console.log(newArr)
}
spreadpr([123],[12])

function defaultParamiter(guestName = "Guest") {
    return `Hello ${guestName}!`;
}

console.log(defaultParamiter("Fatiin")); 

function safe() {
  let user = { name: "Rahim", address: { city: "Dhaka" } }
  console.log(user?.address?.city)
}
safe()

function largestNum(arr) {
  let largest = arr[0]
  arr.forEach((el) => {
    if (el > largest) {
      largest=el
    }
  })
  console.log(largest)
}
largestNum([3, 7, 2, 9])

function removeDuplicates(arr) {
  let updatedArr = [];
  arr.forEach((el) => {
    if (!updatedArr.includes(el)) { 
      updatedArr.push(el);
    }
  });
  return updatedArr; 
}

console.log(removeDuplicates([1, 2, 2, 3, "a", "a"])); 

function getEvenNumbers(arr) {
  let filterArr = []
  arr.forEach((el) => {
    if (el % 2 == 0) {
      filterArr.push(el)
    }
  })
  console.log(filterArr)
}
getEvenNumbers([1, 2, 3, 4, 5, 6])

function reverseArray(arr) {
  let reversed = arr.toReversed()
  console.log(reversed)
}
reverseArray([1, 2, 3])

function pluck(arr, key) {
  let result = [];
  arr.forEach(obj => {
    result.push(obj[key]);
  });
  return result;
}
function sumArray(arr) {
  let sum = 0
  arr.forEach((el) => {
    sum+=el
  })
  return sum
}
console.log(sumArray([1, 2, 3, 4]))

function hasEven(arr) {
  let update = false
  arr.forEach((el) => {
    if (el % 2 == 0) {
      update = true
    }

  })
  return update
}
console.log(hasEven([1, 2, 5]))

function findFirstEven(arr) {
  for (const el of arr) {
    if (el % 2 === 0) {
      return el;
    }
  }
  return null; 
}

console.log(findFirstEven([1, 3, 4, 5])); 
console.log(findFirstEven([1, 3, 5]));   

function isEmpty(arr) {
  if (arr.length <= 0) {
    return true
  }
  else {
    return false
  }
}
console.log(isEmpty([]))

function first(arr){
  if (arr.length !== 0) {
    return arr[0]
  }
}
console.log(first([10, 20, 30]))

function last(arr) {
  return arr[arr.length-1]
} 
console.log(last([10,20,30]))

function size(arr) {
  return arr.length
}
console.log(size([1,2,3]))

function positivesOnly(arr){
  return arr.filter((el)=> el>0)
}
console.log(positivesOnly([-1,2,3,4,5]))

function duplicate(arr) {
  let main = [...arr]
  
  return main
}
console.log(duplicate([1,2,2,3]))

function hasItems(arr) {
  if (arr.length) {
    return true
  }
  else {
    return false
  }
}
console.log(hasItems([1]))

function allEven(arr) {
  return arr.every(el => el % 2 === 0);
}
console.log(allEven([2,4,3,64]))

function removeZeros(arr) {
  return arr.filter(el => el !== 0);
}
console.log(removeZeros([1, 2, 0, 3, 0, 4]))

function flip(arr) {
  return arr.reverse()
}
console.log(flip([1, 2, 3]))

function indexOfMax(arr){
  let max = arr[0]
  let ind = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i]
      ind = i
    }
  }
  return ind
 
}
console.log(indexOfMax([10,20,30,11]))

function mergeUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeUnique([1,2,3],[1,2,3,4]))

function product(arr) {
  let multiple = 1
  arr.forEach(el => multiple *= el)
  return multiple
}
console.log(product([2, 3, 4])) 

function uniqueInOrder(arr) {
  let uni = [...new Set(arr)]
  return uni
}
console.log(uniqueInOrder([1, 2, 2, 3, 1]))

function removeAll(arr, value) {
  return arr.filter((el)=> el !== value)
}
console.log(removeAll([1, 2, 2, 3], 2))

function onlyNumbers(arr) {
  return arr.filter((el)=> typeof el === 'number')
}console.log(onlyNumbers([1, "hello", 2, true, 3.5]))

function minMax(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let obj = {
    Max: max,
    Min:min
  }
  return obj
}
console.log(minMax([3, 1, 4, 1, 5]))

function uniqueFromEnd(arr) {
  const reversed = [...arr].reverse();
  const uniqueReversed = [...new Set(reversed)];
  return uniqueReversed.reverse();
}
console.log(uniqueFromEnd([1, 2, 3, 2, 1]))

function sorted(arr) {
  return arr.toSorted(function(a, b){return a - b})
}
console.log(sorted([1, 2, 3, 30, 10, 20]))

function take(arr, n) {
  return arr.slice(0,n)
}
console.log(take([1, 2, 3, 4], 2))

function onlyStrings(arr) {
  return arr.filter((el)=>typeof el == "string")
}
console.log(onlyStrings([1, "hello", true, "world"]))

function compact(arr) {
  let com = []
  arr.forEach(el => { if (el) { com.push(el) } })
  return com
}
console.log(compact([0, 1, false, 2, ""]))


const average = (arr) => arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average([1, 2, 3]))

const nonZeroNumbers = (arr) => arr.filter(el => typeof el === "number" && el !== 0)
console.log(nonZeroNumbers([0, 1, "2", 3]))

const findTruthy = (arr) => arr.filter(el => el)
console.log(findTruthy([0, null, 2]))

const uniqueOnly = (arr) => {
  const freq = new Map();
  arr.forEach(el => freq.set(el, (freq.get(el) || 0) + 1));
  return arr.filter(el => freq.get(el) === 1);
};
console.log(uniqueOnly([1, 2, 2, 3]))

function pluck(arr, key) {
  return arr.map(obj => obj[key]);
}
console.log(pluck([{name:"A"},{name:"B"}], "name"))

function hasKey(obj, key) {
 return Object.hasOwn(obj, key)
}
console.log(hasKey({ name: "Fatin" }, "name"))
console.log(hasKey({ name: "Fatin" }, "age"))

function getKeys(obj) {
  let keys =[]
  for (key in obj) {
    keys.push(key)
  }
  return keys
}
console.log(getKeys({a: 1, b: 2}))

function getValues(obj){
  return Object.values(obj)
}
console.log(getValues({a: 1, b: 2}))

function copyObj(obj) {
  return {...obj}
}
console.log(copyObj({name: "Fatin"}))

function countProps(obj) {
  return Object.values(obj).length
}
console.log(countProps({a: 1, b: 2, c: 3}))

function mergeObjects(obj1, obj2){
  let merged = { ...obj1, ...obj2 }
  return merged
}
console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}))

function omit(obj, key) {
  const { [key]: _, ...rest } = obj;
  return rest;
}
console.log(omit({ a: 1, b: 2, c: 3 }, "b"))

function copyObj(obj) {
  return {...obj}
}
console.log(copyObj({ name: "Fatin" }))

const hasTruthyValue = (obj) => Object.values(obj).some(Boolean);
console.log(hasTruthyValue({a: 0, b: false}))

function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(pick({a: 1, b: 2, c: 3}, ["a", "c"]))

function compactObject(obj) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      result[key] = obj[key];
    }
  }
  return result;
}
console.log(compactObject({a: 0, b: 1, c: "", d: "hello"}))

function isEmptyObj(obj) {
  if (Object.keys(obj).length) {
    return false
  }
  else {
    return true
  }
}
console.log(isEmptyObj({a: 1}))

function numberValues(obj) {
  return Object.values(obj).filter(val => typeof val === 'number');
}
console.log(numberValues({a: 1, b: "hello", c: 2}))

