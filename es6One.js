// import { greet2 as greet } from "./es6Two.mjs";
// import simple23 from './es6Two.mjs'  //this calls the feault function only, so use brackets
import * as a2 from './es6Two.mjs'
// simple23();
console.log(a2)
a2.greet()
a2.greet2()
a2.default()