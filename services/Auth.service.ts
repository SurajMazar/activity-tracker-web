import { Dispatch } from "redux";
import authSlice from "../store/slice/auth.slice";
import http from "../utils/http.utils";
import BaseService from "./BaseService";

class AuthService extends BaseService{

    /**
     * @var
     */
    protected authActions;

    /**
     * @params 
     */
    constructor(){
        super()
        this.authActions = authSlice.actions
    }

    public login(params:FormData){
        return async (dispatch:Dispatch)=>{
            try{
                const response = await http().post('api/login',params)
                const responseData = response.data

                if(responseData){

                    const authData = {
                        token: responseData.data.token,
                        user:responseData.data.user
                    }

                    dispatch(this.authActions.loginSuccess(authData))
                }

            }catch(e:any){
                const formattedError = this.handleError(e)
                dispatch(this.authActions.loginFailure(formattedError))
            }
        } 
    }
}


export default new AuthService()
