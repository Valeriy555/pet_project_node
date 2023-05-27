const router = require('express').Router();

const ContainerController = require('../controller/container.controller');
const ContainerMiddleware = require('../middleware/container.middleware');

router.get('/', ContainerController.getAllContainers);

router.post('/',
    ContainerMiddleware.isBodyValidCreate,
    ContainerMiddleware.containerNormalizator,
    ContainerController.createContainer);

router.get('/:containerId', ContainerController.findOne);


router.put('/:containerId',
    ContainerMiddleware.isBodyValidUpdate,
    ContainerMiddleware.containerNormalizator,
    ContainerMiddleware.checkIsContainerExist,
    ContainerController.updateContainerById);

router.put('/:containerId/stage',
    ContainerMiddleware.checkIsContainerExist,
    ContainerController.updateContainerStageById);


router.delete('/:containerId', ContainerController.deleteContainerById);

module.exports = router;

