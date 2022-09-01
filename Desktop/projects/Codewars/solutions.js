//// This code does not execute properly. Try to figure out why.

function multiply(a, b){
    a * b
  }
  
//solution

const multiply = (a, b) => a * b;
  

//// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // Implement me
    return name;
  }

//solution 

function areYouPlayingBanjo(name) {
    if (typeof name === 'string') {
        if (name.charAt(0) === 'R' || name.charAt(0) === "r"){
            return name + " plays banjo";
        } else {
            return name + " does not play banjo";
        }
    }
}

////  Make a simple function called greet that returns the most-famous "hello world!".

//   Style Points
//   Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

//solution
const greet = () => "hello world!";


////Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


//solution
const invert = (arr) => arr.map(x => x * -1);


////Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

//solution
const booleanToString = b => b ? 'true' : 'false';


////Given an array of integers your solution should find the smallest integer.
// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      
    }
  }

//solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

//// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

//solution
const greet = (name) => `Hello, ${name} how are you doing today?`



//// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//solution
var summation = function (num) {
  let result = 0 
  for (let i = 1; i <= num; i++){
    result += i
  }
  return result
}

////Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"


//solution
function findNeedle(haystack) {
  let indexFound = haystack.indexOf('needle')
  return `found the needle at position ${indexFound}`
}


//// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
//  You're given one parameter, the original string.  You don't have to worry with strings with less than two characters.


//solution
function removeChar(str){
  let result = str.slice(1, -1)
  return result
}

//// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case               	   return
// name equals owner	     'Hello boss'
// otherwise	             'Hello guest'


//solution
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'


////Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes


//solution
const max = arr => {
  return Math.max(...arr)
}

const min = arr => {
  return Math.min(...arr)
}

//// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

//solution
function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0) {
       sum += arr[i]
    }
  }
  return sum
}

////You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

//solution
function check(a, x) {
  return a.includes(x)
}


////The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//solution
function openOrSenior(data){
  return data.map(([age, handicap]) => age > 54 && handicap > 7 ? 'Senior' : 'Open')
 }



////Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


 //solution
 const sum = arr => arr.length === 0 ? 0 : arr.reduce((x,y) => x + y)



////Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

 //solution
 function century(year) {
  return Math.ceil(year/100)
}


////You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.


//solution
function getMiddle(s){
  if(s.length % 2 == 0){
    return s.slice(s.length / 2 - 1, s.length / 2 + 1)
  } else {
    return s.charAt(s.length/2)
  }
}

////Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//solution
function find_average(array) {
  let average = 0
  array.forEach(num => average += num)
  if(array.length == 0) {
    return 0
  } else {
    return average / array.length
  }
}


////Simple, remove the spaces from the string, then return the resultant string.

//solution
function noSpace(x){
  return x.split(' ').join('')
}


////Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//solution
function boolToWord( bool ){
  if (bool){
    return 'Yes'
  } else {
    return 'No'
  }
}

////Code as fast as you can! You need to double the integer and return it.

//solution
function doubleInteger(i) {
  return i*2;
}

////You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

//solution
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))))
}


////Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//solution
function solution(str){
  return str.split("").reverse().join("")
}


////Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//solution
const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors' ){
    return 'Player 1 won!'
  } else if (p1 === p2) {
    return 'Draw!'
  } else {
    return 'Player 2 won!'
  }
};


////Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//solution
function basicOp(operation, value1, value2){
  if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else if (operation === '/') {
    return value1 / value2
  }
}

////Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//solution
function squareSum(numbers){
  if (numbers.length === 0) {
    return 0
  } else {
  let square = numbers.map((x, i) => x * x)
  return square.reduce((acc, c) => acc + c)
  }
}

////Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//solution
function squareOrSquareRoot(array) {
  return array.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num)
}


////Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//solution
function stringToArray(string){
  return string.split(' ')
}


////Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//solution
function digitize(num) {
  return Array.from(String(num), Number).reverse()
}

////Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//solution
function maps(x){
  return x.map((n,i) => n*2)
}


//// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//solution
function find_average(array) {
  let average = 0
  array.forEach(num => average += num)
  if(array.length == 0) {
    return 0
  } else {
    return average / array.length
  }
}

////Simple, remove the spaces from the string, then return the resultant string.

//solution
function noSpace(x){
  return x.split(' ').join('')
}


////Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

//solution
function fakeBin(x){
  let digit = x.split('')
  console.log(digit)
  digit.forEach((element, i)=> {
    if (element < 5) {
      digit[i] = 0
    } else if (element >= 5) {
      digit[i] = 1
    }
  })
  return digit.join('')
}



//// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//solution
String.prototype.toJadenCase = function () {
  return this.split(' ').map((n, i) => n[0].toUpperCase() + n.slice(1)).join(' ')
};


////Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//solution
function smash (words) {
  return words.join(' ')
};


////Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//solution
function minMax(arr){
  let result = []
  let lowest = Math.min(...arr)
  let highest = Math.max(...arr)  
   result.push(lowest)
   result.push(highest)
  return result
}


////The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//solution
function cockroachSpeed(s) {
  let cmSpeed = s * 100000/3600
  return Math.floor(cmSpeed)
}

////Write a function which converts the input string to uppercase.
//solution
function makeUpperCase(str) {
  return str.toUpperCase()
}


////A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//solution
const isSquare = function(n){
  if(n % Math.sqrt(n) * Math.sqrt(n) == 0 && Number.isInteger(n) || n == 0){
    return true;
  } else {
    return false;
  }
}


////You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//solution
function getAge(inputString){
  return Number(inputString[0])
}

////Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

//solution
function sumMix(x){
  return x.map(num => Number(num)).reduce((acc, c) => acc + c)
}


////All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//solution
function feast(beast, dish) {
  if(dish[0] == beast[0] && dish[dish.length - 1] == beast[beast.length - 1]) {
    return true;
  } else {
    return false;
  }
}

////In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//solution
function filter_list(l) {
  return l.filter(el => Number.isInteger(el))
}

////Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
// Example:
// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

//solution
function filterLongWords(sentence, n) {
  const sentenceToArray = Array.from(sentence.split(' '))
  return sentenceToArray.filter(el => el.length > n )
}


////We need a function that can transform a number (integer) into a string.
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//solution
function numberToString(num) {
  return num.toString()
}


//// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

//solution
function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(word => !geese.includes(word))
};


////Given a varying number of integer arguments, return the digits that are not present in any of them.
// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

//solution
function unusedDigits(...num) {
  const digits = [0,1,2,3,4,5,6,7,8,9]
  const numArrayToString = num.join('')  
  return digits.filter(digit => !numArrayToString.includes(digit)).join('')
}


//// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//solution
function getEvenNumbers(numbersArray){
  return numbersArray.filter(nr => nr % 2 === 0)
}

////Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?Your task is to return a number from a string.You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//solution
var FilterString = function(value) {
  //Complete this function :)
  return +value.split('').filter(n => !isNaN(n)).join('')
}


////Multiply array values and filter non-numeric
// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

//solution
function multiplyAndFilter(array, multiplier){
  // your code
  return array.filter(el => typeof(el) === 'number').map(el => el * multiplier );
}


////Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//solution
function sumTwoSmallestNumbers(numbers) {  
  const indexOfLowestOne = numbers.indexOf(Math.min(...numbers))
  const lowestOne = Math.min(...numbers)
  numbers.splice(indexOfLowestOne, 1)
  const lowestTwo = Math.min(...numbers)
  return lowestOne + lowestTwo;
}


//// Filter the array into unique values. You have 38 characters to do it in!
// Input => [1, 1, 2, 3]
// Output => [1, 2, 3]
// Note:
// It can be achieved in 29 characters if you want to make some truly horrendous code.
// If you use let or const or other ES6 features, your code will get longer due to the transformation by babel.

