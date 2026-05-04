
// axios is more optimal than fetch fast automactic , function rich , automatic error handling
// axios used in large project fetch used in small projects
const axios = require('axios');
async function getReq(){
    let url = "https://catfact.ninja/fact";
    try{
        let response = await axios.get(url);
        console.log("resolved");
        console.log(response.data);//automactic in axios , but manual in fetch
        console.log(response.data.fact);
        
    }
    catch(error){
        console.log("rejected error : ",error);
    }
    finally{
        console.log("hello");
    }

}
getReq();