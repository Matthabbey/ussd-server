import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    id_number:{
        type:String,
        required:true,
        unique:true,
    },
});

//Export the model
export const DataModel = mongoose.model('Ussd', userSchema);