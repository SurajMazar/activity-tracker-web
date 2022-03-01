import layoutTypes from "../config/layoutTypes";
import { applyAppLayout } from "./App";
import { applyAuthLayout } from "./Auth";

/**
 * 
 * @param page 
 * @param layout 
 * @returns 
 */
const applyLayout = (page:React.ReactElement,layout:keyof typeof layoutTypes|undefined) =>{
    switch(layout){

        case layoutTypes.app: 
            return applyAppLayout(page)
        
        case layoutTypes.auth:
            return applyAuthLayout(page)
        
        default:
            return page
    }
}

export default applyLayout
