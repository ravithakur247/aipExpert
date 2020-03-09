const { importExcelService, UpdateProfileService } = require('../service/importExcelService');
const { UserInsertionError } = require('../error/userMiddleWareError');
const httpstatus = require('../constant/httpstatus');

const { INTERNAL_SERVER_ERROR, SUCCESS } = require('../constant/message');
const importExcel = async (req, res, next) => {
    try {
        await importExcelService();
        res.status(httpstatus.SUCCESS).send(SUCCESS);
    } catch (exception) {
        const error = new UserInsertionError(INTERNAL_SERVER_ERROR);
        next(error)
    }

}
const updateProfile = async (req, res, next) => {

    try {
        const [users] = req.body.users;
        await UpdateProfileService(users)
        res.status(httpstatus.SUCCESS).send(SUCCESS);

    } catch (exception) {
        const error = new UserInsertionError(INTERNAL_SERVER_ERROR);
        next(error)
    }


}

module.exports = {
    importExcel,
    updateProfile
}