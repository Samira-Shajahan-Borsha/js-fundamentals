// Add Elements to an array
var lastBench = ['Kalam', 'Balam', 'Salam'];
lastBench.push('Jalam');
lastBench.push('palam', 'Fahim');
// console.log(lastBench);

var friendsAge = [11, 13, 17, 12];
// friendsAge.push(15);
console.log(friendsAge);

// Remove Elements from an array
var lastItem = friendsAge.pop();
// friendsAge.pop();
console.log(friendsAge);
console.log(lastItem);


//Javascript remove first item from an array
//Javascript add an element in the beginning

// add elements to an array in the beginning
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);

var newElements = fruits.unshift("jackfruit", "grapes");
// console.log(newElements);
// console.log(fruits);


// Remove first items from an array 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
fruits.shift();
// console.log(fruits);

var shifteditem = fruits.shift();
// console.log(shifteditem);

