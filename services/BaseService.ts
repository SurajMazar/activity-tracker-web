import { message } from "antd"

class BaseService {

    protected handleError(err:any){
        const error = err.response?err.response.data?err.response.data:undefined:undefined
        let formattedError:{
            message?:string
            data?:any
        } = {};
        if(error){
            if(error.message){
                message.error(error.message)
                formattedError.message = error.message
            }

            if(error.data && Object.values(error.data).length){
                formattedError.message = error.data
                Object.values(error.data).forEach((value:any)=>{
                    if(value && value.length){
                        message.error(value[0])
                    }
                })
            }
        }else{
            formattedError.message = "Something went wrong"
        }

        return formattedError
    }

}


export default BaseService
