import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    description: String,
    unitPrice: Number,
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Product', productSchema);
