const express = require("express")
const { connectMongoDB } = require("./connection")
const userRouter = require("./routes/user")
const { logReqRes } = require("./middlewares")

const app = express();
const port = 3000;


connectMongoDB("mongodb+srv://abhishekanand106001:root@nodecrud.desgg8s.mongodb.net/?retryWrites=true&w=majority&appName=NodeCRUD", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));



// const User = mongoose.model('user', userSchema);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(logReqRes("log.txt"));

app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});