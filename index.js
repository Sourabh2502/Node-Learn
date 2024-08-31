const express =require("express");
const app = express();
const PORT= 8000;
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middlewares');
const userRouter =require("./routes/user");


connectMongoDb("mongodb://127.0.0.1:27017/Node-Learn")
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

app.use('/api/users', userRouter);

app.listen(PORT,()=> console.log(`server started at ${PORT}`));