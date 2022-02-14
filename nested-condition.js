var danishPrice = 50;
var butterBreadprice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;
// if(danishPrice < myBudget){
//     console.log('I will eat Danish');
// }
// else if(butterBreadprice < myBudget){
//     console.log('will buy butter bread');
// }
// else if (toastBiscuitPrice < myBudget){
//     console.log('will buy toast biscuit');
// }
// else{
//     console.log('Batasha diye cha khabo');
// }

// nested condition
if(danishPrice < myBudget){
    if(packedWell == true){
        console.log('I will eat');
    }
    else{
        console.log("I won't eat");
    }
}