//solution
const makeUnique=a=>[...new Set(a)]


////In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter(); return the array containing unique values only.
// Tip: use the index of value(s) to solve this kata
// If you are not familiar with filter() - info is here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// For example:
// var arr = [4];
// unique(arr); // should return [4]
// var arr = [1,1,1,2,2,3];
// unique(arr); // should return [1,2,3]


//solution
function unique(arr) {
  return arr.filter((el, i, a) => a.indexOf(el) == i);
}

////You love coffee and want to know what beans you can afford to buy it.
// The first argument to your search function will be a number which represents your budget.
// The second argument will be an array of coffee bean prices.
// Your 'search' function should return the stores that sell coffee within your budget.
// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

//solution
function search(budget, prices) {
    return prices.filter(el => el <= budget).sort((a, b) => a - b).toString()
  }


  
////Write a function called "filterEvenLengthWords".
// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']

//solution
function filterEvenLengthWords(words) {
  return words.filter(el => el.length % 2 == 0)
}



////Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

// He wants the following functions to work as expected:

// even    // [1,2,3,4,5].even() should return [2,4]
// odd     // [1,2,3,4,5].odd() should return [1,3,5]
// under   // [1,2,3,4,5].under(4) should return [1,2,3]
// over    // [1,2,3,4,5].over(4) should return [5]
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
// They should also work when used together, for example:

// [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
// And finally the filters should only accept integer values from an array, for example:

// ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
// Note: List with non-numbers will be tested as well.


//solution
Array.prototype.even = function(){
  return this.filter(el => Number.isInteger(el) && el % 2 === 0)
}

Array.prototype.odd = function(){
  return this.filter(el => Number.isInteger(el) && el % 2 === 1 )
}

Array.prototype.under = function(x){
  return this.filter(el => Number.isInteger(el) && el < x)
}

Array.prototype.over = function(x){
  return this.filter(el => Number.isInteger(el) && el > x)
}

Array.prototype.inRange = function(min,max){
  return this.filter(el => Number.isInteger(el) && el >= min && el <= max)
}


////Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.
// For example:
// var someNumbers = [1,2,10,57];
// double(someNumbers); // should return [2,4,20,114]


//solution
function double(array) {
  return array.map(el => el*2)
}


////Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//solution
const quarterOf = (month) => {
  switch(month) {
      case 1:
      case 2:
      case 3:
        return 1;
      break;
      case 4:
      case 5:
      case 6:
        return 2;
      break;
      case 7:
      case 8:
      case 9:
       return 3;
      break;
      case 10:
      case 11:
      case 12:
        return 4;
      break;
  }
}


////Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1

//solution
function sameCase(a, b){
  if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1;
   } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
     return 1;
   } else {
     return 0;
   }
 }

////This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// For example:
// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 

//solution
function derive(coefficient,exponent) {
  return ((coefficient * exponent) + "x^" + (exponent - 1)).toString();
}


////You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

//solution
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}


////Happy Holidays fellow Code Warriors!
// Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!

// Sort Santa's Reindeer
// Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

// Notes:
// It's guaranteed that each string is composed of two words
// In case of two identical last names, keep the original order
// Examples
// For this input:

// [
//   "Dasher Tonoyan", 
//   "Dancer Moore", 
//   "Prancer Chua", 
//   "Vixen Hall", 
//   "Comet Karavani",        
//   "Cupid Foroutan", 
//   "Donder Jonker", 
//   "Blitzen Claus"
// ]
// You should return this output:

// [
//   "Prancer Chua",
//   "Blitzen Claus",
//   "Cupid Foroutan", 
//   "Vixen Hall", 
//   "Donder Jonker", 
//   "Comet Karavani",
//   "Dancer Moore", 
//   "Dasher Tonoyan",
// ]

