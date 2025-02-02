const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    adress:{
        city:{
            type:String,
        required:true,
        },
        country:String,
        state: String,
        zipcode:String,
    },
    phone:{
        type:Number,
        required:true,
    },
    productsIds:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required:true,
    }],
    totalPrice:{
        type:Number,
        required:true,
    }
},{
    timestamps:true,
}
)

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;