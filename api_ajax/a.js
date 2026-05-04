// some api are normal
// some api are paid
// some api are paid + encrypted
// javascript onject notation JSON
//  XML api format is similar to html format
// AJAX = asynchronous javascript and xml/json


// -----json ===> normal js object----
const jsonData = '{"name":"abc","roll":34}';
const normalData = JSON.parse(jsonData);
console.log("jsonData : ",jsonData);
console.log("normalData : ",normalData);
const name = normalData.name;
console.log(name);


// -----normal js object ===> json ----

const jsonData2 = JSON.stringify(normalData);
console.log("jsonData : ",jsonData2);