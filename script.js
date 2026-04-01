console.log(process.argv); 

// // ---output -----
// ---- default ---
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\kulde\\Desktop\\projects\\node_js\\node_projects\\script.js'
// ]
// //,,,,,,,,,,,,,,,,,,,,,, 
// // when we want to pass argument to the file while running so we pass arguments
//  node script.js hello 123 yes 0 ".."
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\kulde\\Desktop\\projects\\node_js\\node_projects\\script.js',
//   'hello',
//   '123',
//   'yes',
//   '0',
//   '..'
// ]

for (let i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

