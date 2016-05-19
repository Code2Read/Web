import mongoose from 'mongoose';

var clientSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String
});

export default mongoose.model('client',clientSchema);