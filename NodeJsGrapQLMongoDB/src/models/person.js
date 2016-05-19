import mongoose from 'mongoose';

var personSchema = new mongoose.Schema({
    name:{
        type: String
    },
    lastName:{
        type: String
    }
});

export default mongoose.model('person',personSchema);