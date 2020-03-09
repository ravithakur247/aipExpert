const { INTERNAL_ERROR } = require('../constant/httpstatus');
class UserExist extends Error {
    constructor(msg) {
        super(msg);
        this.httpStatus = INTERNAL_ERROR;
    }
}

class UserInsertionError extends Error {
    constructor(msg) {
        super(msg);
        this.httpStatus = INTERNAL_ERROR;
    }
}
module.exports = {
    UserExist,
    UserInsertionError
}