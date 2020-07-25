const db = require('../models/index');
const utilityResponse = require('../httpHelpers/utilityResponse.js');
const Sequelize = require('sequelize');
const { sequelize } = require('../models/index');
let response;

module.exports = {
    create : async(req,res) => {
        let client;
        // let response;
        try {
            const {firstName,lastName,email,birthdayDate} = req.body;

            client = await db.Client.findOne({where : {firstName : firstName,lastName : lastName, active : true}});
            if (client) {
                response = utilityResponse.setResponseBaseForUniqueValidation();
            }else{
                client = await db.Client.create({
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    birthdayDate : birthdayDate,
                    active : true
                });
                response = utilityResponse.setResponseBaseForObj(client);
            }

            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    list : async(req,res) => {
        let clients;
        // let response;
        try {
            clients = await db.Client.findAll({where : {active : true}});
            response = utilityResponse.setResponseBaseForList(clients);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },

    getClientsByFilter : async(req,res) => {
        let clients;
        // let response;
        try {
            const {lastVisitMonth,birthdayMonth,activity} = req.body;

            console.log("REQUEST FOR FILTER",req.body);
            clients = await sequelize.query('CALL GetClientsByFilter (:lastVisitMonth, :birthdayMonth, :activity)', 
            {replacements: { lastVisitMonth: lastVisitMonth, birthdayMonth: birthdayMonth, activity: activity, }})

            response = utilityResponse.setResponseBaseForList(clients);

            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    }
}