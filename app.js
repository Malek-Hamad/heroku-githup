const express =require("express");
const app = express();
const PORT = process.env.PORT || 5555;


app.use(express.static("public"));

// open my webside. 
app.use("/malek" , express.static("myWebside"));


app.listen(PORT, () => {console.log("The server is lisning on port " + PORT)});