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
  
const greet = () => "hello world!";