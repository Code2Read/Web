import mongoose from 'mongoose';

var clientSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    address: String,
    email: String
});

export default mongoose.model('clients', clientSchema);