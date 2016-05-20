import mongoose from 'mongoose';

var clientSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    address: String,
    email: String,
    orders : [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }]
});

export default mongoose.model('clients', clientSchema);