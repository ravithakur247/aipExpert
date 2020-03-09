const { User } = require('../models/user');
const { UserExist } = require('../error/userMiddleWareError')
const { USER_EXIST } = require('../constant/message');
const checkUser = async (req, res, next) => {
    try {
        console.log("checking")
        const data = await User.findAll();
        if (Array.isArray(data) && data.length) {
            const error = new UserExist(USER_EXIST)
            throw error;

        } else {
            next()
        }
    } catch (ex) {
        next(ex)

    }
}
module.exports = {
    checkUser
}