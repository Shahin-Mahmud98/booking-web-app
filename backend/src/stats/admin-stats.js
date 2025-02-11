const mongoose = require('mongoose');
const express = require('express');
const Order = require('../Orders/order.model');
const Book = require('../books/book.model');
const router = express.Router();


//Function to calculate admin stats
router.get("/",async(req,res)=>{
    try {
        //1. Total number of orders 
        const totalOrders = await Order.countDocuments();
        
        //2.         // 2. Total sales (sum of all totalPrice from orders)
 
        const totalSales = await Order.aggregate
        ([
            {
                $group:{
                    _id:null,
                    totalSales:{$sum:"$totalPrice"},
                }
            }
        ]);
        //3. Trending books statistics: 
        const trendingBookingRoomCount = await Book.aggregate([
            {$match:{trending:true}}, // Match only trending books
            {$count:{trendingBookingRoomCount:true}}, // Return the count of trending books
        ]);
        

                // If you want just the count as a number, you can extract it like this:
        const trendingRoomBook = trendingBookingRoomCount.length > 0 ? trendingBookingRoomCount[0].trendingBookingRoomCount:0;
                // 5. Total number of books
        const totalRooms = await Order.countDocuments();
                // 6. Monthly sales (group by month and sum total sales for each month)

        const monthlyOrder = await Order.aggregate([
            {
                $group:{
                    _id:{$dateToStoring:{format:"%Y-%m", date:"$createAt"}},  // Group by year and month
                    totalSales:{$sum:"$totalPrice"},
                    totalOrders:{$sum:1} // Count total orders for each month
                }
            },
            {$sort:{_id:1}}
        ]);
        res.status(200).json({totalOrders,totalSales:totalSales[0]?.totalSales ||0,
            trendingBookingRoomCount,
            totalRooms,
            monthlyOrder,
        })

    } catch (error) {
      console.error("Error fetching admin stats:",error);
      res.status(500).json({message:"Failed to fetch admin stats"})  
    }
})

module.exports = router;