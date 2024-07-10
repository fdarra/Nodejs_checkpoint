var generator = require('generate-password');

var passwords = generator.generateMultiple(1, {
	length: 10,
	uppercase: false
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);