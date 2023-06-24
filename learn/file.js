 const fs = require("fs");

// fs.readFile("./hi.txt", (err, data) => {  // reading from a file
//     if(err){
//         console.log("error reading from file");
//     }
//     else{
//         console.log(data.toString());
//     }
// })

// fs.writeFile("./hi2.txt", "bye", () => {  // writing to a file
//     console.log("file was written to");
// })


// if(!fs.existsSync("./assets")){
// fs.mkdir('./assets', (err) => {   // making a directory
//     if(err){
//         console.log("error making folder");
//     }
//     else{
//         console.log("folder made");
//     }
// });
// }
// else{
//     fs.rmdir("./assets", (err) =>{
//         if(err){
//             console.log(err);
//         }
//     });
// }

if(fs.existsSync("./docs/delete.txt")){
    fs.unlink("./docs/delete.txt", (err) => {
        if(err){
            console.log(err);
        }
        console.log("deleted");
    });
}