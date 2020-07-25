const db = require('../models/index');
const utilityResponse = require('../httpHelpers/utilityResponse.js');
let response;

module.exports = {
    create : async(req,res) => {
        let activity;
        // let response;
        try {
            const {description,activityDate,clientId} = req.body;
            console.log("ACTIVITY BODY",req.body);
            activity = await db.Activity.create({
                description : description,
                activityDate : activityDate,
                clientId : clientId,
                active : true
            });
            response = utilityResponse.setResponseBaseForObj(activity);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    list : async(req,res) => {
        let activities;
        // let response;
        try {
            activities = await db.Activity.findAll({where : {active : true},
            attributes : ['id','description','activityDate'] ,
            include : [{
                model : db.Client
            }]
            });

            console.log("ACTIVITIES",activities);
            response = utilityResponse.setResponseBaseForList(activities);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    }
}