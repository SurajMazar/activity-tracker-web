import axios from "axios"
import { API_URL } from "../config/app.config"
import messages from "../config/messages"
import AuthService from "../services/Auth.service"
import store, { StoreInterface } from "../store"


const http = () => {

    const state: StoreInterface = store.getState()

    const instance = axios.create({
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: state.auth.token ? 'Bearer ' + state.auth.token : '',
        },
        baseURL: API_URL + '/api/',
    })

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error && error.response && error.response.data) {
                const message = error.response.data.message
                if (message) {
                    if (
                        error.response.data.message ===
                            messages.unauthenticated
                    ) {
                        // store.dispatch(AuthService.Logout(false))
                    }
                }
            } else if (
                error &&
                error.response &&
                error.response.status === 401
            ) {
            } else if (
                error &&
                error.response &&
                error.response.status === 500
            ) {
            } else if (
                error &&
                error.response &&
                error.response.status === 403
            ) {
                if (error.response.data) {
                    if (
                        error.response.data.message ===
                        messages.unauthenticated
                    ) {
                        // store.dispatch(authService.Logout(false))
                    }
                }
            }else{
                return Promise.reject(error)
            }
        }
    )

    return instance

}


export default http
