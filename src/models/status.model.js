import {Schema, model} from 'mongoose';

const statusSchema = new Schema({
    name: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Status', statusSchema);
