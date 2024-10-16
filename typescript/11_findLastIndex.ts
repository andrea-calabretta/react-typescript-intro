const elements = [ 'Jill', 'Alex', 'Bill', 'Alex' ];

//	findLastIndex si ferma appena trova l'indice dell'elemento che soddisfa la condizione, partendo dalla fine 
const foundIndex = elements.findLastIndex(element => element === 'Alex');

console.log(foundIndex); // 3