// var gotJob = true;
// if(gotJob == true){
//     console.log('Lets get married!');
// }
// else{
//     console.log('I can not marry you');
// }


var gotJob = false;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;
// if(gotJob == true && moneySaved > 200000){
//     console.log('Lets get married!');
// }
// else{
//     console.log('I can not marry you');
// }

// if(gotJob == true && moneySaved > 200000 && hasFlat == true){
//     console.log('Lets get married!');
// }
// else{
//     console.log('I can not marry you');
// }



// if(gotJob == true || moneySaved > 200000){
//     console.log('Lets get married!');
// }
// else{
//     console.log('I can not marry you');
// }


if((gotJob == true && moneySaved > 200000) || (hasHouse == true)){
    console.log('Lets get married!');
}
else{
    console.log('I can not marry you');
}