const db = require('../models/index');
const utilityResponse = require('../httpHelpers/utilityResponse.js');
let response;

module.exports = {
    list : async(req,res) => {
        let months;
        // let response;
        try {
            months = await db.Month.findAll({where : {active : true}});
            response = utilityResponse.setResponseBaseForList(months);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    }
}