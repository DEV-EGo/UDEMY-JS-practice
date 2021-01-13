// If - else Decision
///////////////////////


// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough){
//     console.log(" Sarah can drive 🖕🏽");
// };

// const age = 15;
// if (age >= 18){
//     console.log("Sarah can drive 🏎");
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`sarach is to young . wait another ${yearsLeft} years.` );
// };

// const birthYear = 1998;

// let century;
// if(birthYear <= 2000){
//  century = 20;
// }else{
// century = 21;
// }
// console.log(century);
 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIJohn);
if(BMIMark >BMIJohn) {
    console.log(`mark bmi (${BMIMark})is higher than john's!(${BMIJohn}) `)
}else{
    console.log(`john bmi (${BMIMark}) is higher than mark's! (${BMIJohn})`)
}

const massEgo = 74;
const heightEgo = 2.69;
const massGracie = 44;
const heightGracie = .95;

const BMIEgo = massEgo / heightEgo **2;
const BMIGracie = massGracie / (heightGracie * heightGracie);
const EdwinHigherBMI = BMIEgo / BMIGracie;

console.log(BMIEgo , BMIEgo);
if( BMIEgo > BMIGracie){
    console.log( `ego bmi (${BMIEgo}) is higher than gracies! (${BMIGracie})`);
}else{
    console.log(` gracie bmi (${BMIEgo}) is higher than edwin (${BMIGracie})`)
}
