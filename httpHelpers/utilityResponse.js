const utilityMessage = require("./utilityMessage.js");
const { ResponseBase } = require("./responseBase");
module.exports = {
    setResponseBaseForObj : (object) => {
        return new ResponseBase(true,utilityMessage.successMessage,[],object,null);
    },
    setResponseBaseForList : (list) => {
        return new ResponseBase(true,utilityMessage.successMessage,list,null,null);
    },
    setResponseBaseForError : (errorMessage) => {
        console.log("ERRROR",errorMessage)
        return new ResponseBase(false,utilityMessage.errorMessage,[],null,errorMessage);
    },    
    setResponseBaseForUnathorized : () => {
        return new ResponseBase(false,utilityMessage.unathorizedMessage,[],null,null);
    },
    setResponseBaseForNoDataFound : () => {
        return new ResponseBase(false,utilityMessage.dataNotFoundMessage,[],null,null);
    },
    setResponseBaseForUniqueValidation : () => {
        return new ResponseBase(false,utilityMessage.dataExistsMessage,[],null,null);
    }
}