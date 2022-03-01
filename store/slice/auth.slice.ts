import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/User.model";

/**
 * AuthStore interface
 */
export interface AuthStore {
    token:string|undefined
    authUser:User|undefined
    authenticated:boolean
    authenticating:boolean
    error:any
}

/**
 * Initial state
 */
const initialState:AuthStore = {
    authUser:undefined,
    authenticated:false,
    authenticating:false,
    token:undefined,
    error:undefined
}


/**
 * Auth slice
 */
const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        
        loginRequest(state){
            state.authenticating = true
        },

        loginSuccess(state,action){
            state.authUser = action.payload.user
            state.token = action.payload.token
            state.authenticating = false
            state.authenticated = true
        },

        loginFailure(state,action){
            state.authenticated = false
            state.token = undefined
            state.authUser = undefined
            state.error = action.payload
            state.authenticating = false
        }
    }
})



export default authSlice
