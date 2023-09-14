const userController = (req,res =>{
    res.sendFile(__dirname + "/views"+"index.html");
});

module.exports = {userController};