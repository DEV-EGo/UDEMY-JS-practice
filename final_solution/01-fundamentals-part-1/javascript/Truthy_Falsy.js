// //// True and False values
// falsy values are not exaclty false but will when we try to conver
// them INTO BOOLEANS

// 5 FALSY VALUES : 0, ``, Undefined , null, NaN


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

// practice below

const money = 100;
if (money) {
    console.log(`dont spend it all ;`);
}else{
    console.log(` you shoould get a job, with youre broke ass`);
}

// /////
let height = 0;
if(height) {
    console.log("YAY! Height is defined");
}else{
    console.log("Height is undefined");
}