//Problem- > 1 => Print numbers from 1 to 10 in the console.
function printNum() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
        
    }
}
printNum();

//Problem- > 2 => Given an array [2, 4, 6, 8, 10], calculate and print the sum of all its elements using a for loop.
function sumOfAnArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
    
}
sumOfAnArray([2, 4, 6, 8, 10])

//Problem- > 3 => Print only the even numbers from 1 to 20 in the console.
function evenNumFrom1to20() {
    for (let i = 1; i <= 20; i++){
        if (i % 2 == 0) {
            console.log(i);
            
        }
    }
}
evenNumFrom1to20()

//Problem- > 4 => Print the multiplication table of 5 from 1 to 10.
function multipliciatinTable() {
    for (let i = 1; i <= 10; i++){
        console.log(`5 x ${i} = ${5*i}`);
        
    }
}
multipliciatinTable()

//Problem- > 5 => Print numbers from 1 to 100 divisible by 3
function divisibleby3() {
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0) {
            console.log(i);
            
        }
    }
}
divisibleby3()

/*Problem- > 6 => Write a function checkNumber(n) that prints:

"Positive" if the number is greater than 0,
"Negative" if the number is less than 0,
"Zero" if the number is exactly 0. */
function checkNumber(n) {
    if (n > 0) {
        console.log(`This is a positive number.`);
        
    }
    else if (n < 0) {
        console.log(`This is a negative number.`);
        
    }
    else {
        console.log(`This is zero.`);
        
    }
}
checkNumber(0)

/*Problem- > 7 => Write a function isEvenOrOdd(num) that prints:

"Even" if the number is even,
"Odd" if the number is odd. */
function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`This is an even number.`);
        
    }
    else {
        console.log(`This is a odd number.`);
        
    }
}
isEvenOrOdd(1134)

/*Problem- > 8 => Write a function checkAge(age) that prints:

"Child" if age is less than 13,
"Teenager" if age is between 13 and 19 (inclusive),
"Adult" if age is 20 or more.
 */
function checkAge(age) {
    if (age < 13) {
        console.log(`Child`);
        return
    }
     if (age >=13 && age <=19 ) {
        console.log(`Teenager`);
        return
    }
    if (age >= 20) {
        console.log(`Adult`);
        return
    }
   
    
}
checkAge(20)

/*Problem- > 9 => Write a function gradeCalculator(marks) that prints the grade based on marks:

"A" if marks ≥ 80
"B" if marks ≥ 60 and < 80
"C" if marks ≥ 40 and < 60
"F" if marks < 40 */
function gradeCalculator(marks) {
    if (marks > 100) {
        console.log(`Invalid input.`);
        return
    }
    if (marks >= 80 && marks <= 100) {
        console.log(`You have got "A".`);
        return
    }
    if (marks >= 60 && marks < 80) {
        console.log(`You have got "B".`);
        return
    }
    if (marks >= 40 && marks < 60) {
        console.log(`You have got "C".`);
        return
    }
    if (marks < 40) {
        console.log(`You have got "F".`);
        return
    }
}
gradeCalculator(40)

/*Problem- > 10 => Write a function compareNumbers(a, b) that prints:

"a is greater" if a > b,
"b is greater" if b > a,
"Both are equal" if a == b. */
function compareNumbers(a, b) {
    if (a > b) {
        console.log(`A is greater than B.`);
        
    }
   else if (b > a) {
        console.log(`B is greater than A.`);
        
    }
    else {
        console.log(`Both are equal.`);
        
    }
}
compareNumbers(100, 20)

/*Problem- > 11 => Write a function sumEvenNumbers(limit) that:

Takes a number limit (e.g., 10)
Uses a for loop to go from 1 to limit
Adds only the even numbers
Prints the total sum */
function sumEvenNumbers(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++){
        if (i % 2 == 0) {
            sum+=i
        }
    }
    console.log(sum);
    
}
sumEvenNumbers(10)

/*Problem- > 12 => Count Vowels in a Word (Hardcoded)
Write a function countVowels() that:

Checks each character in the word "javascript" (hardcode this word)
Uses a for loop to go through each letter (use charAt(i))
Counts how many are vowels (a, e, i, o, u) — use if...else
Prints the total count */
function countVowels(word) {
    let count = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++){
        if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            count++
        }
    }
    console.log(count);
    
}
countVowels("JAVASCRIPT")

/*Problem- > 13 => Print FizzBuzz (Classic!)
Write a function fizzBuzz() that:

Loops from 1 to 100
For each number:
If divisible by 3 and 5, print "FizzBuzz"
Else if divisible by 3, print "Fizz"
Else if divisible by 5, print "Buzz"
Else, print the number */
function fizzBuzz() {
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('Fizzbuzz');
            
        }
       else if (i % 3 == 0) {
            console.log('Fizz');
            
        }
       else if (i % 5 == 0) {
            console.log('Buzz');
            
        }
        else {
            console.log(i);
            
        }
    }
}
fizzBuzz()

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

findLargest(1,7)