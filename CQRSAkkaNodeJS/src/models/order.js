import mongoose from 'mongoose';

var orderSchema = new mongoose.Schema({
    clientId: Number,
    total: Number,
    date: { type: Date, default: Date.Now },
    items: [{
        code: String,
        quantity: Number,
        price: Number
    }]
});

export default mongoose.model('orders', orderSchema);