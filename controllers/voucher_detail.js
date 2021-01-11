const controller = {}
const models = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

controller.checkValidVoucher = (voucher, username) => {
    return models.voucher_detail.findAll({
        where: {
            [Op.and]:
                [
                    { UserId: { [Op.iLike]: username } },
                    { voucherId: { [Op.iLike]: voucher } },
                ]
        },
        raw: true,
    })
}
controller.getByvoucherId = (ele) => {
    return models.voucher_detail.findAll({
        where: {
            voucherId: { [Op.iLike]: ele }

        },
        raw: true
    })
}
controller.getByUserId = (ele) => {
    return models.voucher_detail.findAll({
        where: {
            UserId: { [Op.iLike]: ele }

        },
        raw: true
    })
}
controller.getAll = () => {
    return models.voucher_detail.findAll({
        raw: true
    })
}

module.exports = controller