//esm
import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('EXAM', () => {
  console.log('You have an exam tomorrow!');
    setTimeout(()=>{
        console.log('please study!');
    }, 5000)
});
// myEmitter.emit('exam');  //doesnot work, nodejs case sensitive
myEmitter.emit('EXAM');


/*
// remove 'type: "module"' from package.json
cja
const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

*/
