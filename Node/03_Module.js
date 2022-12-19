//Modules
const data = require('./04_Name.js');
const method = require('./05_FunctionsModule.js');

console.log(data);
console.log(method);
console.log(data.objs);

method.display();
method.display2(data.name1);
method.display2(data.name2);
method.display2(data.name3);
method.display2(data.name4, 12);
method.display3(data.name2, 20);
method.display3(data.john.name, data.john.age);
method.display2(data.name5)
method.display2(data.objs.name1);
