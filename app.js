// installs as local dependency = use it only in this porject
// npm i <packageName>

//install global dependancy 
// npm g <packageName> 


// package.json - manifest file 
//manual approach (creat package.json in the root, create properties etc)
// npm init (step by step, press enter to skip); 
//npm init -y (everything default)


const _ = require('lodash'); 

const items = [1,[2,[3,[4,[5, ]]]]]
const newItems  = _.flattenDeep(items); 
console.log(newItems); 
