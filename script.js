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