const {Schema, model} = require("mongoose");

const stageSchema = new Schema({
    stage: {type: String, required: true, default: ''},

}, {
    timestamps: true
});

module.exports = model('InspectionStage', stageSchema);