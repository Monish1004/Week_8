const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get("/set-cookie" , (req , res)=>{
    res.cookie("username" , "Monish", {maxAge: 1000*60*60*24*7} , {httpOnly: true});
    res.send("Cookie is set");
});

app.get("/get-cookie" , (req , res)=>{
    const username = req.cookies.username;
    if(username){
        res.send("Welcome back " + username);
    }
    else{
        res.send("No cookie found");
    }
});

app.get("delete-cookie" , (req , res)=>{
    const username = req.cookies.username;
    if(username){
        res.clearCookie("username");
        res.send("Cookie deleted");
    }
    else{
        res.send("No cookie found");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});