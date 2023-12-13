
import mongoose from "mongoose";
let Schema = mongoose.Schema;

let motorciclesSchema = Schema({
    reference: String,
    cc: String,
    engine_type: String,
    price: String,
    description: String,
    photo: String,

});

export default mongoose.model('motorcycles', motorciclesSchema, 'motorcycles');