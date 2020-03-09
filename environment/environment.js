require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    USER:process.env.USER,
    PASSWORD:process.env.PASSWORD,
    HOST:process.env.HOST,
    DIALECT:process.env.DIALECT,
    SPREADSHEETID:process.env.SPREADSHEETID

}