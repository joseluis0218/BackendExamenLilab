const db = require('../models/index');
const utilityResponse = require('../httpHelpers/utilityResponse.js');
const segmentationController = require('../controllers/segmentationController');

let response;

module.exports = {
    create : async(req,res) => {
        let segmentation;
        // let response;
        try {
            const {name} = req.body;

            segmentation = await db.Segmentation.findOne({where : {name : name,active : true}});
            if (segmentation) {
                response = utilityResponse.setResponseBaseForUniqueValidation();
            }else{
                segmentation = await db.Segmentation.create({
                    name : name,
                    active : true
                });
                response = utilityResponse.setResponseBaseForObj(segmentation);
            }

            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    segment : async(req,res) => {
        var segmentation;
        // let response;
        try {
            var {segmentationName,segmentationId,clients} = req.body;
            
            console.log("BODY FOR SEGMENT",req.body)
            if (segmentationId == null) {
                segmentation = await db.Segmentation.create({
                    name : segmentationName,
                    active : true
                });
                console.log("segmentation",segmentation);
                if (segmentation) {
                    segmentationId = segmentation.id;
                }
            }
            segmentation = await db.Segmentation.findByPk(segmentationId);
            let myresponse = await segmentation.setClients(clients);
            console.log("Response",myresponse);
            response = utilityResponse.setResponseBaseForObj(segmentation);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    list : async(req,res) => {
        let segmentations;
        // let response;
        try {
            segmentations = await db.Segmentation.findAll({where : {active : true}});
            response = utilityResponse.setResponseBaseForList(segmentations);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    update : async(req,res) => {
        let segmentation;
        // let response;
        try {
            const {id,name} = req.body;
            console.log("BODY UPDATE",req.body)

            segmentation = await db.Segmentation.findByPk(id);
            if (segmentation) {
                await segmentation.update({ name: name}, {fields: ['name']});
                response = utilityResponse.setResponseBaseForObj(segmentation);
            }else{
                response = utilityResponse.setResponseBaseForNoDataFound();
            }
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
    delete : async(req,res) => {
        let segmentation;
        // let response;
        try {
            const {id} = req.body;

            segmentation = await db.Segmentation.findByPk(id);
            if (segmentation) {
                await segmentation.update({ active: false}, {fields: ['active']});
                response = utilityResponse.setResponseBaseForObj(segmentation);
            }else{
                response = utilityResponse.setResponseBaseForNoDataFound();
            }

            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    },
}