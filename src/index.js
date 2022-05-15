const express = require('express');
const app = express();
const port = 3000;

const leetsRouter = require("./router/leets");

/*app.get('/', (req,res) =>{
    res.send("hello world");
});*/

app.listen(port, () => {
    console.log(`서버 가동중 ${port}`);
});

app.use("/leets", leetsRouter);
