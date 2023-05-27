const {containerServices} = require("../services");

module.exports = {

    getAllContainers: async (req, res, next) => {
        try {
            const containers = await containerServices.findByParams();

            res.json(containers)
        } catch (e) {
            next(e)
        }
    },

    createContainer: async (req, res, next) => {
        try {
            const container = await containerServices.create(req.body);
            res.status(201).json(container)
        } catch (e) {
            next(e);
        }
    },

    findOne: async (req, res, next) => {
        try {
            const {containerId} = req.params;

            const container = await containerServices.findOneByIdWithStage(containerId);

            res.json(container)
        } catch (e) {
            next(e)
        }
    },

    updateContainerById: async (req, res, next) => {
        try {
            const newContainerInfo = req.body;
            const containerId = req.params.containerId;

            const container = await containerServices.updateOneById(containerId, newContainerInfo);

            res.status(201).json(container);
        }catch (e) {
            next(e);
        }
    },

    updateContainerStageById: async (req, res, next) => {
        try {
            const stageId = req.body.newStage;  // Получаем id нового stage из тела запроса
            const containerId = req.params.containerId; // Получаем id контейнера из параметров маршрута

            const container = await containerServices.updateStageContById(containerId, stageId);

            res.status(201).json(container);
        }catch (e) {
            next(e);
        }
    },

    deleteContainerById: async (req, res, next) => {
        try {
            await containerServices.deleteOneById(req.params.containerId);

            res.status(204).send('Ok')
        } catch (e) {
            next(e)
        }
    }
}