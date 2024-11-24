const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get("/set-cookie" , (req , res)=>{
    res.cookie("username", "monish" , {maxAge: 1000*60*60*24*7} , {httpOnly: true});
    res.send("Cookie is set successfully");
});

app.get("/get-cookie" , (req , res)=>{
    const username = req.cookies.username;
    if(!username){
        res.send("No cookie found");
        return;
    }
    res.send(`Cookie found with value: ${username}`);
});

app.get("/delete-cookie" , (req , res)=>{
    const username = req.cookies.username;
    if(!username){
        res.send("No cookie found");
        return;
    }
    res.clearCookie("username");
    res.send("Cookie is deleted successfully");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});