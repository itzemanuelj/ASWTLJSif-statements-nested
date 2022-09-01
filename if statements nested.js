// An alternative to using && to test multiple conditions in a single if statement is ______ ifs.

nested

// You communicate the nesting to JavaScript with the placement of what two characters? Don't type a space between them.

{}

// How do you make nested ifs readable? Answer with 1 lower-case verb.

indent

// This is the first line of an if statement.
if (a !== b) {
    if (a === b) {

    }
}

// Enter the first 6 characters of the next line, which is a second-level if.

// Create an if statement enclosing a nested if. If a equals b, then if c equals d, then f is assigned e.

if (a === b) {
    if (c === d){
        e = f;
    }
}

// Code the first line of an if statement that's followed by the first line of a nested if. If a equals b, then if c doesn't equal d....

if (a === b) {
    if (c !== d) {
    }
}

// Code an if statement enclosing a nested if. If a equals 1, then if c equals "Max", then display an alert that says "OK".

if (a === 1) {
    if (c === "Max") {
        alert("OK")
    }
}

if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }

//   Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.

if (a === 1 && c === "Max"){
    alert("OK");
}

if (a !== 0 && b > 1) {}

// Code the first lines of nested if statements that test the same conditions as the above code.

if (a !== 0) {
    if (b >  1) { 
        alert("OK");
    }
}

if (a !== 0 && b > 1 && c < 1) {}

// Code the first lines of nested if statements that test the same conditions as the above code

if (a !== 0) {
    if (b > 1) {
      if (c < 1) {
      }
    }
}

// Code nested if statements that test whether a first variable equals a particular number and whether a second variable equals another number. If so, display an alert message.

if (total === 50) {
    if (cost === 100) {
alert("time and cost");
    }
}