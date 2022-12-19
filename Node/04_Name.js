const name1 = 'John';
const name2 = 'Jane';
const name3 = 'Jack';
const name4 = 'Jill';
const name5 = 'Jenny';

const personJohn = {
    name: 'John',
    age: 30
}

module.exports = { name1, name2, name3, name4 };

//alternative way to export
module.exports.name5 = name5;
module.exports.objs = { name1, name2, name3, name4 };
module.exports.john = personJohn;