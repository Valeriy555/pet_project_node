const ApiError = require("../error/custom.error");
const {userServices, containerServices} = require("../services");
const { containerNormalizator} = require("../normalizator");


const checkFieldValidity = (value, fieldName, minLength, fieldType) => {
    if (typeof value !== fieldType || value.length < minLength) {
        throw new ApiError(`Invalid ${fieldName}`, 400);
    }
};

module.exports = {

    isBodyValidCreate: (req, res, next) => {
        try {
            const {shipper, consignee, forwarder, goods, container, consignment} = req.body;

            checkFieldValidity(shipper, "shipper", 2, "string");
            checkFieldValidity(consignee, "consignee", 2, "string");
            checkFieldValidity(forwarder, "forwarder", 2, "string");
            checkFieldValidity(goods, "goods", 2, "string");
            checkFieldValidity(container, "container", 7, "string");
            checkFieldValidity(consignment, "consignment", 7, "string");

            next();
        } catch (e) {
            next(e)
        }
    },

    isBodyValidUpdate: (req, res, next) => {  // проверяем на валидность данные пользователя
        try {
            const {shipper, consignee, forwarder, goods, container, consignment} = req.body;

            if (shipper && (shipper.length < 2 || typeof shipper !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }
            if (consignee && (consignee.length < 2 || typeof consignee !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }
            if (forwarder && (forwarder.length < 2 || typeof forwarder !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }
            if (goods && (goods.length < 2 || typeof goods !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }

            if (container && (container.length < 2 || typeof container !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }
            if (consignment && (consignment.length < 2 || typeof consignment !== 'string')) {

                throw new ApiError(`Wrong name`, 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    containerNormalizator: (req, res, next) => {
        try {
            const {shipper, consignee, forwarder, goods, container, consignment} = req.body;

            if (shipper) req.body.shipper = containerNormalizator.shipper(shipper);
            if (consignee) req.body.consignee = containerNormalizator.consignee(consignee)
            if (forwarder) req.body.forwarder = containerNormalizator.forwarder(forwarder)
            if (goods) req.body.goods = containerNormalizator.goods(goods)
            if (container) req.body.container = containerNormalizator.container(container)
            if (consignment) req.body.consignment = containerNormalizator.consignment(consignment)
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsContainerExist: async (req, res, next) => {
        try {
            const {containerId} = req.params;

            const container = await containerServices.findOneByParams({_id: containerId});

            if (!container) {
                throw new ApiError(`Container with id ${containerId} not found`, 404);
            }

            req.container = containerId;
            next();
        } catch (e) {
            next(e)
        }
    }
}