import mongoose from 'mongoose';

var orderSchema = new mongoose.Schema({
    clientId: mongoose.Schema.Types.ObjectId,
    total: Number,
    date: { type: Date, default: Date.Now },
    items: [{
        code: String,
        quantity: Number,
        price: Number
    }]
});

export default mongoose.model('order', orderSchema);