        //////// type conversion and coercion practice ////
//  CONVERSION is when we manually convert from one type to another
// COERCION is when javascript automatically converts types behind the scene for you


// Type Conversion ..........

const YearInput = `1991`;

// *** using the built in Number function to convert strings to numbers
// *** inside the console log numbers are pink and strings are in white

console.log(Number(YearInput), YearInput);
console.log(Number(YearInput)+ 18);


console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log(`I am` + 23 + ` Years old`);
console.log(`23` - `10` - 3);
console.log(`23` / `2`);
console.log(`23` > `18`);

// //// GUESS the output

let n = `1` + 1; // 11
n = n - 1;
console.log(n);