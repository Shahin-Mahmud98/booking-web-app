const mongoose = require('mongoose');
const express = require('express');
const Order = require('../orders/order.model');
const Book = require('../books/book.model');
const router = express.Router();

// Function to calculate admin stats
router.get("/", async (req, res) => {
    try {
        // 1. Total number of orders
        const totalOrders = await Order.countDocuments();

        // 2. Total sales (sum of all totalPrice from orders)
        const totalSales = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$totalPrice" }
                }
            }
        ]);

        // 3. Trending books statistics
        const trendingBookingRoomCount = await Book.aggregate([
            { $match: { trending: true } },
            { $count: "trendingBookingRoomCount" }
        ]);

        // Extract count value
        const trendingRoomBook = trendingBookingRoomCount.length > 0 ? trendingBookingRoomCount[0].trendingBookingRoomCount : 0;

        // 4. Total number of books
        const totalRooms = await Book.countDocuments();

        // 5. Monthly sales (group by month and sum total sales for each month)
        const monthlyOrder = await Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } }, // Fixed function
                    totalSales: { $sum: "$totalPrice" },
                    totalOrders: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Return response
        res.status(200).json({
            totalOrders,
            totalSales: totalSales[0]?.totalSales || 0,
            trendingBookingRoomCount: trendingRoomBook,  // Fixed naming issue
            totalRooms,
            monthlyOrder
        });

    } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ message: "Failed to fetch admin stats" });
    }
});

module.exports = router;
