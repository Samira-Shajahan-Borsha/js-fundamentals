var tableLength = 12;
var tourDestination = ['CoxsBazar', 'Nepal', 'Bhutan', 'Paris'];
var vutanIndex = tourDestination.indexOf('Bhutan');
// console.log(vutanIndex);

var fourthDestination = tourDestination[3];
// console.log(fourthDestination);

tourDestination[1] = 'Srilanka';
// console.log(tourDestination);

tourDestination.push('London');
console.log(tourDestination);

tourDestination.pop();
if(tourDestination[1] == 'Nepal'){
    console.log('pahare ahare ahare');
}
else if(tourDestination[1] == 'China'){
    console.log('China tomar kache jabo na');
}
else if(tourDestination.length == 4){
    console.log('I will travel Indonesia');
}
else{
    console.log("I won't go anywhere");
}



var eggPrice = 32;
var myBudget = 32;
if(eggPrice <= myBudget){
    console.log('I will eat egg');
}
if(eggPrice >= myBudget){
    console.log('I will eat egg with lemon');
}
console.log(6 != 6);
console.log(6 >= 6);
