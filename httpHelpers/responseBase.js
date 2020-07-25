class ResponseBase{
    constructor(status,message,list,object,errorMessage){
        this.Status = status;
        this.Message = message;
        this.List = list;
        this.Object = object;
        this.ErrorMessage = errorMessage;
    }
}

module.exports.ResponseBase = ResponseBase;
