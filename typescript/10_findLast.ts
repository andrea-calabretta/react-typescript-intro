const users_ = [
	{ name: 'Jill', id: 1 },
	{ name: 'Alex', id: 2 },
	{ name: 'Bill', id: 5 },
	{ name: 'Alex', id: 4 },
];

//	findLast si ferma appena trova il primo elemento che soddisfa la condizione, partendo dalla fine 
const foundLast = users_.findLast(user => user.name === 'Alex');

console.table(foundLast); // { name: 'Alex', id: 4 }