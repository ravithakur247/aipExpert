const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('../constant/client_secret.json');
const { SPREADSHEETID } = require('../environment/environment');

const { User } = require('../models/user');
const { Profile } = require('../models/profile');
const importExcelService = async () => {
    const doc = new GoogleSpreadsheet(SPREADSHEETID);

    doc.useServiceAccountAuth(creds, async function (err) {


        doc.getRows(1, async function (err, rows) {

            console.log(rows);
            await addUser(rows)

        });

    });
}
const addUser = async (data) => {
    await User.bulkCreate(data);
}

const UpdateProfileService = async (data) => {

    for (const profile of data) {
        await updateService(profile)
    }


}
const updateService = async (data) => {
    const profileData = await Profile.create(data);
    if (profileData) {

        const UserData = await User.update(
            { profileEntryStatus: 'Success' },
            { returning: true, where: { firstName: data.profileName.split(' ')[0] } }
        )
    } else {
        const UserData = await User.update(
            { profileEntryStatus: 'failed' },
            { returning: true, where: { firstName: data.profileName.split(' ')[0] } }
        )
    }



}

module.exports = {
    importExcelService,
    UpdateProfileService

}