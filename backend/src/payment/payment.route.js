const express = require('express');
const router = express.Router();
const SSLCommerzPayment = require('sslcommerz-lts'); // Install this package: npm install sslcommerz-lts
const payment = require('../payment/payment.model'); // Assuming you have a payment model

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; // true for live, false for sandbox


// const tran_id = new ObjectId().toString();

// SSLCommerz POST method
router.post('/order', async (req, res) => {
    try {
        const paymentData = req.body;
        console.log('Received Payment Data:',paymentData);

        if (!paymentData.total_amount) {
            return res.status(400).json({ message: 'Total amount missing' });
        }
      
      const { productId, totalPrice, customerInfo } = req.body;
        
        // Fetch product details (if needed)
        const product = await payment.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' }); // Return JSON
        }

        // Payment gateway data
        const data = {
            total_amount: totalPrice,
            currency: 'BDT',
            tran_id: `TXN_${Date.now()}`,
            success_url: 'http://localhost:3030/payment/success',
            fail_url: 'http://localhost:3030/payment/fail',
            cancel_url: 'http://localhost:3030/payment/cancel',
            ipn_url: 'http://localhost:3030/payment/ipn',
            shipping_method: 'NO',
            product_name: product.title || 'Product',
            product_category: 'General',
            product_profile: 'general',
            cus_name: customerInfo.name,
            cus_email: customerInfo.email,
            cus_add1: customerInfo.address,
            cus_city: customerInfo.city,
            cus_state: customerInfo.state,
            cus_postcode: customerInfo.zipcode,
            cus_country: customerInfo.country,
            cus_phone: customerInfo.phone,
        };
        console.log(data);

        // Initialize SSLCommerz payment
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then(apiResponse => {
            if (apiResponse?.GatewayPageURL) {
                // Return the payment gateway URL as JSON
                return res.status(200).json({ url: apiResponse.GatewayPageURL });
            } else {
                return res.status(500).json({ error: 'Payment gateway error' });
            }
        });
    } catch (error) {
        console.error('Error in payment gateway:', error);
        res.status(500).json({ error: 'Server error' }); // Return JSON
    }
});

module.exports = router;