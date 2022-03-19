const express =require("express");
const app = express();
const PORT = process.env.PORT || 5555;


app.use(express.static("public"));
app.use("/malek" , express.static("myWebside"));


app.listen(PORT, () => {console.log("The server is lisning on port " + PORT)});

// the creating and switching between two branches are done. 