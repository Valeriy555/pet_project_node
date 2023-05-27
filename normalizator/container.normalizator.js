module.exports = {
    shipper: (shipper) => shipper.charAt(0).toUpperCase() + shipper.slice(1).toLowerCase(),
    consignee: (consignee) => consignee.charAt(0).toUpperCase() + consignee.slice(1).toLowerCase(),
    forwarder: (forwarder) => forwarder.charAt(0).toUpperCase() + forwarder.slice(1).toLowerCase(),
    goods: (goods) => goods.charAt(0).toUpperCase() + goods.slice(1).toLowerCase(),
    container: (container) => container.replace(/\s+/g, '').toUpperCase(),
    consignment: (consignment) => consignment.toUpperCase(),
};