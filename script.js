'use strict';


setTimeout(() => { console.log('setTimeout') }); // Macrotasks

Promise.resolve()
    .then(() => console.log('Promise resolve')); // microtasks

queueMicrotask(() => { console.log('queueMicrotask') }); // microtasks

Promise.resolve()
    .then(() => console.log('Promise resolve_2')); // microtasks

console.log('console.log'); // () => {}


// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}