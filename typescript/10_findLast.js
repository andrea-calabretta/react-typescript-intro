const usersLast = [
    { name: 'Jill', id: 1 },
    { name: 'Alex', id: 2 },
    { name: 'Bill', id: 5 },
    { name: 'Alex', id: 4 },
];
//	find si ferma appena trova il primo elemento che soddisfa la condizione
const foundLast = usersLast.findLast(user => user.name === 'Alex');
console.table(foundLast); // { name: 'Alex', id: 4 }
