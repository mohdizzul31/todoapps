const express = require("express");
const app = express();
// const user = require("./controllers/userController.js")

app.use(express.static("public"));
app.set(`view engine`,`ejs`);

app.get("/",(req,res)=>{
    res.render("index");
});

const port = 3000;
app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})
