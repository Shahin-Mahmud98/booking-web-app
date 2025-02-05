const express = require("express");
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true,
}))


// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
// const adminRoutes = require('.')

app.use("/api/books",bookRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/auth",userRoutes);

// connect to mongoose and mongodb
async function main() {
    await mongoose.connect(process.env.DB_URL);

app.use("/",(req,res)=>{
    res.send("Hello Express")
})

  }
  main().then(()=>console.log("Mongodb Connected successfully"))
  .catch((err)=> console.log(err));
  


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})