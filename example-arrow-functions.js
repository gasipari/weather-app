// JS
//var names = ['Ingrid', 'Ida', 'Ines'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// // arrow functions
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

//names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Marius'));

// var person = {
//   name: 'Marius',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says Hi to ' + name);
//     })
//   }
// }
//
// person.greet();

// statement style
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(3, 10));

// expression style
var addExpression = (a, b) =>  a + b;
console.log(addExpression(2, 8));
