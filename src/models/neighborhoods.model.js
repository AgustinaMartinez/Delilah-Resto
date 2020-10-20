import {Schema, model} from 'mongoose';

const neighborhoodSchema = new Schema({
    name: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Neighborhood', neighborhoodSchema);
