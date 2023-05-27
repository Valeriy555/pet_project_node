const InspectionStage = require('../dataBase/InspectionStage');

module.exports = {
    findByParams: async (filter = {}) => {
        return InspectionStage.find(filter);
    },

    findOneByParams: async (filter = {}) => {
        return InspectionStage.findOne(filter);
    },
    create: async (stageInfo) => {
        return InspectionStage.create(stageInfo);
    },

    updateOneById: async (stageId, newInfo) => {
        return InspectionStage.findByIdAndUpdate(stageId, newInfo, {new:true})
    },

    deleteOneById: async (stageId) => {
        return InspectionStage.deleteOne({_id: stageId});
    }
}
