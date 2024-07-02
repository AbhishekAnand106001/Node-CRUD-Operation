const express = require("express")
const mongoose = require("mongoose")
const app = express();
const port = 3000;


mongoose.connect("mongodb+srv://abhishekanand106001:root@nodecrud.desgg8s.mongodb.net/?retryWrites=true&w=majority&appName=NodeCRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(()=>console.log("mongoDB Connected"))
.catch((err)=>console.log("Mongo Error",err));



const User = mongoose.model('user', userSchema);




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});