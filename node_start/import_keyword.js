// we can either use import or require in our code mainly one at a time
// note:- import can give us power to import only required function from another file , but require select all function from file 
// 3, import is more fast , memory mangement , asynhronous
import {sub, mul} from "./export_for_import.js";

console.log(sub(3,4));