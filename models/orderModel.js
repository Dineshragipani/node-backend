import mongoose from 'mongoose';
import { type } from 'node:os';
const orderSchema = mongoose.Schema({
    email:{type:String},
    items:{type:Object},
    total:{type:Number}
});
export default mongoose.model("Order",orderSchema);