//solution
function sortReindeer(reindeerNames){
  return reindeerNames.sort((a, b) => a.split(' ')[1] > b.split(' ')[1] ? 1 : -1);
}


////Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
// Examples:
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//solution
function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}


////You are to write an function that takes a string as it's first paramter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.
// Example
// modifyMultiply ("This is a string",3,5) 
// Should return
// "string-string-string-string-string"
// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.
// Simple. Good luck.

//solution
function modifyMultiply (str,loc,num) {
  let word = str.split(' ');
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(word[loc]);
  }
  return arr.join('-');
} 

////Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//solution
function grow(x){
  return x.reduce((acc, c) => acc * c, 1)
}


////You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

//solution
function updateLight(current) {
  switch(current) {
      case "green":
      return "yellow";
      break;
      case "red":
      return "green";
      break;
      case "yellow":
      return "red";
      break;
  }
}


////Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//solution
function addBinary(a,b) {
  let sum = a + b;
  return sum.toString(2);
}

////Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
// If the tail is right return true, else return false.
// The arguments will always be non empty strings, and normal letters.
//    function correctTail(bod, tail ;
//       sub = body.substr(bodylength-(tail.length)
//        if sub = tail) ;
//          return true
//         }
//        else 
//          return false

//solution
function correctTail(body, tail){
  let sub = body.substr(body.length - tail.length);
    if (sub === tail){
      return true;
    } else {
      return false;
    }
}
  

////Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

//solution
function squareDigits(num){
  return Number(num.toString().split('').map((digit) => digit * digit).join(''));
}


////Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//solution
function abbrevName(name){
  return name.split(' ').map((el) => el[0]).join('.').toUpperCase();
}


////Modify the spacify function so that it returns the given string with spaces inserted between each character.
// spacify("hello world") // returns "h e l l o   w o r l d"

//solution
function spacify(str) {
  return str.split('').join(' ');
}

////Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

//solution
function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map((el) => el.replace('rotten', '').toLowerCase()) : [];
}


////Implement a function called multiply, which takes two numbers and returns their product:
// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240

//solution
const multiply = (x, y) => x * y;


////An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//solution
function isIsogram(str){
  return str.length === new Set(str.toLowerCase()).size;
}


////Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

//solution
function bmi(weight, height) {
  let bmIndex = weight / (height * height)
    if (bmIndex <= 18.5) {
      return 'Underweight'
    } else if(bmIndex <= 25.0) {
      return 'Normal'
    } else if(bmIndex <= 30.0) {
      return 'Overweight'
    } else if(bmIndex > 30) {
      return 'Obese'
    }
}


////After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

//solution
function rentalCarCost(days) {
  let pricePerDay = 40;
    if (days < 3) {
      return (pricePerDay * days)
  } else if (days >= 3 && days < 7) {
      return (pricePerDay * days) - 20
  } else if (days >= 7) {
      return (pricePerDay * days) - 50
  }
}


////You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
// Simples!

//solution
function fixTheMeerkat(arr) {
  return arr.reverse();
 }


 ////Enjoying your holiday, you head out on a scuba diving trip!
// Disaster!! The boat has caught fire!!
// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
// Go to work!

 //solution
 function fireFight(s){
  return s.replace(/Fire/g, '~~');
}


////It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//solution
function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}


////Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .
// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*


//solution
function maxMultiple(divisor, bound){
  return bound - bound % divisor;
}


////We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.
// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }
// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe

//solution
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    name: this.firstName + ' ' + this.lastName,
    firstName: this.firstName,       
    lastName: this.lastName          
  }
}


////Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//solution
function divisibleBy(numbers, divisor){
  return numbers.filter(n => n % divisor === 0);
}


////You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

//solution
function smallEnough(a, limit){
  return a.every(el => el <= limit);
}


