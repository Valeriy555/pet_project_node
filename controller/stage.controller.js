const {stageServices} = require("../services");

module.exports = {

    getAllStages: async (req, res, next) => {
        try {
            const stages = await stageServices.findByParams();

            res.json(stages)
        } catch (e) {
            next(e)
        }
    },

    createStage: async (req, res, next) => {
        try {
            const stage = await stageServices.create(req.body);
            res.status(201).json(stage)
        } catch (e) {
            next(e);
        }
    },

    updateStageById: async (req, res, next) => {
        try {
            const newStageInfo = req.body;
            const stageId = req.params.stageId;

            const stage = await stageServices.updateOneById(stageId, newStageInfo);

            res.status(201).json(stage);
        }catch (e) {
            next(e);
        }
    },

    deleteStageById: async (req, res, next) => {
        try {
            await stageServices.deleteOneById(req.params.stageId);

            res.status(204).send('Ok')
        } catch (e) {
            next(e)
        }
    }
}