const db = require('../models/index');
const utilityResponse = require('../httpHelpers/utilityResponse.js');
const segmentationController = require('../controllers/segmentationController');
let response;

module.exports = {
    create : async(req,res) => {
        var segmentation;
        // let response;
        try {
            var {segmentationName,segmentationId,clients} = req.body;
            
            if (segmentationId == null) {
                response = segmentationController.create(req,res);
                if (response.status == true) {
                    segmentationId = response.Object.segmentationId;
                }
            }
            segmentationId = response.Object.segmentationId;
            segmentation = await db.Segmentation.findByPk(segmentationId);
            let myresponse = await segmentation.setClients(clients);
            console.log("Response",myresponse);
            response = utilityResponse.setResponseBaseForObj(segmentation);
            return res.status(200).json(response);
        } catch (error) {
            console.log("Error",error);
            return res.status(200).json(utilityResponse.setResponseBaseForError(error.message));
        }
    }
}