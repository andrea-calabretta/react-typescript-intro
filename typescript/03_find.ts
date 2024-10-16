const users = [
	{ name: 'Jill', id: 1 },
	{ name: 'Alex', id: 2 },
	{ name: 'Bill', id: 5 },
	{ name: 'Alex', id: 4 },
];

//	find si ferma appena trova il primo elemento che soddisfa la condizione
const found = users.find(user => user.name === 'Alex');

console.table(found); // { name: 'Alex', id: 2 }