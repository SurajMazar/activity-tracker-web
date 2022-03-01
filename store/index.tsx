import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { AuthStore } from "./slice/auth.slice";


/**
 * Store Interface
 */
export interface StoreInterface {
    auth:AuthStore
}


/**
 * Redux store instance
 */
const store = configureStore({
    reducer,
    devTools:process.env.NODE_ENV !== "development",
})


export default store
