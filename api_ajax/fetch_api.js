// let url = "https://catfact.ninja/fact";
// const request = fetch("url")
// .then((response)=>{
//     console.log("request successfull:resolved");
//     return response.json();
// })
// .then((data)=>{
//     console.log("data = ",data);
   
// })
// .catch((error)=>{
//     console.log("request unsuccessfull:rejected");
// })
// .finally(()=>{
//     console.log("hello");
// });


// moderen way using async

async function getReq(){
    let url = "https://catfact.ninja/fact";
    try{
        let response = await fetch(url);
        console.log("resolved");
        let data  = await response.json();//data is a promise 
        console.log(data);
        
    }
    catch(error){
        console.log("rejected error : ",error);
    }
    finally{
        console.log("hello");
    }

}
getReq();