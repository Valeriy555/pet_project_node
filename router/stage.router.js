const router = require('express').Router();

const StageController = require('../controller/stage.controller');


router.get('/', StageController.getAllStages);

router.post('/', StageController.createStage);

router.put('/:stageId', StageController.updateStageById);

router.delete('/:stageId', StageController.deleteStageById);

module.exports = router;