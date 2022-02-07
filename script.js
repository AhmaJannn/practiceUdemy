"use strict";

const persone = {
	name: 'Alex',
	tel: '+79857380414',
	parents: {
		mom: 'Olga',
		dad: 'Andrew'
	}
};

//console.log(JSON.stringify(persone));
//console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);