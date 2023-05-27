const {Schema, model, Types, } = require("mongoose");

const containerSchema = new Schema({
    shipper: {type: String, required: true, trim: true, default: ''},
    consignee: {type: String, required: true, trim: true, default: ''},
    forwarder: {type: String, required: true, trim: true, default: ''},
    goods: {type: String, required: true, trim: true, default: ''},
    container: {type: String, required: true, trim: true, toUpperCase: true, default: ''},
    consignment: {type: String, required: true, trim: true, toUpperCase: true, default: ''},
    stage: { type: Types.ObjectId, ref: "InspectionStage", populate: { path: 'stage', select: 'stage' } }

}, {
    timestamps: true
});

module.exports = model('Container', containerSchema);