const express = require("express");
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
// const SSLCommerzPayment = require('sslcommerz-lts')
const path = require('path');

const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))


// স্ট্যাটিক ফাইল সার্ভ করা
app.use(express.static(path.join(__dirname, 'public')));




// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin-stats');
const paymentRoute = require('./src/payment/payment.route')

app.use("/api/books",bookRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/auth",userRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/payment",paymentRoute)




//sslcommerz start




//sslcommerz post method
// app.post("/order",async(req,res)=>{
//     const product = await productCollection.find({_id:new ObjectId(req.body.productId)})
//     console.log(product)
//     const data = {
//         total_amount: 100,
//         currency: 'BDT',
//         tran_id: 'REF123', // use unique tran_id for each api call
//         success_url: 'http://localhost:3030/success',
//         fail_url: 'http://localhost:3030/fail',
//         cancel_url: 'http://localhost:3030/cancel',
//         ipn_url: 'http://localhost:3030/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer.',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: 'Customer Name',
//         cus_email: 'customer@example.com',
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//     };
    
// })
//sslcommerz end
// connect to mongoose and mongodb
async function main() {
    await mongoose.connect(process.env.DB_URL);

app.use("/",(req,res)=>{
    res.send({ message: 'Order received successfully!' })
})

  }
  main().then(()=>console.log("Mongodb Connected successfully"))
  .catch((err)=> console.log(err));
  


  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})