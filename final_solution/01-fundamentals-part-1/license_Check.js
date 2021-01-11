// If - else Decision
///////////////////////


// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough){
//     console.log(" Sarah can drive 🖕🏽");
// };

const age = 15;
if (age >= 18){
    console.log("Sarah can drive 🏎");
}else {
    const yearsLeft = 18 - age;
    console.log(`sarach is to young . wait another ${yearsLeft} years.` );
};

const birthYear = 1998;

let century;
if(birthYear <= 2000){
 century = 20;
}else{
century = 21;
}
console.log(century);
 