////The new £5 notes have been recently released in the UK and they've certainly became a sensation! Even those of us who haven't been carrying any cash around for a while, having given in to the convenience of cards, suddenly like to have some of these in their purses and pockets. But how many of them could you get with what's left from your salary after paying all bills? The programme that you're about to write will count this for you!
// Given a salary and the array of bills, calculate your disposable income for a month and return it as a number of new £5 notes you can get with that amount. If the money you've got (or do not!) doesn't allow you to get any £5 notes return 0.
// £££ GOOD LUCK! £££

//solution
function getNewNotes(salary,bills){
  let totalBills = bills.reduce((a, b) => a + b, 0)
  if (salary - totalBills <= 0) {
    return 0;
  } else {
    return Math.floor((salary - totalBills ) / 5);
  }
}


////The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth.

// See example:

// Input:
// [5, 10, 6]  >>> This represents:
//            # citizen 1 has wealth 5
//            # citizen 2 has wealth 10
//            # citizen 3 has wealth 6
// Should be after the test:
//  [7, 7, 7] >>> wealth has now been equally redistributed
// Info:

// MUTATE the input array/list, don't return anything
// Input is guaranteed to hold at least 1 citizen
// Wealth of a citizen will be an integer with minimum equal to 0 (negative wealth is not possible)
// Handling of floating point error will not be tested

//solution
function redistributeWealth(wealth) {
  wealth.fill(wealth.reduce((a, b) => a + b, 0) / wealth.length);
}


////Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)

//solution
const number = function(array){
  return array.map((el, index) => `${index + 1}: ${el}`)
}


////We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

//solution
function arr(N) {
  let result = [];
  for (let i = 0; i < N; i++) {
    result.push(i);
  }
  return result;
}


////DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

//solution
function dropCap(str) {
  return str.split(' ').map(el => el.length > 2 ? el[0].toUpperCase() + el.slice(1).toLowerCase() : el).join(' ');
}


////Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//solution
const capitals = function (word) {
  const characters = word.split('');
  let result = [];
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === characters[i].toUpperCase()) {
      result.push(characters.indexOf(characters[i]))
    }
  }
  return result;
};



////Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

//solution
function alternate(n, firstValue, secondValue){
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return result;
}


////Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//solution
function points(games) {
  // your code here
  let points = 0;
  games.map(match => {
    if (match[0] > match[2]) {
      points +=3;
    } else if (match[0] == match[2]) {
      points +=1;
    }
  })
  return points;
}


////I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//solution
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);
}


////In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.

// So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:

// 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.

// Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics.

// For example, if n = 11 and k = 2, the function should return 4 as the answer.

// Input: 1 <= n <= 100 000 , 1 <= k <= n.

// Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.

// Examples:
// strangeMath(11, 2) === 4
// strangeMath(15, 5) === 11
// strangeMath(15, 15) === 7

//solution
function strangeMath(n, k){
  let numbers = []
  for (let i = 1; i <= n; i++){
    numbers.push(i);
  }
  return numbers.sort().indexOf(k) + 1;
}


////You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// If you like this kata, check out the next one: Last Survivors Ep.2

//solution
function lastSurvivor(letters, coords) {
  letters = letters.split('')
  console.log(letters)
  for (let i = 0; i < coords.length; i++) {
    letters.splice(coords[i], 1)
  }
  return letters.join('');
}


////Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

//solution
function sumOfMinimums(arr) {
  return arr.map(el => Math.min(...el)).reduce((a, b) => a + b);
}

////You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
// Examples
// [1, 2, 5, 6, 5, 2]  -->  2
// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)


//solution
function duplicates(array){
  let pairs = 0;
  let newArray = array.sort((a, b) => a - b)
  console.log(newArray)
  for (let i = 0; i < newArray.length ; i++) {
    if (newArray[i] == newArray[i+1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}


////In this Kata, you will learn how to remove all empty items in an Array.
// In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)
// The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>
// [1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]
// Example:
// Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];
// After: [1, 2, 3, 4, null, undefined];

//solution
function clean(arr) {
  return arr.filter(el => true);
}
