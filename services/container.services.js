const Container = require('../dataBase/Container');

module.exports = {
    findByParams: async (filter = {}) => {
        return Container.find(filter).populate('stage');
    },

    findOneByParams: async (filter = {}) => {
        return Container.findOne(filter);
    },

    findOneByIdWithStage: async (containerId) => {
        return Container.findById(containerId).populate('stage');
    },
    create: async (containerInfo) => {
        return Container.create(containerInfo);
    },

    updateOneById: async (containerId, newInfo) => {
        return Container.findByIdAndUpdate(containerId, newInfo, {new: true})
    },

    updateStageContById: async (containerId, stageId) => { // принимаем только обновленное поле "stage"
        try {
            return await Container.findByIdAndUpdate(
                containerId,
                {$set: {stage: stageId}},
                {new: true}
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteOneById: async (containerId) => {
        return Container.deleteOne({_id: containerId});
    }
}
