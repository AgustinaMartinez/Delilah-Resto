import {Schema, model} from 'mongoose';

const orderSchema = new Schema({
    idUser: [{
        ref: "User",
        type: Schema.Types.ObjectId
    }],
    idProduct: [{
        ref: "Product",
        type: Schema.Types.ObjectId
    }],
    status: [{
        ref: "Status",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model('Order', orderSchema);
